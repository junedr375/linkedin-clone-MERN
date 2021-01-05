import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDOB-HdsLT4bMenVvI5GNcmK-Gblpv9bwA",
  authDomain: "linkedin-clone-6cf64.firebaseapp.com",
  projectId: "linkedin-clone-6cf64",
  storageBucket: "linkedin-clone-6cf64.appspot.com",
  messagingSenderId: "835738337220",
  appId: "1:835738337220:web:716f81a4073351135d2e91",
  measurementId: "G-T1Q70NNQ8X",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };
