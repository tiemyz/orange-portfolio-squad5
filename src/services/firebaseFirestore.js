import { getFirestore, collection, addDoc, query, where, getDocs } from "firebase/firestore";
import { app } from "./firebaseConfig";

const db = getFirestore(app);

const addToFirestore = async (collectionName, data, userId) => {
  try {
    const userName = await getUserNameById(userId);
    const dataWithUserName = { ...data, userName };

    const docRef = await addDoc(collection(db, collectionName), dataWithUserName);
    return docRef.id;
  } catch (error) {
    throw error;
  }
};

const getUserNameById = async (userId) => {
  const usersCollection = collection(db, 'users');
  const usersQuery = query(usersCollection, where('userId', '==', userId));

  try {
    const usersSnapshot = await getDocs(usersQuery);
    if (!usersSnapshot.empty) {
      const userData = usersSnapshot.docs[0].data();
      return `${userData.name} ${userData.lastName}`;
    }
  } catch (error) {
    console.error('Erro ao obter nome do usuário por ID:', error.message);
  }

  return '';
};

export { db, addToFirestore, getUserNameById };
