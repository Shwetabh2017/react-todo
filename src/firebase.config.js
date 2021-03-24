import firebase from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyDZjhXAjqc-WL6pM_kfm2bgHOvRTOUjDEk",
    authDomain: "blog-82d44.firebaseapp.com",
    projectId: "blog-82d44",
    storageBucket: "blog-82d44.appspot.com",
    messagingSenderId: "561269954183",
    appId: "1:561269954183:web:c8eeb92f1047544d190a22"
  };

firebase.initializeApp(firebaseConfig);
const db=firebase.firestore();

export default db;