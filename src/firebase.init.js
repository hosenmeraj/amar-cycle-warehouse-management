// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBttqetAQu6_Cl5Z7VuZCz119A60aBOaGw",
    authDomain: "amar-cycle-firebase-auth.firebaseapp.com",
    projectId: "amar-cycle-firebase-auth",
    storageBucket: "amar-cycle-firebase-auth.appspot.com",
    messagingSenderId: "528625108893",
    appId: "1:528625108893:web:634437ae49e65030589174"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;