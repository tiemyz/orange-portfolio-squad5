import { ModalDiv} from "./ModalStyle";

function Modal({texth5, textbutton}) {
    return(
        <ModalDiv>
            <h5>{texth5}</h5>
            <img src="src\assets\img\check-green.png" alt="check-green" width={40}></img>
            <button>{textbutton}</button>
        </ModalDiv>
    );
}

export default Modal;