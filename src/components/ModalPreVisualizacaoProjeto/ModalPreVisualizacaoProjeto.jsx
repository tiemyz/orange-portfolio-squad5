// import Chip from '../Chip/Chip'
import ChipRender from '../Chip/ChipRender'
// import { ChipDiv } from '../Chip/ChipStyle'
import {
  CloseButtonPreVisualizacaoProjeto,
  DivCloseButton,
  ModalPreVisualizacaoBackground,
  ModalPreVisualizacaoContent,
  ModalPreVisualizacaoDivImagem,
  ModalPreVisualizacaoH5,
  ModalPreVisualizacaoH6,
  ModalPreVisualizacaoImagem,
  ModalPreVisualizacaoInfoContainer,
  ModalPreVisualizacaoInfoUsuario,
  ModalPreVisualizacaoInfoUsuarioContainer,
  ModalPreVisualizacaoLinks,
  ModalPreVisualizacaoNomeUsuario,
  ModalPreVisualizacaoP,
  ModalPreVisualizacaoTextContainer,
  ModalPreVisualizacaoTime
} from './ModalPreVisualizacaoProjetoStyle'
import VectorImg from '../../assets/images/Vector.png'
import LandinPageImg from '../../assets/images/img_landingpage.png'
import UserProfileImg from '../../assets/images/user-profile.png'

function ModalPreVisualizacaoProjeto() {
  return (
    <ModalPreVisualizacaoBackground>
      <ModalPreVisualizacaoContent>
        <DivCloseButton>
          <CloseButtonPreVisualizacaoProjeto type="button">
            <img src={VectorImg}></img>
          </CloseButtonPreVisualizacaoProjeto>
        </DivCloseButton>
        <ModalPreVisualizacaoH5>Orange App</ModalPreVisualizacaoH5>
        <ModalPreVisualizacaoDivImagem>
          <ModalPreVisualizacaoImagem
            src={LandinPageImg}
            alt="Project-Photo"
          ></ModalPreVisualizacaoImagem>
        </ModalPreVisualizacaoDivImagem>

        <ModalPreVisualizacaoInfoContainer>
          <ModalPreVisualizacaoInfoUsuarioContainer>
            <img
              src={UserProfileImg}
              alt="user-profile"
              width={40}
              height={40}
              style={{ borderRadius: '50%' }}
            />
            <ModalPreVisualizacaoInfoUsuario>
              <ModalPreVisualizacaoNomeUsuario>
                Camilla Rodrigues
              </ModalPreVisualizacaoNomeUsuario>
              <ModalPreVisualizacaoTime>31-01-2024</ModalPreVisualizacaoTime>
            </ModalPreVisualizacaoInfoUsuario>
          </ModalPreVisualizacaoInfoUsuarioContainer>

          <ChipRender tags=""></ChipRender>
        </ModalPreVisualizacaoInfoContainer>

        <ModalPreVisualizacaoTextContainer>
          <ModalPreVisualizacaoP>
            Temos o prazer de compartilhar com vocês uma variação da nosso
            primeiro recurso gratuito, Monoceros. É um modelo de uma página para
            mostrar seus produtos. Tentamos redesenhar uma versão mais B2C e
            minimalista do nosso primeiro template de e-commerce.
          </ModalPreVisualizacaoP>
          <br></br>
          <ModalPreVisualizacaoH6>Download</ModalPreVisualizacaoH6>
          <ModalPreVisualizacaoLinks href="#">Teste</ModalPreVisualizacaoLinks>
        </ModalPreVisualizacaoTextContainer>
      </ModalPreVisualizacaoContent>
    </ModalPreVisualizacaoBackground>
  )
}

export default ModalPreVisualizacaoProjeto
