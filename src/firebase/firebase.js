import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCpaqbvqP0Vw9p-Km52D6MPBjRPbj3ahfs",
  authDomain: "portfolioflowai.firebaseapp.com",
  projectId: "portfolioflowai",
  storageBucket: "portfolioflowai.firebasestorage.app",
  messagingSenderId: "324975270560",
  appId: "1:324975270560:web:61f49790de6137087787c5",
  measurementId: "G-EN0LFP2RDL",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;