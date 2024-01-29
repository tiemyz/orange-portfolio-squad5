import React, { useState } from 'react';
import { ModalBackground } from '../Mobile/MobStyledAddProjectModal';
import {
  AddProjectDiv,
  Btns,
  StyledFormContainer,
  StyledBtnContainer,
  StyledH5,
  StyledText1,
  PreviewContainer,
  PreviewArea,
  StyledText2,
  BtnAddProject,
  StyledAddForm,
  StyledInput,
  StyledTextArea,
} from './StyledAddProjectModal';

// Importar instância do Firebase Storage e função de uploadImage
import { uploadImage } from '../../../services/firebaseStorage';

export function AddProjectModal() {
  const [image, setImage] = useState(null);
  const [imageURL, setImageURL] = useState('');
  const [progress, setProgress] = useState(0);
  const [successMessage, setSuccessMessage] = useState('');
  console.log('successMessage:', successMessage);

  const handleImageChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (image) {
      try {
        // Realizando o upload da imagem
        const downloadURL = await uploadImage(image, 'images');
        console.log('Imagem enviada com sucesso! URL:', downloadURL);

        console.log('Chegou aqui!');
        setSuccessMessage('Imagem enviada com sucesso!');
      } catch (error) {
        console.error('Erro ao enviar a imagem:', error);
      }
    }
  };

  const handlePreview = () => {
    if (image) {
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.readyState === 2) {
          setImageURL(reader.result);
        }
      };
      reader.readAsDataURL(image);
    }
  };

  return (
    <ModalBackground>
      <AddProjectDiv>
        <StyledH5>Adicionar projeto</StyledH5>
        <StyledBtnContainer>
          <p className='preview-caption'>Visualizar publicação</p>
          <Btns>
            <button>SALVAR</button>
            <button>CANCELAR</button>
          </Btns>
        </StyledBtnContainer>
        <StyledFormContainer>
          <PreviewContainer>
            <StyledText1>
              Selecione o conteúdo que você deseja fazer upload
            </StyledText1>
          </PreviewContainer>
          <PreviewArea>
            <BtnAddProject>
              <img
                src='../../../assets/secao-projetos/collections.png'
                alt='Icon image'
                className='img-icon'
              />
              <StyledText2>
                Compartilhe seu talento com milhares de pessoas
              </StyledText2>
            </BtnAddProject>
          </PreviewArea>
          <StyledAddForm>
          <StyledInput>
            <label htmlFor='title'>
              <input type='text' className='title' placeholder='Título' />
            </label>
          </StyledInput>
          <StyledInput>
            <label htmlFor='tags'>
              <input type='text' className='tags' placeholder='Tags' />
            </label>
          </StyledInput>
          <StyledInput>
            <label htmlFor='link'>
              <input type='text' className='link' placeholder='Link' />
            </label>
          </StyledInput>
          <StyledTextArea>
            <label htmlFor='description'>
              <textarea
                type='text'
                className='description'
                placeholder='Descrição'
              />
            </label>
          </StyledTextArea>
          {/* Adiciona um campo de entrada para seleção de imagem */}
          <StyledInput>
            <label htmlFor='image'>
              Selecionar imagem:
              <input type='file' id='image' onChange={handleImageChange} />
            </label>
          </StyledInput>
          <button onClick={handleUpload}>Enviar Imagem</button>
          </StyledAddForm>
        </StyledFormContainer>
      </AddProjectDiv>
    </ModalBackground>
  );
}
export default AddProjectModal;