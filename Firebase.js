// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCcKb5GzsuhvVa0-aikk8jRftsOkG8tuiY",
  authDomain: "crud-d131e.firebaseapp.com",
  projectId: "crud-d131e",
  storageBucket: "crud-d131e.appspot.com",
  messagingSenderId: "483431796917",
  appId: "1:483431796917:web:3b49d9bde9036d20686efc",
  measurementId: "G-V9D1KY88JE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

//initialize firebase authentication
const auth = getAuth(app);