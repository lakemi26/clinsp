"use client";

import { initializeApp, getApp, getApps, type FirebaseApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const config = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

if (typeof window !== "undefined" && process.env.NODE_ENV !== "production") {
  const missing = Object.entries(config)
    .filter(([, v]) => !v)
    .map(([k]) => k);

  console.log(
    "[firebase] config check → authDomain:",
    config.authDomain,
    "projectId:",
    config.projectId
  );
  if (missing.length) {
    throw new Error(
      "[firebase] Variáveis ausentes no cliente: " + missing.join(", ")
    );
  }
}

const app: FirebaseApp = getApps().length ? getApp() : initializeApp(config);

export const clientAuth = getAuth(app);
export const clientDb = getFirestore(app);
export const clientStorage = getStorage(app);
export default app;
