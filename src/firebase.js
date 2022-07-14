import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAF9ub5lDso-BA0-QcjtFNPkUZAIFCgPCA",
  authDomain: "disneyplus-clone-91fe6.firebaseapp.com",
  projectId: "disneyplus-clone-91fe6",
  storageBucket: "disneyplus-clone-91fe6.appspot.com",
  messagingSenderId: "138752677330",
  appId: "1:138752677330:web:431dd7b1a27d7889cce40b",
  measurementId: "G-HKMCNQ749W",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
