// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
//importing so that we dont need to do many time and down also wrote auth

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBtAqIETDBvkcBfOvyk8bpbiQeX7VxSuT8",
  authDomain: "netflix-3cc1c.firebaseapp.com",
  projectId: "netflix-3cc1c",
  storageBucket: "netflix-3cc1c.appspot.com",
  messagingSenderId: "540807065218",
  appId: "1:540807065218:web:cf1f41dc46c89f07ff4e9b",
  measurementId: "G-FPZNQKR10X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
