import firebase from 'firebase';

const firebaseConfig = {
    // apiKey: "AIzaSyDiuqchGUt_w2NKQLQlauqiqnEHN3KT1FU",
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: "snapchat-clone-7287d.firebaseapp.com",
    projectId: "snapchat-clone-7287d",
    storageBucket: "snapchat-clone-7287d.appspot.com",
    messagingSenderId: "518469788402",
    appId: "1:518469788402:web:28535e7303b15ecf01e66b"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, storage, provider };