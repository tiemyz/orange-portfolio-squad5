// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCy9wJB83lwjoRAXXlkQtYusUwzvnBXv04",
  authDomain: "orange-portfolio-squad5.firebaseapp.com",
  projectId: "orange-portfolio-squad5",
  storageBucket: "orange-portfolio-squad5.appspot.com",
  messagingSenderId: "619258611412",
  appId: "1:619258611412:web:250cac2e3029cc25e5dd41",
  measurementId: "G-ZN7KKLQ6V7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);