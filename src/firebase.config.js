// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBDqP1Ee7Mdcx8dnkfKiHZZlKknBv7AxXw",
  authDomain: "jobportal-b8e4f.firebaseapp.com",
  projectId: "jobportal-b8e4f",
  storageBucket: "jobportal-b8e4f.appspot.com",
  messagingSenderId: "849054107164",
  appId: "1:849054107164:web:c1f7e3cdbf0265fb08c1d9",
  measurementId: "G-7FFV0BCTQY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db};