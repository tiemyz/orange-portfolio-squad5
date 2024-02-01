import { useState } from 'react';
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
  TextDiv
} from './SecaoMeusProjetos.styles';
import PencilButton from '../../assets/images/pencil.png';
import collectionsImage from '../../assets/images/collections.png';

/* TODO: 
* Ocultar botão editar!
 */

function SecaoMeusProjetos() {
  const [openEdit, setOpenEdit] = useState(false)
  return (
    <>
      <SecaoProjetos>
        <div className="projetos">
          <div>
            <SubtituloProjetos>Meus projetos</SubtituloProjetos>
          </div>
          <div className="campo-de-busca">
            <label htmlFor="buscar-tags">
              <CampoBuscarTags
                type="text"
                id="buscar-tags"
                placeholder="Buscar tags"
              />
            </label>
          </div>
          <ListaProjetos>
            <ContainerProjeto>
              <BotaoLapis
                id="pencil-icon"
                src={PencilButton}
                alt="Pencil icon"
                onClick={() => setOpenEdit(!openEdit)}
              />
              <BotaoProjeto onClick={() => window.alert('Tudo ok!')}></BotaoProjeto>
              <TextDiv>
                <img src={collectionsImage} width={'46px'}></img>
                <StyledBodyTexth5>Adicione seu primeiro projeto</StyledBodyTexth5>
                <StyledBodyTextP>Compartilhe seu talento com milhares de pessoas</StyledBodyTextP>
              </TextDiv>
              {openEdit && <BotaoEditarOuExcluir />}
            </ContainerProjeto>

          </ListaProjetos>
        </div>
      </SecaoProjetos>
    </>
  )
}

export default SecaoMeusProjetos;