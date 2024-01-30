// firebaseAuth.js

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from "./firebaseConfig";

// Obtenha uma instância do serviço de autenticação
const auth = getAuth(app);

// Função para realizar o cadastro
const signUp = async (email, password) => {
  try {
    // Crie o usuário no Firebase Authentication
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    return user;
  } catch (error) {
    throw error;
  }
};

export { auth, signUp };
