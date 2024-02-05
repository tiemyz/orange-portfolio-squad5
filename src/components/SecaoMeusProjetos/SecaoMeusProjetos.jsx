import React, { useState, useEffect } from 'react';
import BotaoEditarOuExcluir from '../BotaoEditarOuExcluir/BotaoEditarOuExcluir';
import {
  SecaoProjetos,
  CampoBuscarTags,
  SubtituloProjetos,
  BotaoProjeto,
  ListaProjetos,
  BotaoLapis,
  ContainerProjeto,
  StyledBodyTexth5,
  StyledBodyTextP,
  TextDiv,
  InfosProject,
} from './SecaoMeusProjetos.styles';
import { UploadImageDiv2, UploadImage2 } from '../AddProjectModal/AddProject.styles';
import PencilButton from '../../assets/images/pencil.png';
import collectionsImage from '../../assets/images/collections.png';
import UserProfile from '../../assets/images/user-profile.png';
import AddProject from '../AddProjectModal/AddProject';
import { getDocs, collection, deleteDoc, doc } from 'firebase/firestore';
import { db } from '../../services/firebaseConfig';
import { getUserNameById } from '../../services/firebaseFirestore';
import ChipRender from '../Chip/ChipRender';

function SecaoMeusProjetos() {
  const [openEdit, setOpenEdit] = useState({});
  const [mostrarAddProject, setMostrarAddProject] = useState(false);
  const [projetosVisuais, setProjetosVisuais] = useState([]);
  const [projetoSelecionado, setProjetoSelecionado] = useState(null);

  const handleMostrarAddProject = (projetoId) => {
    setProjetoSelecionado(projetosVisuais.find((projeto) => projeto.id === projetoId));
    setMostrarAddProject(true);
  };

  const handleCloseAddProject = () => {
    setMostrarAddProject(false);
  };

  const handleEditarProjeto = (projeto) => {
    setProjetoSelecionado(projeto);
    setMostrarAddProject(true);
  };

  const handleExcluirProjeto = async (projetoId) => {
    try {
      await deleteDoc(doc(db, 'projetos', projetoId));
      setProjetosVisuais((prevProjetos) => prevProjetos.filter((projeto) => projeto.id !== projetoId));
    } catch (error) {
      console.error('Erro ao excluir projeto:', error.message);
    }
  };

  const fetchProjetos = async () => {
    try {
      const projetosCollection = collection(db, 'projetos');
      const projetosSnapshot = await getDocs(projetosCollection);
      const projetosData = projetosSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));

      const projetosComNomes = await Promise.all(projetosData.map(async (projectData) => {
        const userName = await getUserNameById(projectData.userId);
        return { ...projectData, userName };
      }));

      setProjetosVisuais(projetosComNomes);
    } catch (error) {
      console.error('Erro ao buscar projetos:', error.message);
    }
  };

  useEffect(() => {
    fetchProjetos();
  }, []);
 

  return (
    <>
      <SecaoProjetos>
        <div className="projetos">
          <div>
            <SubtituloProjetos>Meus projetos</SubtituloProjetos>
          </div>

          <label htmlFor="buscar-tags">
            <CampoBuscarTags
              type="text"
              id="buscar-tags"
              placeholder="Buscar tags"
            />
          </label>

          <ListaProjetos>
            {projetosVisuais.length === 0 ? (
              <ContainerProjeto key="empty-project">
                <BotaoLapis
                  id="pencil-icon"
                  src={PencilButton}
                  alt="Ícone de lápis"
                  onClick={() => {
                    window.alert("Clique em 'Adicione seu projeto' no seu perfil");
                  }}
                />
                <BotaoProjeto onClick={() => {
                  window.alert("Clique em 'Adicionar projeto' no seu perfil");
                }}></BotaoProjeto>
                <TextDiv>
                  <img src={collectionsImage} width={'46px'} alt="Ícone de coleções" />
                  <StyledBodyTexth5>Adicione seu primeiro projeto</StyledBodyTexth5>
                  <StyledBodyTextP>Compartilhe seu talento com milhares de pessoas</StyledBodyTextP>
                </TextDiv>
              </ContainerProjeto>
            ) : (
              projetosVisuais.map((projectData) => (
                <ContainerProjeto key={projectData.id}>
                  <BotaoLapis
                    id="pencil-icon"
                    src={PencilButton}
                    alt="Ícone de lápis"
                    onClick={() => setOpenEdit(prevState => ({ ...prevState, [projectData.id]: !prevState[projectData.id] }))}
                  />
                  {projectData.image && (
                    <UploadImageDiv2>
                      <UploadImage2 src={projectData.image} alt="Imagem upload" />
                    </UploadImageDiv2>         
                  )}
                  {openEdit[projectData.id] && (
                    <BotaoEditarOuExcluir
                      onEditar={() => handleEditarProjeto(projectData)}
                      onExcluir={() => handleExcluirProjeto(projectData.id)}
                    />
                  )}
                  <InfosProject>
                    <div style={{display: 'flex', gap: '8px', alignItems: 'center', justifyContent: 'center'}}>
                      <img src={UserProfile} alt="Imagem do perfil" style={{ width: '24px', height: '24px', borderRadius: '100px' }} />
                      <StyledBodyTexth5>{projectData.userName}</StyledBodyTexth5>
                      <StyledBodyTextP>{projectData.formattedDate}</StyledBodyTextP>
                    </div>

                    <div>
                      <ChipRender tags={projectData.tags}></ChipRender>
                    </div>
                  </InfosProject>

                </ContainerProjeto>
              ))
            )}
          </ListaProjetos>
        </div>
      </SecaoProjetos>

      {mostrarAddProject && (
        <AddProject
          onClose={handleCloseAddProject}
          adicionarProjeto={setProjetosVisuais}
          projetoSelecionado={projetoSelecionado}
        />
      )}
    </>
  );
}

export default SecaoMeusProjetos;



