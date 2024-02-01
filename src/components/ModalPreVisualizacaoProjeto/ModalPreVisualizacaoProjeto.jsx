import ChipRender from '../Chip/ChipRender';
import {
  BackgroundPreVisualizacao,
  CloseButton,
  CloseButtonDiv,
  ContentPreVisualizacao,
  DivImagemPreVisualizacao,
  H5PreVisualizacao,
  H6PreVisualizacao,
  ImagemPreVisualizacao,
  InfoContainerPreVisualizacao,
  InfoUsuario,
  LinksPreVisualizacao,
  NomeUsuario,
  ParagrafoPreVisualizacao,
  TextContainer,
  TimePreVisualizacao,
  UsuarioContainer
} from './ModalPreVisualizacaoProjeto.styles';
import VectorImg from '../../assets/images/Vector.png';
import LandinPageImg from '../../assets/images/img_landingpage.png';
import UserProfileImg from '../../assets/images/user-profile.png';

function ModalPreVisualizacaoProjeto() {
  return (
    <BackgroundPreVisualizacao>
      <ContentPreVisualizacao>
        <CloseButtonDiv>
          <CloseButton type="button">
            <img src={VectorImg}></img>
          </CloseButton>
        </CloseButtonDiv>
        <H5PreVisualizacao>Orange App</H5PreVisualizacao>
        <DivImagemPreVisualizacao>
          <ImagemPreVisualizacao
            src={LandinPageImg}
            alt="Project-Photo"
          ></ImagemPreVisualizacao>
        </DivImagemPreVisualizacao>

        <InfoContainerPreVisualizacao>
          <UsuarioContainer>
            <img
              src={UserProfileImg}
              alt="user-profile"
              width={40}
              height={40}
              style={{ borderRadius: '50%' }}
            />
            <InfoUsuario>
              <NomeUsuario>
                Camilla Rodrigues
              </NomeUsuario>
              <TimePreVisualizacao>31-01-2024</TimePreVisualizacao>
            </InfoUsuario>
          </UsuarioContainer>

          <ChipRender tags=""></ChipRender>
        </InfoContainerPreVisualizacao>

        <TextContainer>
          <ParagrafoPreVisualizacao>
            Temos o prazer de compartilhar com vocês uma variação da nosso
            primeiro recurso gratuito, Monoceros. É um modelo de uma página para
            mostrar seus produtos. Tentamos redesenhar uma versão mais B2C e
            minimalista do nosso primeiro template de e-commerce.
          </ParagrafoPreVisualizacao>
          <br></br>
          <H6PreVisualizacao>Download</H6PreVisualizacao>
          <LinksPreVisualizacao href="#">Teste</LinksPreVisualizacao>
        </TextContainer>
      </ContentPreVisualizacao>
    </BackgroundPreVisualizacao>
  )
}

export default ModalPreVisualizacaoProjeto;
