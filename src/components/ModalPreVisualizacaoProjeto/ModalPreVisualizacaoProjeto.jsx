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
import UserProfileImg from '../../assets/images/user-profile.png';

function ModalPreVisualizacaoProjeto({ onClose, projectData }) {
  return (
    <BackgroundPreVisualizacao>
      <ContentPreVisualizacao>
        <CloseButtonDiv onClick={onClose}>
          <CloseButton type="button">
            <img src={VectorImg} alt="Fechar Modal" />
          </CloseButton>
        </CloseButtonDiv>

        <H5PreVisualizacao>{projectData.title}</H5PreVisualizacao>

        <DivImagemPreVisualizacao>
          <ImagemPreVisualizacao
            src={projectData.image}
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
                {projectData.userName}
              </NomeUsuario>
              <TimePreVisualizacao>{projectData.formattedDate}</TimePreVisualizacao>
            </InfoUsuario>
          </UsuarioContainer>

          <div>{projectData.tags}</div>
        </InfoContainerPreVisualizacao>

        <TextContainer>
          <ParagrafoPreVisualizacao>
            {projectData.description}
          </ParagrafoPreVisualizacao>
          <br></br>
          <H6PreVisualizacao>Download</H6PreVisualizacao>
          <LinksPreVisualizacao>{projectData.link}</LinksPreVisualizacao>
        </TextContainer>
      </ContentPreVisualizacao>
    </BackgroundPreVisualizacao>
  );
}

export default ModalPreVisualizacaoProjeto;