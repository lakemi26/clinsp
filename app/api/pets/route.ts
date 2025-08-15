import { NextResponse } from "next/server";
import { adminDb } from "@/app/firebase/admin";
import { getServerUser } from "@/app/firebase/auth/getServerUser";

function getErrorMessage(error: unknown): string {
  if (error instanceof Error) return error.message;
  return String(error);
}

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
  } catch (e: unknown) {
    const error = getErrorMessage(e);
    return NextResponse.json({ error }, { status: 400 });
  }
}
