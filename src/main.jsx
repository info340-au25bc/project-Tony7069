import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

import { BrowserRouter } from "react-router-dom";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// import { getDatabase } from 'firebase/database';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCX6MQyB8IwWpB4iJLJF7oIHf6Sb9lOAGA",
  authDomain: "internshipper-44a1c.firebaseapp.com",
  projectId: "internshipper-44a1c",
  storageBucket: "internshipper-44a1c.firebasestorage.app",
  messagingSenderId: "949845215124",
  appId: "1:949845215124:web:6f333d25499454ef0ef181",
  databaseURL: "https://internshipper-44a1c-default-rtdb.firebaseio.com",
  measurementId: "G-44Y7YWF2J0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
