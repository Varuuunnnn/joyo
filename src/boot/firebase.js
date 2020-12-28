// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from "firebase/app";
// If you are using v7 or any earlier version of the JS SDK, you should import firebase using namespace import
// import * as firebase from "firebase/app"

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import "firebase/analytics";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/database";
 // Your web app's Firebase configuration
 var firebaseConfig = {
  apiKey: "AIzaSyD9Ge8lmUmi5Zbt011aD3PCEx4UoDK5ZsI",
  authDomain: "hrm-project-6d838.firebaseapp.com",
  projectId: "hrm-project-6d838",
  storageBucket: "hrm-project-6d838.appspot.com",
  messagingSenderId: "76043341728",
  appId: "1:76043341728:web:1afff15e53423a94101ec5"
};
// Initialize Firebase
let firebaseApp=firebase.initializeApp(firebaseConfig);
let firebaseAuth=firebaseApp.auth()
let firebaseDb= firebaseApp.database()

export { firebaseAuth, firebaseDb}