// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDIJpbj0lDTPLCLKHfdw2oqa8cwllwhZnA",
  authDomain: "ortex-login-d0248.firebaseapp.com",
  projectId: "ortex-login-d0248",
  storageBucket: "ortex-login-d0248.appspot.com",
  messagingSenderId: "857447374995",
  appId: "1:857447374995:web:8249541463a1913d902d66"
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)