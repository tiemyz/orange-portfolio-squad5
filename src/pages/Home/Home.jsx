import React from 'react';
import AddProject from '../../components/AddProjectModal/Desktop/AddProjectModal';
import LogoutButton from '../../components/LogoutButton/LogoutButton';
import Perfil from '../../components/Perfil/Perfil';

function Home() {
  return (
    <div>
      <Perfil />
      <AddProject />
      <LogoutButton />
    </div>
  );
}

export default Home;