import {
  SecaoProjetos,
  BotaoProjeto,
  ListaProjetos,
  ContainerProjeto,
  TextDiv,
  DescobrirH4,
  CampoBuscarTags,
  DivDescobrirH4,
} from './SecaoMeusProjetos.styles'
import collectionsImage from '../../assets/images/collections.png'


function SecaoDescobrirProjetos() {
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
              <ContainerProjeto>
                <BotaoProjeto
                  onClick={() => window.alert('Tudo ok!')}
                ></BotaoProjeto>
                <TextDiv>
                  <img src={collectionsImage} width={'46px'}></img>
                </TextDiv>
              </ContainerProjeto>
            </ListaProjetos>
          </div>
        </SecaoProjetos>
      </>
    )
  }
  
  export default SecaoDescobrirProjetos;