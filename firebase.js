import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyAdnq4curCAm4Y4i9MvXjoNzN7b8O5s_Js",
  authDomain: "ap-whatsapp-2-react-nextjs.firebaseapp.com",
  projectId: "ap-whatsapp-2-react-nextjs",
  storageBucket: "ap-whatsapp-2-react-nextjs.appspot.com",
  messagingSenderId: "832458015608",
  appId: "1:832458015608:web:9d93521eec572b749cbe8d",
};

const app = !firebase.apps.leng
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();

const auth = app.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
