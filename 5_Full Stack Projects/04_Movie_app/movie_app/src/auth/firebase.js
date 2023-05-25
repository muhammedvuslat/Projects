import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

//* Your web app's Firebase configuration
//* Your web app's Firebase configuration
// TODO: Replace the following with your app's Firebase project configuration
//* https://firebase.google.com/docs/auth/web/start
//* https://console.firebase.google.com/ => project settings
//! firebase console settings bölümünden firebaseconfig ayarlarını al
//! Normal kullanımda google firebase de config ayarları bu alana yapıştırılır fakat veri gizliliği ve korunması adına .env dosyasına ekleyip bu konumdan .env dan alınmasını sağlıyoruz
const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export const createUser = async (email, password) => {
  try {
    let userTest = await createUserWithEmailAndPassword(auth, email, password);
    console.log(userTest);
  } catch (error) {
    console.log(error.message);
  }
};
