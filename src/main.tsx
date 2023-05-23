import React from 'react'
import ReactDOM from 'react-dom/client'
import Login from './login1.tsx'
import './index.css'
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAMgCgAIlUUAsCZEzmGdEaimxll6uEtHjs",
  authDomain: "aps-unicarioca-3942f.firebaseapp.com",
  projectId: "aps-unicarioca-3942f",
  storageBucket: "aps-unicarioca-3942f.appspot.com",
  messagingSenderId: "281920244507",
  appId: "1:281920244507:web:e64c6ba84f57e3e0ffa1be"
};
firebase.initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Login />
  </React.StrictMode>,
);


