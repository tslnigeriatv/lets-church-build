// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";
// import { getAuth } from "firebase/auth";
// https://firebase.google.com/docs/web/setup#available-libraries

import firebase from 'firebase/compat/app';
import 'firebase/compat/app';
import 'firebase/compat/firestore';


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
    apiKey: "AIzaSyBs4HUcRDenFljoabVbkAkjo2GQDKDSu20",
    authDomain: "lets-church-build.firebaseapp.com",
    projectId: "lets-church-build",
    storageBucket: "lets-church-build.appspot.com",
    messagingSenderId: "270880612153",
    appId: "1:270880612153:web:90ac764377570d950ad2e8",
    measurementId: "G-5JRKSHB80H"
};

// Initialize Firebase
if (!firebase.app.length){
    firebase.initializeApp(firebaseConfig)
}

export {firebase}
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// const db = getFirestore(app);

// const auth = getAuth(app);