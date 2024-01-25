import { StyledBodyText2} from "../SecaoMeusProjetos/SecaoMeusProjetosStyle";
import { BotaoProjetoModal, CampoInput, DescricaoInput, ModalContainer, ModalP, SubtituloAdicionarProjeto } from "./AdicionarProjetoModalStyle";

export default function AdicionarProjetoModal () {
    const handleClick = () => {
        window.alert("Tudo ok!");
      };

    return (
        <ModalContainer>
            <div className="formulario-adicionar-projeto">
                <SubtituloAdicionarProjeto>Adicionar projeto</SubtituloAdicionarProjeto>
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
                <ModalP>Selecione o conteúdo que você deseja fazer upload</ModalP>
                <BotaoProjetoModal>
                            <img
                                id="icon-img"
                                src="../../../assets/secao-projetos/collections.png"
                                alt="Icon imagem"
                            />
                            <StyledBodyText2>Compartilhe seu talento com milhares de pessoas</StyledBodyText2>
                        </BotaoProjetoModal>
                <ModalP>Visualizar publicação</ModalP>
                <button>SALVAR</button>
                <button>CANCELAR</button>
            </div>
        </ModalContainer>

    )
}
