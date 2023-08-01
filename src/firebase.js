// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDBogeVkUJzO8XuQS_yYMOdfDS5nc9vrWs",
  authDomain: "auth-57bba.firebaseapp.com",
  projectId: "auth-57bba",
  storageBucket: "auth-57bba.appspot.com",
  messagingSenderId: "21750979722",
  appId: "1:21750979722:web:81add899a75c48b1c0e173",
  measurementId: "G-8B20MKGKF5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
