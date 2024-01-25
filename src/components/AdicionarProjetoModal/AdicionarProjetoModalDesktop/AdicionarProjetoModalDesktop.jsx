import { StyledBodyText2} from "../../SecaoMeusProjetos/SecaoMeusProjetosStyle";
import { AdicionarProjetoDiv, BotaoProjetoModal, CampoInput, DescricaoInput, FileiraDois, FileiraUm, IconImg, ModalContainer, ModalP, SubtituloAdicionarProjeto } from "./AdicionarProjetoModalStyleDesktop";

export default function AdicionarProjetoModalDesktop () {
    return (
        <ModalContainer>
            <AdicionarProjetoDiv>
                <FileiraUm>
                <SubtituloAdicionarProjeto>Adicionar projeto</SubtituloAdicionarProjeto>
                <ModalP>Selecione o conteúdo que você deseja fazer upload</ModalP>
                <BotaoProjetoModal>
                            <IconImg
                                id="icon-img"
                                src="../../../assets/secao-projetos/collections.png"
                                alt="Icon imagem"
                            />
                            <StyledBodyText2>Compartilhe seu talento com milhares de pessoas</StyledBodyText2>
                </BotaoProjetoModal>
                <ModalP>Visualizar publicação</ModalP>
                <button>SALVAR</button>
                <button>CANCELAR</button>
                </FileiraUm>
                <FileiraDois>
                <label htmlFor="titulo">
                    <CampoInput
                        type="text"
                        id="titulo"
                        placeholder="Título"
                    />
                </label>
                <label htmlFor="tags">
                    <CampoInput
                        type="text"
                        id="tags"
                        placeholder="Tags"
                    />
                </label>
                <label htmlFor="link">
                    <CampoInput
                        type="url"
                        id="url"
                        placeholder="Link"
                    />
                </label>
                <label htmlFor="descricao">
                    <DescricaoInput
                        type="text"
                        id="descricao"
                        placeholder="Descrição"
                    />
                </label>
                </FileiraDois>
            </AdicionarProjetoDiv>
        </ModalContainer>

    )
}
