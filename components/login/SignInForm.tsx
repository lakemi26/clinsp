"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { signInWithEmailAndPassword } from "firebase/auth";
import { clientAuth } from "@/app/firebase/firebaseClient";

export default function SignInForm() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    setErrorMessage(null);

    try {
      const cred = await signInWithEmailAndPassword(
        clientAuth,
        email,
        password
      );
      const idToken = await cred.user.getIdToken(true);

      const res = await fetch("/api/sessionLogin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ idToken }),
      });
      if (!res.ok) throw new Error();

      router.replace("/cadastro");
    } catch {
      setErrorMessage("Login inválido!");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-3 mt-5 max-w-sm">
      <label className="text-cyan-700">Email</label>
      <input
        type="email"
        placeholder="email@exemplo.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="border-2 border-cyan-700 rounded-sm p-2"
        required
        autoComplete="email"
      />

      <label className="text-cyan-700">Senha</label>
      <input
        type="password"
        placeholder="Sua senha"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="border-2 border-cyan-700 rounded-sm p-2"
        required
        autoComplete="current-password"
      />

      {errorMessage && <p className="text-sm text-red-600">{errorMessage}</p>}

      <button
        className="py-2 px-3 bg-cyan-600 rounded-sm text-white font-semibold w-48 m-auto disabled:opacity-60"
        type="submit"
        disabled={submitting}
      >
        {submitting ? "Entrando..." : "Entrar"}
      </button>
    </form>
  );
}
