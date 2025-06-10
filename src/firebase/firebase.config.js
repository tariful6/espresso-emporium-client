// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAtqEQnv5m_EQdQL7sk8Xl2Yvw5zWRo52s",
  authDomain: "coffee-shop-2abc5.firebaseapp.com",
  projectId: "coffee-shop-2abc5",
  storageBucket: "coffee-shop-2abc5.firebasestorage.app",
  messagingSenderId: "976160591113",
  appId: "1:976160591113:web:ed1bf69d3e0d16406b17d8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;