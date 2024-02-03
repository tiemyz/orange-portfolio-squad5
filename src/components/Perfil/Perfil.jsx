import React, { useState, useEffect, useRef, useContext } from 'react';
import { ProfileContent, ImageProfile, InfoContainer, Name, Local } from './Perfil.styles';
import { ButtonGray } from '../Buttons/Buttons.styles';
import { ProfileImageContext } from '../contex/ProfileImageContext';
import { getAuth } from 'firebase/auth';
import { getFirestore, doc, setDoc } from 'firebase/firestore';
import { getStorage, ref, getDownloadURL, uploadBytes } from 'firebase/storage';

const firestore = getFirestore();
const storage = getStorage();

function Perfil() {
  const { profileImage: contextProfileImage } = useContext(ProfileImageContext);  // Consuma o contexto
  const [profileImage, setProfileImage] = useState(null);
  const [userName, setUserName] = useState('');
  const fileInputRef = useRef(null);
  const authInstance = getAuth();

  useEffect(() => {
    const user = authInstance.currentUser;
    
    if (user) {
      setUserName(user.displayName || user.email);
    }
  }, [authInstance]);

  useEffect(() => {
    // Use o valor do contexto para preencher a imagem de perfil
    setProfileImage(contextProfileImage);
  }, [contextProfileImage]);

  const handleImageUpload = async (event) => {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = (e) => {
        setProfileImage(e.target.result);
      };

      reader.readAsDataURL(file);

      // Salvando no Firestore e Storage
      saveImageToFirestoreAndStorage(file);
    }
  };

  const saveImageToFirestoreAndStorage = async (file) => {
    const user = authInstance.currentUser;
  
    if (user) {
      // Criando referência para o arquivo no Storage
      const storageRef = ref(storage, `foto-perfil/${user.uid}/profileImage`);
  
      // Upload do arquivo para o Storage
      await uploadBytes(storageRef, file);
  
      // Obtendo a URL da imagem no Storage
      const imageUrl = await getDownloadURL(storageRef); // Corrigido aqui
  
      // Salvando a URL no Firestore
      const usuarioRef = doc(firestore, 'foto-perfil', user.uid);
  
      try {
        await setDoc(usuarioRef, { profileImage: imageUrl }, { merge: true });
        console.log('URL da imagem do perfil salva no Firestore.');
      } catch (erro) {
        console.error('Erro ao salvar URL da imagem no Firestore:', erro);
      }
    }
  };

  const handleAddProfileImage = () => {
    fileInputRef.current.click();
  };

  return (
    <ProfileContent>
      <input
        type="file"
        ref={fileInputRef}
        style={{ display: 'none' }}
        onChange={handleImageUpload}
      />
      <ImageProfile
        src={profileImage || 'https://via.placeholder.com/150'}
        alt="foto de perfil"
        onClick={handleAddProfileImage}
      />
      <InfoContainer>
        <Name>{userName}</Name>
        <Local>Brasil</Local>
        <ButtonGray>Adicionar Projeto</ButtonGray>
      </InfoContainer>
    </ProfileContent>
  );
}

export default Perfil;