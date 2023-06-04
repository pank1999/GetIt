// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import auth from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAIdqibt8mXexlJqZv0wfKB_xnmZIhbheQ",
  authDomain: "passkey-4099a.firebaseapp.com",
  projectId: "passkey-4099a",
  storageBucket: "passkey-4099a.appspot.com",
  messagingSenderId: "949221358109",
  appId: "1:949221358109:web:2f15177b761b5cdac524f4",
  measurementId: "G-898EHP1QJ2",
};

const app = initializeApp(firebaseConfig);

// Initialize Firebase
// const auth = auth.auth();
const analytics = getAnalytics(app);

export { auth, analytics };
