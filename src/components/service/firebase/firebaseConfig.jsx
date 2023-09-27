// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAVpt3rOuPJAQr12JwVMwCpIxD1V1T74rk",
  authDomain: "thor-ecommerce.firebaseapp.com",
  projectId: "thor-ecommerce",
  storageBucket: "thor-ecommerce.appspot.com",
  messagingSenderId: "15060249816",
  appId: "1:15060249816:web:679019331696ed13dbfbad"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)