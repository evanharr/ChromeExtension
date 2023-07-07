// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut
} from "firebase/auth";
import {getDatabase, set, ref, update} from "firebase/database";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAEBHH-UYWXYWJ-0te24SFelNrCt3rYwjc",
  authDomain: "shopping-board.firebaseapp.com",
  databaseURL: "https://shopping-board-default-rtdb.firebaseio.com",
  projectId: "shopping-board",
  storageBucket: "shopping-board.appspot.com",
  messagingSenderId: "994991797374",
  appId: "1:994991797374:web:239f277316784ff9fe542f",
  measurementId: "G-ET990XT0HW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const database = getDatabase(app);

export default app;

/*
"background": {
    "service_worker": "firebase.js",
    "type": "module"
  }
*/