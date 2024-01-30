import { ButtonOrangeMedium } from "../Buttons/ButtonStyles";
import { ModalBackgroung, ModalContent, ModalH5} from "./ModalStyle";


function Modal({isOpen, texth5, textbutton}) {
    if(isOpen){
        return(
            <ModalBackgroung>
                <ModalContent aria-aria-labelledby="dialog">
                    <ModalH5>{texth5}</ModalH5>
                    <img src="src\assets\img\check-green.png" alt="check-green" width={40}></img>
                    <ButtonOrangeMedium>{textbutton}</ButtonOrangeMedium>
                </ModalContent>
            </ModalBackgroung>
            
        );
    }
    
}

export default Modal;

