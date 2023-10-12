import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import firebaseConfig from './config';

const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore(app);

export { db };
