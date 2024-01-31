import { ModalBackground } from '../Mobile/MobStyledAddProjectModal'
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
} from './StyledAddProjectModal'

import CollectionsImg from '../../../assets/images/collections.png'

/*TODO: Acrescentar botões "Salvar" e "Cancelar"!
  Esta é a versão Desktop do componente
  * Verificar se dá para transformar dois em um componente só,
  reorganizando a ordem dos itens do componente de acordo com a tela
  * Ao implementar, discutir se ao clicar fora do Modal ele se fechará
  * Ao implementar, adicionar funcionalidade ao btnAddProject que pode ser
  ativo ao clicar na preview area (onde o mouse aparece como cursor)
  * Ao implementar, colocar a imagem da miniatura para aparecer no lugar
  de 'preview area'
  */
export function AddProjectModal() {
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
}
