// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDJBh9SDiSgiFJFJXAEG5md6Da_zRHZnNw",
  authDomain: "fbauth-stai.firebaseapp.com",
  projectId: "fbauth-stai",
  storageBucket: "fbauth-stai.appspot.com",
  messagingSenderId: "188032125429",
  appId: "1:188032125429:web:8c151c9f24d5a3ab0eb8bc",
  measurementId: "G-Z29FRK9YHL"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);