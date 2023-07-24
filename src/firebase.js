import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDb1eS_wEoipy5etvXH8l0NGa3Wi4Nrzfo",

  authDomain: "nesatbaba-app.firebaseapp.com",

  projectId: "nesatbaba-app",

  storageBucket: "nesatbaba-app.appspot.com",

  messagingSenderId: "254752846892",

  appId: "1:254752846892:web:d0cab812d7edb2e5f6cd89",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
