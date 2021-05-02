import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAhPpDf-CGtJbwvzeK-adu1FWmQgj1kz_o",
    authDomain: "clone1-slack.firebaseapp.com",
    projectId: "clone1-slack",
    storageBucket: "clone1-slack.appspot.com",
    messagingSenderId: "380637017340",
    appId: "1:380637017340:web:3d16aca4f6a9398b569379",
    measurementId: "G-0E76BDZR0C"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db=firebaseApp.firestore();
const auth=firebase.auth();
const provider=new firebase.auth.GoogleAuthProvider();

export {auth,provider};
export default db;