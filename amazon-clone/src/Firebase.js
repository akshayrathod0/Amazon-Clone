// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyCjvGqjIUeX77uV92FUEitVzqt77ctGXes",
    authDomain: "clone-201cf.firebaseapp.com",
    projectId: "clone-201cf",
    storageBucket: "clone-201cf.appspot.com",
    messagingSenderId: "756048945671",
    appId: "1:756048945671:web:ceade9f0f63f0f8de140a2",
    measurementId: "G-0ECCRGSFP0"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };