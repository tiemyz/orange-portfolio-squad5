import {
  ProfileContent,
  ImageProfile,
  InfoContainer,
  Name,
  Local
} from './StylesPerfil'
import { ButtonGray } from '../Buttons/ButtonStyles'
import ProfileImg from '../../assets/images/profile.png'

const Perfil = () => {
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

export { Perfil }
