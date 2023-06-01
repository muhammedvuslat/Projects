import { initializeApp } from "firebase/app";
import {
  getAuth,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";

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

// kullancının kayıt işlemlerini sağlayan fonksiyon register page de kullanılıyor

export const createUser = async (email, password, navigate) => {
  try {
    let userTest = await createUserWithEmailAndPassword(auth, email, password);
    console.log(userTest);
    navigate("/");
  } catch (error) {
    console.log(error.message);
  }
};

// kullancının giriş yapmasını sağlar login page de çağrılır
export const signIn = async (email, password, navigate) => {
  try {
    let loginUser = await signInWithEmailAndPassword(auth, email, password);
    console.log(loginUser);
    navigate("/");
  } catch (error) {
    console.log(error.message);
  }
};

// kullancının giriş kontrolünü sağlar ve bunun  hakkında bilgi verir
export const userState = (setCurrentUser) => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      const { email, displayName, photoURL } = user;
      setCurrentUser({ email, displayName, photoURL });
      console.log(`User login${user}`);
    } else {
      console.log("user logout");
    }
  });
};

export const userSignOut = () => {
  signOut(auth);
};
