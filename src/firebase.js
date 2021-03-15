import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAvNHu-swRifyP-h1h3Ot6dHVHeTeugKWw",
  authDomain: "complete--clone.firebaseapp.com",
  projectId: "complete--clone",
  storageBucket: "complete--clone.appspot.com",
  messagingSenderId: "917637804802",
  appId: "1:917637804802:web:3f33e6912b551715f7881b",
  measurementId: "G-698SN2QKCG"
};

const firebaseApp =firebase.initializeApp(firebaseConfig)

const db =firebaseApp.firestore();
const auth=firebase.auth();

export { db, auth} ;