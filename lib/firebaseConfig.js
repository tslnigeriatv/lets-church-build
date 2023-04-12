// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
    apiKey: "AIzaSyDaLHsO6SxhbbEqGwIbFSA7W_dsEcv67XA",
    authDomain: "letschurch-67180.firebaseapp.com",
    projectId: "letschurch-67180",
    storageBucket: "letschurch-67180.appspot.com",
    messagingSenderId: "1070327935357",
    appId: "1:1070327935357:web:f4716cbf826aa210491c14",
    measurementId: "G-3MZCNQ4VHJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const db = getFirestore(app);

export const auth = getAuth(app);