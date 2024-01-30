import { getFirestore, collection, addDoc } from "firebase/firestore";
import { app } from "./firebaseConfig";

// Obtenha uma instância do serviço Firestore
const db = getFirestore(app);

// Função para adicionar informações ao Firestore
const addToFirestore = async (collectionName, data) => {
  try {
    const docRef = await addDoc(collection(db, collectionName), data);
    return docRef.id;
  } catch (error) {
    throw error;
  }
};

export { db, addToFirestore };
