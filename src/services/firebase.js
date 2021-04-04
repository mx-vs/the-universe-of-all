import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyA4vDm8zJpdW2Xxjln0MEyLq5Yx4_S4_c8",
    authDomain: "the-universe-of-all.firebaseapp.com",
    projectId: "the-universe-of-all",
    storageBucket: "the-universe-of-all.appspot.com",
    messagingSenderId: "1047202878817",
    appId: "1:1047202878817:web:2a64262813edeb9be52120"
  };

firebase.initializeApp(config);
export default firebase;