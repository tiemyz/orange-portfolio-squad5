import { useState } from 'react';
import { BotaoEditarOuExcluir } from '../BotãoEditarOuExcluir/BotãoEditarOuExcluir';
import {
  SecaoProjetos,
  CampoBuscarTags,
  SubtituloProjetos,
  BotaoProjeto,
  StyledBodyText1,
  ListaProjetos,
  BotaoLapis,
  ContainerProjeto
} from './SecaoMeusProjetos.styles';
import PencilButton from '../../assets/images/pencil.png';

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
              <BotaoProjeto onClick={() => window.alert('Tudo ok!')}>
                <StyledBodyText1>Adicione seu primeiro projeto</StyledBodyText1>
              </BotaoProjeto>
              {openEdit && <BotaoEditarOuExcluir />}
            </ContainerProjeto>

            <ContainerProjeto></ContainerProjeto>

            <ContainerProjeto></ContainerProjeto>
          </ListaProjetos>
        </div>
      </SecaoProjetos>
    </>
  )
}

export default SecaoMeusProjetos;