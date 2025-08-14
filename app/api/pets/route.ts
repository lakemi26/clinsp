import { NextResponse } from "next/server";
import { adminDb } from "@/app/firebase/admin";
import { getServerUser } from "@/app/firebase/auth/getServerUser";

export async function POST(req: Request) {
  const user = await getServerUser();
  if (!user)
    return NextResponse.json({ error: "unauthorized" }, { status: 401 });

  try {
    const data = await req.json();
    const now = new Date();

    const doc = await adminDb.collection("pets").add({
      ...data,
      createdAt: now,
      createdBy: {
        uid: user.uid,
        email: user.email ?? null,
      },
    });

    return NextResponse.json({ id: doc.id }, { status: 201 });
  } catch (e: any) {
    return NextResponse.json(
      { error: e?.message ?? "failed" },
      { status: 400 }
    );
  }
}
