import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC1J9hZDop9_YoJCHHh86pDQUpZCKjL3rA",
  authDomain: "devlink-9d7fc.firebaseapp.com",
  projectId: "devlink-9d7fc",
  storageBucket: "devlink-9d7fc.appspot.com",
  messagingSenderId: "398294264040",
  appId: "1:398294264040:web:0b0ede7311740630c7015d",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
