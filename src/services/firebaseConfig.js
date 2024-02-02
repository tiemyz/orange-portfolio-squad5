// Importe as funções necessárias do Firebase
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from 'firebase/storage';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyCy9wJB83lwjoRAXXlkQtYusUwzvnBXv04",
  authDomain: "orange-portfolio-squad5.firebaseapp.com",
  projectId: "orange-portfolio-squad5",
  storageBucket: "orange-portfolio-squad5.appspot.com",
  messagingSenderId: "619258611412",
  appId: "1:619258611412:web:250cac2e3029cc25e5dd41",
  measurementId: "G-ZN7KKLQ6V7"
};

// Inicializar o Firebase
const app = initializeApp(firebaseConfig);

// Criar instâncias dos serviços
const auth = getAuth(app);
const db = getFirestore(app);
const googleProvider = new GoogleAuthProvider();
const storage = getStorage(app);  
// Exportar as instâncias dos serviços para uso em outros lugares do seu aplicativo
export { app, auth, db, storage, createUserWithEmailAndPassword, signInWithPopup, googleProvider};
export const storage = getStorage(app);