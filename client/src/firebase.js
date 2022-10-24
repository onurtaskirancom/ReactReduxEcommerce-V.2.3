import "firebase/auth"
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAuXv6XTyZKiq2p3G0cnnas_FQ-HKFKo5U",
  authDomain: "ecommerce-d1768.firebaseapp.com",
  projectId: "ecommerce-d1768",
  storageBucket: "ecommerce-d1768.appspot.com",
  messagingSenderId: "843023377156",
  appId: "1:843023377156:web:adcc93aec48120371be651"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);



// // export
// export const auth = firebase.auth();
// export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();


export { auth, googleAuthProvider };
export default db;
