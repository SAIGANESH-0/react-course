// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAX8fex63nW2BelrrH7Efn23vcvsbHltwo",
  authDomain: "shopping-23c42.firebaseapp.com",
  projectId: "shopping-23c42",
  storageBucket: "shopping-23c42.appspot.com",
  messagingSenderId: "1081223625010",
  appId: "1:1081223625010:web:0df8c635c70b69bb11ff2b",
  measurementId: "G-LSWJJJEZFL",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();
export default auth;
