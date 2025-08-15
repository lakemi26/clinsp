import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.FIREBASE_APIKEY,
  authDomain: process.env.FIREBASE_AUTHDOMAIN,
  projectId: process.env.FIREBASE_PROJECTID,
  storageBucket: process.env.FIREBASE_STORAGEBUCKET,
  messaginSenderId: process.env.FIREBASE_MESSAGINDENDERID,
  appId: process.env.FIREBASE_APPID,
  measurementId: process.env.FIREBASE_MEASUREMENTID,
};

if (process.env.NODE_ENV !== "production") {
  for (const [k, v] of Object.entries(firebaseConfig)) {
    if (!v) console.warn(`[firebase] Variável de ambiente ausente: ${k}`);
  }
}
// const app: FirebaseApp = getApps().length
//   ? getApp()
//   : initializeApp(firebaseConfig);
const app = initializeApp(firebaseConfig);

console.log(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;
