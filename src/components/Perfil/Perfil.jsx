import React, { useState, useEffect, useRef } from 'react';
import { ProfileContent, ImageProfile, InfoContainer, Name, Local } from './Perfil.styles';
import { ButtonGray } from '../Buttons/Buttons.styles';
import { getAuth } from 'firebase/auth';

function Perfil() {
  const [profileImage, setProfileImage] = useState(null);
  const [userName, setUserName] = useState('');
  const fileInputRef = useRef(null);
  const authInstance = getAuth();

  useEffect(() => {
    const user = authInstance.currentUser;
    
    if (user) {
      // Use o displayName do usuário, ou o email se o displayName não estiver disponível
      setUserName(user.displayName || user.email);
    }
  }, [authInstance]);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = (e) => {
        setProfileImage(e.target.result);
      };

      reader.readAsDataURL(file);
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
