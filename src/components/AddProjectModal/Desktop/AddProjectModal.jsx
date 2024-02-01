import { ModalBackground } from '../Mobile/MobAddProjectModal.styles';
import React, { useState, useEffect } from 'react';
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
  StyledTextArea
} from './AddProjectModal.styles';
import CollectionsImg from '../../../assets/images/collections.png';
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

/*TODO: Acrescentar botões "Salvar" e "Cancelar"!
  Esta é a versão Desktop do componente
  * TODO: Fazer a responsividade do componente!
  */
function AddProjectModal() {
  return (
    <ModalBackground>
      <AddProjectDiv>
        <StyledH5>Adicionar projeto</StyledH5>
        <StyledBtnContainer>
          <p className="preview-caption">Visualizar publicação</p>
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
              <img src={CollectionsImg} alt="Icon image" className="img-icon" />
              <StyledText2>
                Compartilhe seu talento com milhares de pessoas
              </StyledText2>
            </BtnAddProject>
          </PreviewArea>
          <StyledAddForm>
            <StyledInput>
              <label htmlFor="title">
                <input type="text" className="title" placeholder="Título" />
              </label>
            </StyledInput>
            <StyledInput>
              <label htmlFor="tags">
                <input type="text" className="tags" placeholder="Tags" />
              </label>
            </StyledInput>
            <StyledInput>
              <label htmlFor="link">
                <input type="text" className="link" placeholder="Link" />
              </label>
            </StyledInput>
            <StyledTextArea>
              <label htmlFor="description">
                <textarea
                  type="text"
                  className="description"
                  placeholder="Descrição"
                />
              </label>
            </StyledTextArea>
          </StyledAddForm>
        </StyledFormContainer>
      </AddProjectDiv>
    </ModalBackground>
  )
// Importar instância do Firebase Storage e funções de CRUD
import { uploadImage, getImageURL, deleteImage } from '../../../services/firebaseStorage';

export function AddProjectModal() {
  const [image, setImage] = useState(null);
  const [imageURL, setImageURL] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [formData, setFormData] = useState({
    title: '',
    tags: '',
    link: '',
    description: '',
  });

  // UseEffect para carregar os dados existentes (caso de Update)
  useEffect(() => {
    // Lógica para carregar os dados do projeto existente, se aplicável
  }, []); 

  const handleImageChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (image) {
      try {
        const imageRef = ref(storage, `images/${image.name + v4()}`);
        
        // Realize o upload do arquivo
        await uploadBytes(imageRef, image);
  
        // Obtenha a URL de download do arquivo
        const downloadURL = await getDownloadURL(imageRef);
  
        // Atualize o estado ou realize qualquer outra ação necessária
        setSuccessMessage('Imagem enviada com sucesso!');
        setImageURL(downloadURL);
  
        // Adicione a lógica para salvar a URL no estado ou no banco de dados, se necessário
      } catch (error) {
        console.error('Erro ao enviar a imagem:', error);
      }
    }
  };
  

  const handlePreview = () => {
    if (image) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageURL(reader.result);
      };
      reader.readAsDataURL(image);
    }
  };

  const handleDelete = async () => {
    if (imageURL) {
      try {
        // Exclui a imagem no Firebase Storage
        await deleteImage('images/');  
        console.log('Imagem excluída com sucesso!');
        // Lógica adicional para excluir o projeto no banco de dados
      } catch (error) {
        console.error('Erro ao excluir a imagem:', error);
      }
    }
  };

  const handleSave = () => {
    // Lógica para salvar os dados no banco de dados
    console.log('Dados salvos:', formData);
  };

  const handleInputChange = (e, field) => {
    setFormData({
      ...formData,
      [field]: e.target.value,
    });
  };

  return (
    <ModalBackground>
      <AddProjectDiv>
        <StyledH5>Adicionar projeto</StyledH5>
        <StyledBtnContainer>
          <p className='preview-caption'>Visualizar publicação</p>
          <Btns>
            <button onClick={handleSave}>SALVAR</button>
            <button onClick={handleDelete}>EXCLUIR</button>
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
                src={imageURL || '../../../assets/secao-projetos/collections.png'}
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
                Título:
                <input
                  type='text'
                  id='title'
                  className='title'
                  placeholder='Título'
                  value={formData.title}
                  onChange={(e) => handleInputChange(e, 'title')}
                />
              </label>
            </StyledInput>
            <StyledInput>
              <label htmlFor='tags'>
                Tags:
                <input
                  type='text'
                  id='tags'
                  className='tags'
                  placeholder='Tags'
                  value={formData.tags}
                  onChange={(e) => handleInputChange(e, 'tags')}
                />
              </label>
            </StyledInput>
            <StyledInput>
              <label htmlFor='link'>
                Link:
                <input
                  type='text'
                  id='link'
                  className='link'
                  placeholder='Link'
                  value={formData.link}
                  onChange={(e) => handleInputChange(e, 'link')}
                />
              </label>
            </StyledInput>
            <StyledTextArea>
              <label htmlFor='description'>
                Descrição:
                <textarea
                  type='text'
                  id='description'
                  className='description'
                  placeholder='Descrição'
                  value={formData.description}
                  onChange={(e) => handleInputChange(e, 'description')}
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
            {/* Adicione este trecho para exibir a mensagem de sucesso */}
            {successMessage && (
              <p style={{ color: 'green' }}>{successMessage}</p>
            )}
            {/* Adicione um botão para visualizar a publicação */}
          </StyledAddForm>
        </StyledFormContainer>
      </AddProjectDiv>
    </ModalBackground>
  );
}

export default AddProjectModal;
export default AddProjectModal;