// Crie um arquivo ProfileImageContext.js
import { createContext, useState, useEffect } from 'react';
import { getAuth } from 'firebase/auth'; 
import { getFirestore, doc, setDoc, getDoc } from 'firebase/firestore';

export const ProfileImageContext = createContext();

export const ProfileImageContextProvider = ({ children }) => {
  const [profileImage, setProfileImage] = useState(null);
  const auth = getAuth();
  const firestore = getFirestore();

  useEffect(() => {
    const fetchProfileImage = async () => {
      const user = auth.currentUser;
      if (user) {
        const docRef = doc(firestore, 'foto-perfil', user.uid);
        const docSnap = await getDoc(docRef);
        const imageUrl = docSnap.data()?.profileImage;
        setProfileImage(imageUrl);
      }
    };

    fetchProfileImage();
  }, [auth, firestore]);

  return (
    <ProfileImageContext.Provider value={{ profileImage }}>
      {children}
    </ProfileImageContext.Provider>
  );
};
