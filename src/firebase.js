import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyBBpr3r9OpSHxEU-C-xQHGAaA-Zmxscb0Y",
    authDomain: "bridgecapital-fec86.firebaseapp.com",
    databaseURL: "https://bridgecapital-fec86.firebaseio.com",
    projectId: "bridgecapital-fec86",
    storageBucket: "bridgecapital-fec86.appspot.com",
    messagingSenderId: "94112219493"
  };
  firebase.initializeApp(config);


  export default firebase;

  export const database = firebase.database();