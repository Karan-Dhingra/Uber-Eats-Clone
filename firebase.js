import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCJm9OeJ-HIaqP-Zn89PE805LCRpR5M3ew",
    authDomain: "uber-eats-clone-38b56.firebaseapp.com",
    projectId: "uber-eats-clone-38b56",
    storageBucket: "uber-eats-clone-38b56.appspot.com",
    messagingSenderId: "53218975561",
    appId: "1:53218975561:web:f938fc0a70e58daaee4498"
};

!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

export default firebase;