import { initializeApp } from "firebase/app";

//firebase configuration

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_API_ID,
  googleapis: process.env.NEXT_PUBLIC_GOOGLE_API_KEY,
  googleMapsKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY,
};

export const firebaseApp = initializeApp(firebaseConfig);
