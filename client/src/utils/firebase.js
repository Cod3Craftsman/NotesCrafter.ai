// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "examnotesgenerator-3221d.firebaseapp.com",
  projectId: "examnotesgenerator-3221d",
  storageBucket: "examnotesgenerator-3221d.firebasestorage.app",
  messagingSenderId: "166409571232",
  appId: "1:166409571232:web:34cba392ecbec2eddf72c5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Auth instance
const auth = getAuth(app);

// Google provider
const provider = new GoogleAuthProvider();

export { auth, provider };
