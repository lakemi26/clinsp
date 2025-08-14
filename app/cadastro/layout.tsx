import { ReactNode } from "react";
import { redirect } from "next/navigation";
import { getServerUser } from "@/app/firebase/auth/getServerUser";

export default async function CadastroLayout({
  children,
}: {
  children: ReactNode;
}) {
  const user = await getServerUser();
  if (!user) redirect("/Login");
  return <>{children}</>;
}
