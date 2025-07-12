// Client SDK — only runs in the browser
import { initializeApp, getApps } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD8B3huwcPMx9WPqaZOeKB4y7VeRfDASZU",
  authDomain: "veteran-165a6.firebaseapp.com",
  projectId: "veteran-165a6",
  storageBucket: "veteran-165a6.appspot.com", // FIX: typo: should be .appspot.com
  messagingSenderId: "382682688292",
  appId: "1:382682688292:web:ddfc0b3c397e06a3f121b1",
  measurementId: "G-BDDWRBZ5TV",
};

// ✅ Make sure you only initialize once!
const app = getApps().length ? getApps()[0] : initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
