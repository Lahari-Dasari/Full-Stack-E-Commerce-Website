// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBBORS_vbuTWiTNFYFCetASMJ2necEX3tY",
  authDomain: "clone-51c48.firebaseapp.com",
  projectId: "clone-51c48",
  storageBucket: "clone-51c48.appspot.com",
  messagingSenderId: "946495577546",
  appId: "1:946495577546:web:d033ec29ad3b36894c0333",
  measurementId: "G-3N70PMNLWM"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db,auth}; 