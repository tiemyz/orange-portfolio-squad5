import Chip from "../Chip/Chip";
import { ChipDiv } from "../Chip/ChipStyle";
import { ModalPreVisualizacaoBackground, ModalPreVisualizacaoContent, ModalPreVisualizacaoH5, ModalPreVisualizacaoH6, ModalPreVisualizacaoInfoContainer, ModalPreVisualizacaoInfoUsuario, ModalPreVisualizacaoInfoUsuarioContainer, ModalPreVisualizacaoLinks, ModalPreVisualizacaoNomeUsuario, ModalPreVisualizacaoP, ModalPreVisualizacaoTextContainer, ModalPreVisualizacaoTime } from "./ModalPreVisualizacaoProjetoStyle";

function ModalPreVisualizacaoProjeto(url) {
    return (
        <ModalPreVisualizacaoBackground>

            <ModalPreVisualizacaoContent>
                <button>x</button>
                <ModalPreVisualizacaoH5>Ecommerce One Page</ModalPreVisualizacaoH5>

                <img src="src\assets\img\img_landingpage.png" alt="Project-Photo"></img>


                <ModalPreVisualizacaoInfoContainer>
                    <ModalPreVisualizacaoInfoUsuarioContainer>
                        <img src="src\assets\img\user-profile.png" alt="user-profile" width={40} height={40} />
                        <ModalPreVisualizacaoInfoUsuario>
                            <ModalPreVisualizacaoNomeUsuario>Camila Soares</ModalPreVisualizacaoNomeUsuario>
                            <ModalPreVisualizacaoTime>12/12</ModalPreVisualizacaoTime>
                        </ModalPreVisualizacaoInfoUsuario>
                    </ModalPreVisualizacaoInfoUsuarioContainer>

                    <ChipDiv>
                        <Chip chiptext={'UX'}></Chip>
                        <Chip chiptext={'Web'}></Chip>
                    </ChipDiv>
                </ModalPreVisualizacaoInfoContainer>

                <ModalPreVisualizacaoTextContainer>
                    <ModalPreVisualizacaoP>Temos o prazer de compartilhar com vocês uma variação da nosso primeiro recurso gratuito, Monoceros. É um modelo de uma página para mostrar seus produtos. Tentamos redesenhar uma versão mais B2C e minimalista do nosso primeiro template de e-commerce.</ModalPreVisualizacaoP>
                    <br></br>
                    <ModalPreVisualizacaoH6>Download</ModalPreVisualizacaoH6>
                    <ModalPreVisualizacaoLinks href={url}>link</ModalPreVisualizacaoLinks>
                </ModalPreVisualizacaoTextContainer>


            </ModalPreVisualizacaoContent>
        </ModalPreVisualizacaoBackground>

    );
}

export default ModalPreVisualizacaoProjeto;