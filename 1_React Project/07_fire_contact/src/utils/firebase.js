// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: REACT_APP_FIRE_BASE_API_KEY,
  authDomain: REACT_APP_FIRE_BASE_AUTH_DOMAIN,
  databaseURL: REACT_APP_FIRE_BASE_DATABASE_URL,
  projectId: REACT_APP_FIRE_BASE_PROJECT_ID,
  storageBucket: REACT_APP_FIRE_BASE_STORAGE_BUCKET,
  messagingSenderId: REACT_APP_FIRE_BASE_MESSAGING_SENDER_ID,
  appId: REACT_APP_FIRE_BASE_APP_ID,
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
export default firebase;
