import { initializeApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// 🔍 DEBUG: check env variables (remove later)
console.log("🔥 Firebase ENV check:", {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
});

// Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

// ❌ Hard fail if env is missing (prevents infinite "Sending...")
if (!firebaseConfig.projectId) {
  throw new Error(
    "❌ Firebase env variables are missing. Check your .env file and restart Vite."
  );
}

// Initialize Firebase ONLY ONCE
const app = getApps().length === 0
  ? initializeApp(firebaseConfig)
  : getApps()[0];

// Firestore database
export const db = getFirestore(app);

export default app;
