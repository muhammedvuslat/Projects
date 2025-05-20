// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCLImRFpCDw3seafDJzF-Fl08-QSa_Aiwk",
  authDomain: "fire-contact-app-7c751.firebaseapp.com",
  databaseURL:
    "https://fire-contact-app-7c751-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "fire-contact-app-7c751",
  storageBucket: "fire-contact-app-7c751.firebasestorage.app",
  messagingSenderId: "240353537379",
  appId: "1:240353537379:web:92cec9332a1f705c20f756",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default { database };

export const database = getDatabase(app);
