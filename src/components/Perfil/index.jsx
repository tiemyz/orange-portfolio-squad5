import {
  ProfileContent,
  ImageProfile,
  InfoContainer,
  Name,
  Local
} from './StylesPerfil'
import { ButtonGrayDefault } from '../Buttons/ButtonStyles'

const Perfil = () => {
  return (
    <ProfileContent>
      <ImageProfile
        src="src/assets/profile.png"
        alt="foto de perfil"
      ></ImageProfile>
      <InfoContainer>
        <Name>Camila Soares</Name>
        <Local>Brasil</Local>
        <ButtonGrayDefault>Adicionar Projeto</ButtonGrayDefault>
      </InfoContainer>
    </ProfileContent>
  )
}

export { Perfil }
