import React from 'react';
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
import Project1 from '../../assets/images/Image 1.png';
import User1 from '../../assets/images/Vertical container.png';
import Chip from '../Chip/Chip';

function ModalPreVisualizacaoProjetoDescobrir({ onClose }) {
  return (
    <BackgroundPreVisualizacao>
      <ContentPreVisualizacao>
        <CloseButtonDiv onClick={onClose}>
          <CloseButton type="button">
            <img src={VectorImg} alt="Fechar Modal" />
          </CloseButton>
        </CloseButtonDiv>
        <H5PreVisualizacao>Ecommerce One Page</H5PreVisualizacao>

        <DivImagemPreVisualizacao>
          <ImagemPreVisualizacao
            src={Project1}
            alt="Project-Photo"
          ></ImagemPreVisualizacao>
        </DivImagemPreVisualizacao>

        <InfoContainerPreVisualizacao>
          <UsuarioContainer>
            <img
              src={User1}
              alt="user-profile"
              width={40}
              height={40}
              style={{ borderRadius: '50%' }}
            />
            <InfoUsuario>
              <NomeUsuario>
                Bianca Martin
              </NomeUsuario>
              <TimePreVisualizacao>02/24</TimePreVisualizacao>
            </InfoUsuario>
          </UsuarioContainer>

            <div style={{display: 'flex', gap: '8px'}}>
                <Chip chiptext="UX" />
                <Chip chiptext="Web" />
            </div>        
        </InfoContainerPreVisualizacao>

        <TextContainer>
          <ParagrafoPreVisualizacao>
          Temos o prazer de compartilhar com vocês uma variação do nosso primeiro recurso gratuito. 
          É um modelo de IA. Tentamos redesenhar uma versão mais minimalista do nosso primeiro projeto.
          </ParagrafoPreVisualizacao>
          <br></br>
          <H6PreVisualizacao>Download</H6PreVisualizacao>
          <LinksPreVisualizacao>https://gumroad.com/products/wxCSL</LinksPreVisualizacao>
        </TextContainer>
      </ContentPreVisualizacao>
    </BackgroundPreVisualizacao>
  );
}

export default ModalPreVisualizacaoProjetoDescobrir;