import firebase from "firebase";

const config = {
  apiKey: "AIzaSyCqTlbhs5H6gWkOyHFpdPlGHUL2pqdD7yY",
  authDomain: "bridgecapital-b6707.firebaseapp.com",
  databaseURL: "https://bridgecapital-b6707.firebaseio.com",
  projectId: "bridgecapital-b6707",
  storageBucket: "bridgecapital-b6707.appspot.com",
  messagingSenderId: "313295152435"
};
firebase.initializeApp(config);

export default firebase;

export const database = firebase.database();
export const auth = firebase.auth();
export const storage = firebase.storage();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
