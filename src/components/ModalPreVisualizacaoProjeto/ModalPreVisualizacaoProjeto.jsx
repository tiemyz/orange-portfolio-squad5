import Chip from "../Chip/Chip";
import { ChipDiv } from "../Chip/ChipStyle";
import { ModalPreVisualizacaoBackground,
    ModalPreVisualizacaoContent,
    ModalPreVisualizacaoDivImagem,
    ModalPreVisualizacaoH5,
    ModalPreVisualizacaoH6,
    ModalPreVisualizacaoImagem,
    ModalPreVisualizacaoInfoContainer,
    ModalPreVisualizacaoInfoUsuario,
    ModalPreVisualizacaoInfoUsuarioContainer,
    ModalPreVisualizacaoLinks,
    ModalPreVisualizacaoNomeUsuario, 
    ModalPreVisualizacaoP,
    ModalPreVisualizacaoTextContainer,
    ModalPreVisualizacaoTime } from "./ModalPreVisualizacaoProjetoStyle";

function ModalPreVisualizacaoProjeto({ url, nomeProjeto, nomeUsuario, data }) {
    return (
        <ModalPreVisualizacaoBackground>
            <ModalPreVisualizacaoContent>
                <button>X</button>
                <ModalPreVisualizacaoH5>{nomeProjeto}</ModalPreVisualizacaoH5>
                <ModalPreVisualizacaoDivImagem>
                    <ModalPreVisualizacaoImagem src="src\assets\img\img_landingpage.png" alt="Project-Photo"></ModalPreVisualizacaoImagem>

                </ModalPreVisualizacaoDivImagem>


                <ModalPreVisualizacaoInfoContainer>
                    <ModalPreVisualizacaoInfoUsuarioContainer>
                        <img src="src\assets\img\user-profile.png" alt="user-profile" width={40} height={40} />
                        <ModalPreVisualizacaoInfoUsuario>
                            <ModalPreVisualizacaoNomeUsuario>{nomeUsuario}</ModalPreVisualizacaoNomeUsuario>
                            <ModalPreVisualizacaoTime>{data}</ModalPreVisualizacaoTime>
                        </ModalPreVisualizacaoInfoUsuario>
                    </ModalPreVisualizacaoInfoUsuarioContainer>

                    <ChipDiv>
                        <Chip chiptext={'UX'}></Chip>
                        <Chip chiptext={'Web'}></Chip>
                        <Chip chiptext={'Fullstack'}></Chip>
                    </ChipDiv>
                </ModalPreVisualizacaoInfoContainer>

                <ModalPreVisualizacaoTextContainer>
                    <ModalPreVisualizacaoP>Temos o prazer de compartilhar com vocês uma variação da nosso primeiro recurso gratuito, Monoceros. É um modelo de uma página para mostrar seus produtos. Tentamos redesenhar uma versão mais B2C e minimalista do nosso primeiro template de e-commerce.</ModalPreVisualizacaoP>
                    <br></br>
                    <ModalPreVisualizacaoH6>Download</ModalPreVisualizacaoH6>
                    <ModalPreVisualizacaoLinks href={url}>{url}</ModalPreVisualizacaoLinks>
                </ModalPreVisualizacaoTextContainer>


            </ModalPreVisualizacaoContent>
        </ModalPreVisualizacaoBackground>

    );
}

export default ModalPreVisualizacaoProjeto;