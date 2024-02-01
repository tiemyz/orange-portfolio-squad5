import { ButtonOrangeMedium } from '../Buttons/Buttons.styles';
import { ModalBackgroung, ModalContent, ModalH5 } from './Modal.styles';
import CheckImg from '../../assets/images/check-green.png';

function Modal() {
  return (
    <ModalBackgroung>
      <ModalContent aria-aria-labelledby="dialog">
        <ModalH5>Projeto Adicionado Com Sucesso!</ModalH5>
        <img src={CheckImg} alt="check-green" width={40}></img>
        <ButtonOrangeMedium>Voltar para Projetos</ButtonOrangeMedium>
      </ModalContent>
    </ModalBackgroung>
  )
}

export default Modal;
