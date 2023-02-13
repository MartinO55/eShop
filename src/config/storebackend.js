// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getFirestore, collection, getDocs } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDFE4n59O9J1p6RQRzxP-U-q66kWqgdFXg",
  authDomain: "nology-eshop.firebaseapp.com",
  projectId: "nology-eshop",
  storageBucket: "nology-eshop.appspot.com",
  messagingSenderId: "28977154049",
  appId: "1:28977154049:web:d9beaed5548f70f0a39800",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
