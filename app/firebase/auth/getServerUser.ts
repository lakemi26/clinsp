import { cookies } from "next/headers";
import { adminAuth } from "@/app/firebase/admin";

export async function getServerUser() {
  const session = (await cookies()).get("__session")?.value;
  if (!session) return null;
  try {
    return await adminAuth.verifySessionCookie(session, true);
  } catch {
    return null;
  }
}
