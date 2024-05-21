// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBTlKp09RX81yVNYZG6kM7fEXT-UyUtwak",
  authDomain: "vite-contact-84ac6.firebaseapp.com",
  projectId: "vite-contact-84ac6",
  storageBucket: "vite-contact-84ac6.appspot.com",
  messagingSenderId: "25318208830",
  appId: "1:25318208830:web:8351cdfac6baa601e3686f"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)