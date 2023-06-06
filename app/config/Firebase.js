// database/firebaseDb.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
  apiKey: "AIzaSyAIdqibt8mXexlJqZv0wfKB_xnmZIhbheQ",
  authDomain: "passkey-4099a.firebaseapp.com",
  projectId: "passkey-4099a",
  storageBucket: "passkey-4099a.appspot.com",
  messagingSenderId: "949221358109",
  appId: "1:949221358109:web:2f15177b761b5cdac524f4",
  measurementId: "G-898EHP1QJ2",
};
const app = initializeApp(firebaseConfig);
export const authentication = getAuth(app);
