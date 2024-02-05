import { useState, useEffect } from 'react';
import {
  ProfileContent,
  ImageProfile,
  InfoContainer,
  Name,
  Local
} from './Perfil.styles';
import { ButtonGrayLarge } from '../Buttons/Buttons.styles';
import AddProject from '../AddProjectModal/AddProject';
import ProfileImg from '../../assets/images/profile.png';
import { getAuth } from 'firebase/auth';
import { getUserNameById } from '../../services/firebaseFirestore';

function Perfil() {
  const authInstance = getAuth();
  const [mostrarAddProject, setMostrarAddProject] = useState(false);
  const [userName, setUserName] = useState('');

  const handleMostrarAddProject = () => {
    setMostrarAddProject(true);
  };

  const handleCloseAddProject = () => {
    setMostrarAddProject(false);
  };

  useEffect(() => {
    const fetchUserName = async () => {
      try {
        const fetchedUserName = await getUserNameById(authInstance.currentUser.uid);
        setUserName(fetchedUserName);
        localStorage.setItem('userName', fetchedUserName);
      } catch (error) {
        console.error('Error fetching user name:', error.message);
      }
    };

    const storedUserName = localStorage.getItem('userName');
    if (storedUserName) {
      setUserName(storedUserName);
    } else if (authInstance.currentUser) {
      fetchUserName();
    }
  }, [authInstance]);

  return (
    <ProfileContent>
      <ImageProfile src={ProfileImg} alt="foto de perfil"></ImageProfile>
      <InfoContainer>
        <Name>{userName}</Name>
        <Local>Brasil</Local>
        <ButtonGrayLarge onClick={handleMostrarAddProject}>Adicionar Projeto</ButtonGrayLarge>

        {mostrarAddProject && <AddProject onClose={handleCloseAddProject} />}
      </InfoContainer>
    </ProfileContent>
  );
}

export default Perfil;




