import React, { useState, useEffect, useRef } from 'react';
import {
  ModalBackground,
  AddProjectContainer,
  DivTitulo,
  TituloDoModal,
  DivBotaoForm,
  DivH3Img,
  SubtituloModal,
  BotaoProjeto,
  TextDiv,
  StyledBodyTextP,
  DivForm,
  DivFormInput,
  DivLink,
  DivBotoes,
  UploadImageDiv,
  UploadImage,
} from './AddProject.styles';

import {
  collection,
  addDoc,
  doc,
  updateDoc,
  deleteDoc,
} from 'firebase/firestore';
import collectionsImage from '../../assets/images/collections.png';
import { ref, getDownloadURL, uploadBytesResumable } from 'firebase/storage';
import { getAuth } from 'firebase/auth';
import ModalPreVisualizacaoProjeto from '../ModalPreVisualizacaoProjeto/ModalPreVisualizacaoProjeto';
import Modal from '../Modal/Modal';
import { ButtonGray, ButtonOrangeSmall } from '../Buttons/Buttons.styles';
import { storage, db } from '../../services/firebaseConfig';
import { getUserNameById } from '../../services/firebaseFirestore';

function AddProject({ onClose, adicionarProjeto, projetoSelecionado }) {
  const [projectData, setProjectData] = useState({
    title: '',
    tags: '',
    link: '',
    description: '',
    image: null,
  });

  const fileInputRef = useRef(null);
  const [progressPorcent, setProgressPorcent] = useState(0);
  const authInstance = getAuth();
  const [mostrarModalPreVisualizacao, setMostrarModalPreVisualizacao] = useState(false);
  const [formattedDate, setFormattedDate] = useState('');
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (projetoSelecionado) {
      setProjectData((prevData) => ({
        ...prevData,
        title: projetoSelecionado.title || '',
        tags: projetoSelecionado.tags || '',
        link: projetoSelecionado.link || '',
        description: projetoSelecionado.description || '',
        image: projetoSelecionado.image || null,
      }));
    }
  }, [projetoSelecionado]);

  useEffect(() => {
    const fetchProjetos = async () => {
      try {
        const projetosCollection = collection(db, 'projetos');
        const projetosSnapshot = await getDocs(projetosCollection);
        const projetosData = projetosSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setFormattedDate(`${new Date().getMonth() + 1}/${new Date().getDate()}`);
      } catch (error) {
        console.error('Erro ao buscar projetos:', error.message);
      }
    };

    fetchProjetos();
  }, []);

  const handleImageUpload = async (event) => {
    const file = event.target.files[0];
    const storageRef = ref(storage, `images/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgressPorcent(progress);
      },
      (error) => {
        alert(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setProjectData((prevData) => ({ ...prevData, image: downloadURL }));
        });
      }
    );
  };

  const handleOpenFileSelector = () => {
    fileInputRef.current.click();
  };

  const handleOpenModalPreVisualizacao = async () => {
    try {
      const userName = await getUserNameById(authInstance.currentUser.uid);
  
      const projectDataWithUserName = {
        ...projectData,
        userName,
      };
  
      setMostrarModalPreVisualizacao(true);
      setProjectData(projectDataWithUserName);
    } catch (error) {
      console.error('Error fetching user name:', error.message);
    }
  };
  
  const handleCloseModalPreVisualizacao = () => {
    setMostrarModalPreVisualizacao(false);
  };

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseShowModal = () => {
    setShowModal(false);
  };

  const handleSaveProject = async () => {
    try {
      const user = authInstance.currentUser;

      if (!user) {
        console.error('Erro ao salvar o projeto: Usuário não autenticado.');
        return;
      }

      if (projetoSelecionado) {
        const projetoRef = doc(db, 'projetos', projetoSelecionado.id);
        await updateDoc(projetoRef, {
          title: projectData.title,
          tags: projectData.tags,
          link: projectData.link,
          description: projectData.description,
          image: projectData.image,
        });

        adicionarProjeto((prevProjetos) =>
          prevProjetos.map((projeto) =>
            projeto.id === projetoSelecionado.id
              ? { ...projeto, title: projectData.title, tags: projectData.tags, link: projectData.link, description: projectData.description, image: projectData.image }
              : projeto
          )
        );
      } else {
        const docRef = await addDoc(collection(db, 'projetos'), {
          userId: user.uid,
          title: projectData.title,
          tags: projectData.tags,
          link: projectData.link,
          description: projectData.description,
          image: projectData.image,
        });

        adicionarProjeto((prevProjetos) => [
          ...prevProjetos,
          { id: docRef.id, title: projectData.title, description: projectData.description },
        ]);
      }

      setProjectData({
        title: '',
        tags: '',
        link: '',
        description: '',
        image: null,
      });
      setProgressPorcent(0);

      onClose();
  
      handleShowModal();
    } catch (error) {
      console.error('Erro ao salvar o projeto:', error.message);
    }
  };

  const handleExcluirProjeto = async () => {
    try {
      if (projetoSelecionado) {
        const projetoRef = doc(db, 'projetos', projetoSelecionado.id);
        await deleteDoc(projetoRef);

        adicionarProjeto((prevProjetos) =>
          prevProjetos.filter((projeto) => projeto.id !== projetoSelecionado.id)
        );

        onClose();
      }
    } catch (error) {
      console.error('Erro ao excluir o projeto:', error.message);
    }
  };

  return (
    <ModalBackground>
      <AddProjectContainer>
        <DivTitulo>
          <TituloDoModal>Adicionar projeto</TituloDoModal>
        </DivTitulo>

        <DivBotaoForm>
          <DivH3Img>
            <SubtituloModal>
              Selecione o conteúdo que você deseja fazer upload
            </SubtituloModal>

            <BotaoProjeto onClick={handleOpenFileSelector}>
              <input
                type='file'
                ref={fileInputRef}
                style={{ display: 'none' }}
                onChange={handleImageUpload}
              />

              <TextDiv>
                <img
                  src={collectionsImage}
                  width={'46px'}
                  alt='Ícone de upload'
                />

                <StyledBodyTextP>
                  Compartilhe seu talento com milhares de pessoas
                </StyledBodyTextP>

                {!projectData.image && <div><p>{progressPorcent}%</p></div>}
                {projectData.image && (
                  <UploadImageDiv>
                    <UploadImage src={projectData.image} alt="Imagem upload" />
                  </UploadImageDiv>
                )}
              </TextDiv>
            </BotaoProjeto>
          </DivH3Img>

          <DivForm>
            <DivFormInput>
              <input
                type='text'
                placeholder='Título'
                value={projectData.title}
                onChange={(e) => setProjectData((prevData) => ({ ...prevData, title: e.target.value }))}
              />
              <input
                type='text'
                placeholder='Tags'
                value={projectData.tags}
                onChange={(e) => setProjectData((prevData) => ({ ...prevData, tags: e.target.value }))}
              />
              <input
                type='text'
                placeholder='Link'
                value={projectData.link}
                onChange={(e) => setProjectData((prevData) => ({ ...prevData, link: e.target.value }))}
              />
              <textarea
                type='text'
                placeholder='Descrição'
                value={projectData.description}
                onChange={(e) => setProjectData((prevData) => ({ ...prevData, description: e.target.value }))}
              />
            </DivFormInput>
          </DivForm>
        </DivBotaoForm>

        <DivLink>
          <a href="#" onClick={handleOpenModalPreVisualizacao}>
            Visualizar publicação
          </a>
        </DivLink>
        {mostrarModalPreVisualizacao && (
          <ModalPreVisualizacaoProjeto
            onClose={handleCloseModalPreVisualizacao}
            projectData={projectData}
          />
        )}


        <DivBotoes>
          <ButtonOrangeSmall onClick={() => { handleSaveProject(); handleShowModal(); }}>Salvar</ButtonOrangeSmall>
          <ButtonGray onClick={onClose}>Cancelar</ButtonGray>
        </DivBotoes>

        {showModal && (
          <Modal onClose={handleCloseShowModal} />
        )}
      </AddProjectContainer>
    </ModalBackground>
  );
}

export default AddProject;