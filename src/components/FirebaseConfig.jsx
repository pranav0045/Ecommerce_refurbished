
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getAuth} from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCk6pEJpooRXxmBzxoefzvvwDyN3oFXdUs",
  authDomain: "myecommerce-80628.firebaseapp.com",
  projectId: "myecommerce-80628",
  storageBucket: "myecommerce-80628.appspot.com",
  messagingSenderId: "236487431621",
  appId: "1:236487431621:web:330b1dec281038d69e67ac"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app);
export const database = getAuth(app)
export {fireDB,auth};
export const googleProvider = new GoogleAuthProvider()
