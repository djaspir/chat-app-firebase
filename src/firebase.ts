import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB6NTEYHuUK9UzvVtQkOmXqvKr61rvvJ-U",
  authDomain: "chatapp-56fbc.firebaseapp.com",
  projectId: "chatapp-56fbc",
  storageBucket: "chatapp-56fbc.appspot.com",
  messagingSenderId: "870246265162",
  appId: "1:870246265162:web:5804094305de09974fd1b3",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);
const provider = new GoogleAuthProvider();

export { auth, db, provider };
