import {SecaoProjetos, CampoBuscarTags, SubtituloProjetos, BotaoProjeto, StyledBodyText1, StyledBodyText2} from "./SecaoMeusProjetosStyle"

export default function SecaoMeusProjetos () {
    return (
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
                        <BotaoProjeto>
                            <img
                                id="icon-img"
                                src="../../../assets/secao-projetos/collections.png"
                                alt="Icon imagem"
                            />
                            <StyledBodyText1>Adicione seu primeiro projeto</StyledBodyText1>
                            <StyledBodyText2>Compartilhe seu talento com milhares de pessoas</StyledBodyText2>
                        </BotaoProjeto>
            </div>
        </SecaoProjetos>
            
    )
}