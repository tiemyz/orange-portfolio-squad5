import Chip from "../Chip/Chip";
import { ChipDiv } from "../Chip/ChipStyle";
import { ModalPreVisualizacaoBackground, ModalPreVisualizacaoContent, ModalPreVisualizacaoH5} from "./ModalPreVisualizacaoProjetoStyle";

function ModalPreVisualizacaoProjeto() {
    return (
        <ModalPreVisualizacaoBackground>
            <ModalPreVisualizacaoContent>
                <button>x</button>
                <ModalPreVisualizacaoH5>Ecomerce One Page</ModalPreVisualizacaoH5>
                <img src="" alt="Project-Photo"></img>
                <div>

                    <div>
                        <img src="" alt="user-profile" />
                        <div>
                            <sub>Nome</sub>
                            <time></time>
                        </div>
                        <ChipDiv>
                            <Chip chiptext={'UX'}></Chip>
                            <Chip chiptext={'Web'}></Chip>
                        </ChipDiv>
                    </div>
                    <p>Teste</p>
                    <h6>Download</h6>
                    <a href="">link</a>
                </div>
            </ModalPreVisualizacaoContent>
        </ModalPreVisualizacaoBackground>

    );
}

export default ModalPreVisualizacaoProjeto;