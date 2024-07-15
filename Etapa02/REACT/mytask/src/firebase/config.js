import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBx4wpZhnzYqPtc12QPDonRfCF3hTniNrg",
  authDomain: "my-task-928a1.firebaseapp.com",
  projectId: "my-task-928a1",
  storageBucket: "my-task-928a1.appspot.com",
  messagingSenderId: "171775459086",
  appId: "1:171775459086:web:21936f5449fcb9a8a9e15f",
};

// app => objeto com todas as configurações do firebase
export const app = initializeApp(firebaseConfig);
// auth => objeto com todas as configurações de authentication
export const auth = getAuth(app);
// db => objeto com as configurações do Firestore
export const db = getFirestore(app);
