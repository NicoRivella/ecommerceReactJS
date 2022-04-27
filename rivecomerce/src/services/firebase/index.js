// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBDys3qk6mCuH1E0Nl5uMT1GpjXLHFi2tQ",
  authDomain: "rivecommerce.firebaseapp.com",
  projectId: "rivecommerce",
  storageBucket: "rivecommerce.appspot.com",
  messagingSenderId: "830268543890",
  appId: "1:830268543890:web:1ec8ace5f4069a3623274b",
  measurementId: "G-921GWR9V4G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

export const firestoreDb = getFirestore(app) 