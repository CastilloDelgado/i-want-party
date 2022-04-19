import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD8iGKSnhkRfz2qYijx-MDxaapO3ajJaGc",
  authDomain: "fb-crud-react-a40e9.firebaseapp.com",
  projectId: "fb-crud-react-a40e9",
  storageBucket: "fb-crud-react-a40e9.appspot.com",
  messagingSenderId: "625996694709",
  appId: "1:625996694709:web:ed730abbbc3d5e95a46afc",
};

const fb = initializeApp(firebaseConfig);
export const db = getFirestore(fb);
