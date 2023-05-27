// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCamvjtuoVdUUtU5Kzu0OMJj4-MIVb0Wik",
  authDomain: "matnahuel-coderhouse.firebaseapp.com",
  projectId: "matnahuel-coderhouse",
  storageBucket: "matnahuel-coderhouse.appspot.com",
  messagingSenderId: "637386816719",
  appId: "1:637386816719:web:7b5a5021b98e192bbf0bba",
  measurementId: "G-J3BXCEFTYR"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)







