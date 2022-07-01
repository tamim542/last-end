// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDLXcJFV59ci_NQwfCQtEl2YsLyb0pOBFY",
  authDomain: "origin-cloud-technologies.firebaseapp.com",
  projectId: "origin-cloud-technologies",
  storageBucket: "origin-cloud-technologies.appspot.com",
  messagingSenderId: "845079441208",
  appId: "1:845079441208:web:3b98a9663eff9f28221bcd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default  auth;
