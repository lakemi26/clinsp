// src/actions/adocaoActions.ts
"use server";

import { revalidatePath } from "next/cache";
import { adminDb } from "@/app/firebase/admin";
import { getServerUser } from "@/app/firebase/auth/getServerUser";
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME!, // ← vem das envs
  api_key: process.env.CLOUDINARY_API_KEY!,
  api_secret: process.env.CLOUDINARY_API_SECRET!,
});

export async function registerPet(formData: FormData) {
  const user = await getServerUser();
  if (!user) throw new Error("unauthorized");

  const nome = (formData.get("nome") as string)?.trim();
  const descricao = (formData.get("descricao") as string)?.trim();
  const imagem = formData.get("imagem") as File | null;
  if (!nome || !descricao || !imagem) throw new Error("missing-fields");

  // File → Buffer
  const arrayBuffer = await imagem.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);

  // Upload stream (seguro, no servidor)
  const uploadRes: any = await new Promise((resolve, reject) => {
    cloudinary.uploader
      .upload_stream(
        { folder: "clinsp/pets", resource_type: "image" },
        (err, res) => (err ? reject(err) : resolve(res))
      )
      .end(buffer);
  });

  const imageUrl = uploadRes.secure_url as string;
  const publicId = uploadRes.public_id as string;

  const docRef = await adminDb.collection("pets").add({
    nome,
    descricao,
    imageUrl,
    imagePublicId: publicId,
    createdAt: new Date(),
    createdBy: { uid: user.uid, email: user.email ?? null },
  });

  revalidatePath("/cadastro");
  revalidatePath("/");

  return { id: docRef.id };
}
