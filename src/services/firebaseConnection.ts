import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB3ayqMgemOKWXGXFKzmEf3CRO4kMZVDWg",
  authDomain: "tarefas-ec117.firebaseapp.com",
  projectId: "tarefas-ec117",
  storageBucket: "tarefas-ec117.firebasestorage.app",
  messagingSenderId: "721753164529",
  appId: "1:721753164529:web:c0642ed079f6ad7f577750"
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);

export { db };