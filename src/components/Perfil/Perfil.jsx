import {
  ProfileContent,
  ImageProfile,
  InfoContainer,
  Name,
  Local
} from './Perfil.styles';
import { ButtonGray } from '../Buttons/Buttons.styles';
import ProfileImg from '../../assets/images/profile.png';

function Perfil () {
  return (
    <ProfileContent>
      <ImageProfile src={ProfileImg} alt="foto de perfil"></ImageProfile>
      <InfoContainer>
        <Name>Camila Soares</Name>
        <Local>Brasil</Local>
        <ButtonGray>Adicionar Projeto</ButtonGray>
      </InfoContainer>
    </ProfileContent>
  )
}

export default Perfil;
