// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAetLw4JNYxHXwOMY4RTIR3TvcimKEPkrY",
  authDomain: "login-test-498b1.firebaseapp.com",
  projectId: "login-test-498b1",
  storageBucket: "login-test-498b1.appspot.com",
  messagingSenderId: "466324733409",
  appId: "1:466324733409:web:de0797681d5fc99b9b26a0",
  measurementId: "G-8KWMZJPFQ8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);