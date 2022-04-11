// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBNyLdOXO-lV8ri9UTGH9w1LUMZ2S1bexg",
  authDomain: "ema-jhon-resource.firebaseapp.com",
  projectId: "ema-jhon-resource",
  storageBucket: "ema-jhon-resource.appspot.com",
  messagingSenderId: "905906922801",
  appId: "1:905906922801:web:b51c98a9a93fb06009bc10",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
