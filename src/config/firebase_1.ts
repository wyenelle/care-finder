// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider,onAuthStateChanged} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDMlx1YKW9dWRVHWPrSy7cOjb3AfM4Bm5c",
  authDomain: "care-finder-3d24e.firebaseapp.com",
  projectId: "care-finder-3d24e",
  storageBucket: "care-finder-3d24e.appspot.com",
  messagingSenderId: "965971518638",
  appId: "1:965971518638:web:efe6bc9e7363e2f81b393f",
  measurementId: "G-RKTGRY0Y6X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig); 
export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider()
export const db = getFirestore(app)

