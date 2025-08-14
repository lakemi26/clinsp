import { NextResponse } from "next/server";
import { adminAuth } from "@/app/firebase/admin";

const COOKIE = "__session";

export async function POST(req: Request) {
  try {
    const { idToken } = await req.json();
    if (!idToken) {
      return NextResponse.json({ error: "Missing idToken" }, { status: 400 });
    }

    const sessionCookie = await adminAuth.createSessionCookie(idToken, {
      expiresIn: 5 * 24 * 60 * 60 * 1000,
    });

    const res = NextResponse.json({ ok: true });
    res.cookies.set(COOKIE, sessionCookie, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
    });
    return res;
  } catch (e: any) {
    return NextResponse.json(
      { error: e?.message ?? "sessionLogin failed" },
      { status: 401 }
    );
  }
}
