// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAMsSGnOFwQzLnkWnkP_8xniSDu4uhpDS8",
  authDomain: "elite-property-3d758.firebaseapp.com",
  projectId: "elite-property-3d758",
  storageBucket: "elite-property-3d758.appspot.com",
  messagingSenderId: "623989484766",
  appId: "1:623989484766:web:6e2af56b0b3349f092264f",
  measurementId: "G-9NR9NHZBCN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app)


export default auth;