import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBWhQkJVLrpYXmey6diSDxEH_bjofAwxKs",
    authDomain: "react-ecomerce-9d0b8.firebaseapp.com",
    databaseURL: "https://react-ecomerce-9d0b8.firebaseio.com",
    projectId: "react-ecomerce-9d0b8",
    storageBucket: "react-ecomerce-9d0b8.appspot.com",
    messagingSenderId: "767843966065",
    appId: "1:767843966065:web:578ce7c415f768bb9b0fd0",
    measurementId: "G-1C5L7CHWJ5"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;
