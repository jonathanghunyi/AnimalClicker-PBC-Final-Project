import React, { useState } from 'react';
import firebase from "firebase/compat/app";
import "firebase/compat/firebase";
import { Link } from "react-router-dom";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB6pxIKICLq9RIoMy549QEUwD0HI9cwFjE",
  authDomain: "animalclicker-backend.firebaseapp.com",
  projectId: "animalclicker-backend",
  storageBucket: "animalclicker-backend.appspot.com",
  messagingSenderId: "636329168595",
  appId: "1:636329168595:web:166229c98ab4baf5560e26",
  measurementId: "G-KZ21E35SBK"
};




  

  