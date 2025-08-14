import { adminDb } from "@/app/firebase/admin";
import { getServerUser } from "./getServerUser";

export async function requireAdmin() {
  const user = await getServerUser();
  if (!user?.email) return null;

  const doc = await adminDb.collection("admins").doc(user.email).get();
  if (!doc.exists || doc.data()?.active !== true) return null;

  return user;
}
