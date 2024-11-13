// create firebase config here and export the db object
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCtWdWRFSSvOSujbQhQxxIclijSsfi4Iag",
  authDomain: "friend-s-store.firebaseapp.com",
  projectId: "friend-s-store",
  storageBucket: "friend-s-store.firebasestorage.app",
  messagingSenderId: "384527535759",
  appId: "1:384527535759:web:3c59156a6f026d9a75aafa",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
