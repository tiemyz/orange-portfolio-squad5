import React from 'react';
import AddProject from '../../components/AddProjectModal/Desktop/AddProjectModal';
import LogoutButton from '../../components/LogoutButton/LogoutButton';
import Perfil from '../../components/Perfil/Perfil';

function MinhaPagina({ profileImage, setProfileImage }) {
  return (
    <div>
      <Perfil profileImage={profileImage} setProfileImage={setProfileImage} />
      <AddProject />
      <LogoutButton />
    </div>
  );
}

export default MinhaPagina;