// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

export const getFirebaseApp = () => {
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAYZ7mcPWbSgAJKthTtADLikkcp3E36DX4",
    authDomain: "chatapp-421ac.firebaseapp.com",
    projectId: "chatapp-421ac",
    storageBucket: "chatapp-421ac.appspot.com",
    messagingSenderId: "514557315035",
    appId: "1:514557315035:web:3d2fe5c34fd6c7592089fe",
    measurementId: "G-3FQC95EB7J"
  };
  
  // Initialize Firebase
  return initializeApp(firebaseConfig);

}