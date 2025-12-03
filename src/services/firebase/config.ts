import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "entities-studio.firebaseapp.com",
  projectId: "entities-studio",
  storageBucket: "entities-studio.firebasestorage.app",
  messagingSenderId: "368978493399",
  appId: "1:368978493399:web:7e188fc31f9c8078c39592",
  measurementId: "G-Z06YKWLQGQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);