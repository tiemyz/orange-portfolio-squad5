import Chip from "../Chip/Chip";
import { ChipDiv } from "../Chip/ChipStyle";
import { ModalPreVisualizacaoBackground, ModalPreVisualizacaoContent, ModalPreVisualizacaoDiv, ModalPreVisualizacaoH5, ModalPreVisualizacaoInfoUsuario, ModalPreVisualizacaoNomeUsuario, ModalPreVisualizacaoTextContainer, ModalPreVisualizacaoTime } from "./ModalPreVisualizacaoProjetoStyle";

function ModalPreVisualizacaoProjeto(url) {
    return (
        <ModalPreVisualizacaoBackground>

            <ModalPreVisualizacaoContent>
                <button>x</button>
                <ModalPreVisualizacaoH5>Ecomerce One Page</ModalPreVisualizacaoH5>

                <img src="src\assets\img\img_landingpage.png" alt="Project-Photo"></img>
                <div>

                    <ModalPreVisualizacaoDiv>

                        <img src="src\assets\img\user-profile.png" alt="user-profile" width={40} height={40} />
                        <ModalPreVisualizacaoInfoUsuario>
                            <ModalPreVisualizacaoNomeUsuario>Camila Soares</ModalPreVisualizacaoNomeUsuario>
                            <ModalPreVisualizacaoTime>12/12</ModalPreVisualizacaoTime>
                        </ModalPreVisualizacaoInfoUsuario>
                        <ChipDiv>
                            <Chip chiptext={'UX'}></Chip>
                            <Chip chiptext={'Web'}></Chip>
                        </ChipDiv>
                    </ModalPreVisualizacaoDiv>
                    <ModalPreVisualizacaoTextContainer>
                        <p>Temos o prazer de compartilhar com vocês uma variação da nosso primeiro recurso gratuito, Monoceros. É um modelo de uma página para mostrar seus produtos. Tentamos redesenhar uma versão mais B2C e minimalista do nosso primeiro template de e-commerce.</p>
                        <br></br>
                        <h6>Download</h6>
                        <a href={url}>link</a>
                    </ModalPreVisualizacaoTextContainer>

                </div>
            </ModalPreVisualizacaoContent>
        </ModalPreVisualizacaoBackground>

    );
}

export default ModalPreVisualizacaoProjeto;