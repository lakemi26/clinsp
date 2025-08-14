"use server";

import { revalidatePath } from "next/cache";
import { adminDb } from "@/app/firebase/admin";
import { getServerUser } from "@/app/firebase/auth/getServerUser";
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME!,
  api_key: process.env.CLOUDINARY_API_KEY!,
  api_secret: process.env.CLOUDINARY_API_SECRET!,
});

export async function registerPet(formData: FormData): Promise<void> {
  const user = await getServerUser();
  if (!user) throw new Error("unauthorized");

  const nome = (formData.get("nome") as string)?.trim();
  const descricao = (formData.get("descricao") as string)?.trim();
  const imagem = formData.get("imagem") as File | null;
  if (!nome || !descricao || !imagem) throw new Error("missing-fields");

  const buffer = Buffer.from(await imagem.arrayBuffer());

  const upload: any = await new Promise((resolve, reject) => {
    cloudinary.uploader
      .upload_stream(
        { folder: "clinsp/pets", resource_type: "image" },
        (err, res) => (err ? reject(err) : resolve(res))
      )
      .end(buffer);
  });

  await adminDb.collection("pets").add({
    nome,
    descricao,
    imageUrl: upload.secure_url,
    imagePublicId: upload.public_id,
    createdAt: new Date(),
    createdBy: { uid: user.uid, email: user.email ?? null },
  });

  revalidatePath("/cadastro");
  revalidatePath("/");
}

export async function updatePet(formData: FormData): Promise<void> {
  const user = await getServerUser();
  if (!user) throw new Error("unauthorized");

  const id = (formData.get("petId") as string)?.trim();
  const nome = (formData.get("nome") as string)?.trim();
  const descricao = (formData.get("descricao") as string)?.trim();
  const novaImagem = formData.get("imagem") as File | null;

  if (!id || !nome || !descricao) throw new Error("missing-fields");

  const docRef = adminDb.collection("pets").doc(id);
  const snap = await docRef.get();
  if (!snap.exists) throw new Error("not-found");

  let patch: any = { nome, descricao, updatedAt: new Date() };

  if (novaImagem && novaImagem.size > 0) {
    const oldPublicId = snap.data()?.imagePublicId as string | undefined;

    const buffer = Buffer.from(await novaImagem.arrayBuffer());
    const upload: any = await new Promise((resolve, reject) => {
      cloudinary.uploader
        .upload_stream(
          { folder: "clinsp/pets", resource_type: "image" },
          (err, res) => (err ? reject(err) : resolve(res))
        )
        .end(buffer);
    });

    patch.imageUrl = upload.secure_url;
    patch.imagePublicId = upload.public_id;

    if (oldPublicId) {
      await cloudinary.uploader.destroy(oldPublicId).catch(() => {});
    }
  }

  await docRef.update(patch);
  revalidatePath("/cadastro");
  revalidatePath("/");
}

export async function deletePet(formData: FormData): Promise<void> {
  const user = await getServerUser();
  if (!user) throw new Error("unauthorized");

  const id = (formData.get("petId") as string)?.trim();
  if (!id) throw new Error("missing-id");

  const docRef = adminDb.collection("pets").doc(id);
  const snap = await docRef.get();
  if (!snap.exists) return;

  const publicId = snap.data()?.imagePublicId as string | undefined;
  await docRef.delete();
  if (publicId) await cloudinary.uploader.destroy(publicId).catch(() => {});

  revalidatePath("/cadastro");
  revalidatePath("/");
}
