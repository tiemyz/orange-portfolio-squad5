import { useState } from 'react';
import {
  SecaoProjetos,
  BotaoProjeto,
  ListaProjetos,
  ContainerProjeto,
  TextDiv,
  DescobrirH4,
  CampoBuscarTags,
  DivDescobrirH4,
  ProjectsImg,
  InfosProject,
  StyledBodyTexth5,
  StyledBodyTextP,
  ContainerProjetoDescobrir,
  InfosProjectDescobrir } from './SecaoMeusProjetos.styles'
import Project1 from '../../assets/images/image 1.png';
import Project2 from '../../assets/images/image 4.png';
import Project3 from '../../assets/images/image 3.png';
import Project4 from '../../assets/images/image 6.png';
import Chip from '../Chip/Chip';
import User1 from '../../assets/images/Vertical container.png';
import User2 from '../../assets/images/Ellipse 4.png';
import User3 from '../../assets/images/Ellipse 3.png';
import User4 from '../../assets/images/Ellipse 5.png';
import ModalPreVisualizacaoProjetoDescobrir from '../ModalPreVisualizacaoProjeto/ModalPreVisualizacaoProjetoDescobrir';

function SecaoDescobrirProjetos() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleImageClick = () => {
    setIsModalOpen(true);
  };

    return (
      <>
        <SecaoProjetos>
          <div className="projetos">
            <DivDescobrirH4>
              <DescobrirH4>Junte-se à comunidade de inovação, inspiração e descobertas, transformando experiências em conexões inesquecíveis</DescobrirH4>
            </DivDescobrirH4>
  
            <label htmlFor="buscar-tags">
              <CampoBuscarTags
                type="text"
                id="buscar-tags"
                placeholder="Buscar tags"
              />
            </label>
  
            <ListaProjetos>
              <ContainerProjetoDescobrir>
                  <ProjectsImg src={Project1} onClick={handleImageClick} />
                  <InfosProjectDescobrir>
                    <div style={{display: 'flex', gap: '8px', textAlign: 'center', justifyContent: 'center'}}>
                      <img src={User1} alt="Imagem do perfil" style={{ width: '24px', height: '24px', borderRadius: '100px' }} />
                      <StyledBodyTexth5>Bianca Martin</StyledBodyTexth5>
                    </div>

                    <div style={{display: 'flex', gap: '8px'}}>
                      <Chip chiptext="UX" />
                      <Chip chiptext="Web" />
                    </div>
                  </InfosProjectDescobrir>
              </ContainerProjetoDescobrir>

              {isModalOpen && (
              <ModalPreVisualizacaoProjetoDescobrir onClose={() => setIsModalOpen(false)} />
              )}

              <ContainerProjetoDescobrir>
                  <ProjectsImg src={Project2} ></ProjectsImg>
                  <InfosProjectDescobrir>
                    <div style={{display: 'flex', gap: '8px', textAlign: 'center', justifyContent: 'center'}}>
                      <img src={User2} alt="Imagem do perfil" style={{ width: '24px', height: '24px', borderRadius: '100px' }} />
                      <StyledBodyTexth5>Enzo Gabriel</StyledBodyTexth5>
                    </div>

                    <div style={{display: 'flex', gap: '8px'}}>
                      <Chip chiptext="UX" />
                      <Chip chiptext="Web" />
                    </div>
                  </InfosProjectDescobrir>
              </ContainerProjetoDescobrir>

              <ContainerProjetoDescobrir>
                  <ProjectsImg src={Project3} ></ProjectsImg>
                  <InfosProjectDescobrir>
                    <div style={{display: 'flex', gap: '8px', textAlign: 'center', justifyContent: 'center'}}>
                      <img src={User3} alt="Imagem do perfil" style={{ width: '24px', height: '24px', borderRadius: '100px' }} />
                      <StyledBodyTexth5>Alice Alexandra</StyledBodyTexth5>
                    </div>

                    <div style={{display: 'flex', gap: '8px'}}>
                      <Chip chiptext="UX" />
                      <Chip chiptext="Web" />
                    </div>
                  </InfosProjectDescobrir>
              </ContainerProjetoDescobrir>

              <ContainerProjetoDescobrir>
                  <ProjectsImg src={Project4} ></ProjectsImg>
                  <InfosProjectDescobrir>
                    <div style={{display: 'flex', gap: '8px', textAlign: 'center', justifyContent: 'center'}}>
                      <img src={User4} alt="Imagem do perfil" style={{ width: '24px', height: '24px', borderRadius: '100px' }} />
                      <StyledBodyTexth5>Carolina Valentim</StyledBodyTexth5>
                    </div>

                    <div style={{display: 'flex', gap: '8px'}}>
                      <Chip chiptext="UX" />
                      <Chip chiptext="Web" />
                    </div>
                  </InfosProjectDescobrir>
              </ContainerProjetoDescobrir>
            </ListaProjetos>
          </div>
        </SecaoProjetos>
      </>
    )
}

export default SecaoDescobrirProjetos;
