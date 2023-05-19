// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCzZspkELItjFMlfywaYoZBA-kk-M3nbnY",
    authDomain: "aps-unicarioca-5d83e.firebaseapp.com",
    projectId: "aps-unicarioca-5d83e",
    storageBucket: "aps-unicarioca-5d83e.appspot.com",
    messagingSenderId: "971265183208",
    appId: "1:971265183208:web:4cff8d09aab1b5e2d2a85d"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;
