import { ProfileContent, ImageProfile, InfoContainer } from './StylesPerfil'
import { Buttons } from '../Buttons'
import ProfileImg from '../../assets/profile.png'

const Perfil = () => {
  return (
    <ProfileContent>
      <ImageProfile>
        <img src={ProfileImg} alt="foto de perfil" />
      </ImageProfile>
      <InfoContainer>
        <h5>Camila Soares</h5>
        <p>Brasil</p>
        <Buttons />
      </InfoContainer>
    </ProfileContent>
  )
}

export { Perfil }
1
