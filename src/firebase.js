import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDDXRxTqT-h0RAmyEhfaHXx65Hm4142Do8",
    authDomain: "clone-89ffe.firebaseapp.com",
    projectId: "clone-89ffe",
    storageBucket: "clone-89ffe.appspot.com",
    messagingSenderId: "1088151924494",
    appId: "1:1088151924494:web:26f0cb14eefddd15e7f15f",
    measurementId: "G-0PE5BFEPCC"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };