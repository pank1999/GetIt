// database/firebaseDb.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDzY4oKtuIaEXY4sE_rrOWa_hKWB8u2HrY",
  authDomain: "paskey-f4f25.firebaseapp.com",
  projectId: "paskey-f4f25",
  storageBucket: "paskey-f4f25.appspot.com",
  messagingSenderId: "41959081288",
  appId: "1:41959081288:web:58e9287bc25f4ec8861f7d",
  measurementId: "G-QC91KF23R3",
};
const app = initializeApp(firebaseConfig);
export const authentication = getAuth(app);
export const db = getFirestore(app);
