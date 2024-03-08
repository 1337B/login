// src/firebase-config.js
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, GithubAuthProvider } from 'firebase/auth';

const firebaseConfig = {
   apiKey: "AIzaSyAUlY_Vo-_Sb2EzgufZujjEQDsnREHKwUo",
   authDomain: "login-493b2.firebaseapp.com",
   projectId: "login-493b2",
   storageBucket: "login-493b2.appspot.com",
   messagingSenderId: "360699704756",
   appId: "1:360699704756:web:d9e7957d920003e30eeee1",
   measurementId: "G-SHNVV0YHVY"
 };

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const githubProvider = new GithubAuthProvider();
