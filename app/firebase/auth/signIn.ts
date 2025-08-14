"use client";

import firebaseConfig from "../firebaseConfig";
import { signInWithEmailAndPassword, getAuth } from "firebase/auth";
import { auth } from "../firebaseConfig";

const auth1 = getAuth(firebaseConfig);

export default async function signIn(email: string, password: string) {
  console.log(auth);
  console.log(auth1);
  try {
    const result = await signInWithEmailAndPassword(auth1, email, password);
    return { result, error: null };
  } catch (error) {
    return { result: null, error };
  }
}
