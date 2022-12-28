import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyCg1iTRYwggtndvWlRV4WNN_qlwnSRHkk8",
    authDomain: "e-ride-86ba3.firebaseapp.com",
    projectId: "e-ride-86ba3",
    storageBucket: "e-ride-86ba3.appspot.com",
    messagingSenderId: "351303603449",
    appId: "1:351303603449:web:6ec71cde7cd86b081e7e28"
  };
//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
