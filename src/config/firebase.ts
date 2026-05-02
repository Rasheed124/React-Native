import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


// Optionally import the services that you want to use
// import {...} from 'firebase/database';
// import {...} from 'firebase/firestore';
// import {...} from 'firebase/functions';
// import {...} from 'firebase/storage';

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAxS1Bb4B8IasT2az-jodiiyLIo3cXB1hs",
  authDomain: "storeccommerce.firebaseapp.com",
  projectId: "storeccommerce",
  storageBucket: "storeccommerce.firebasestorage.app",
  messagingSenderId: "54732356988",
  appId: "1:54732356988:web:f071379809398f733b78f9",
};

const app = initializeApp(firebaseConfig);

// Initialize Firebase Authen
// tication and get a reference to the service
const auth = getAuth(app);
const db = getFirestore(app)

export { auth, db }

