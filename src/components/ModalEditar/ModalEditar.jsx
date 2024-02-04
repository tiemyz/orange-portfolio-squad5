import React from 'react';
import { ButtonOrangeMedium } from '../Buttons/Buttons.styles';
import { ModalBackground, ModalContent, ModalH5 } from '../Modal/Modal.styles';
import CheckImg from '../../assets/images/check-green.png';

function ModalEditar({ onClose }) {
  return (
    <ModalBackground>
      <ModalContent aria-labelledby="dialog">
        <ModalH5>Edição concluída com sucesso!</ModalH5>
        <img src={CheckImg} alt="check-green" width={40}></img>
        <ButtonOrangeMedium onClick={onClose}>
          Voltar para Projetos
        </ButtonOrangeMedium>
      </ModalContent>
    </ModalBackground>
  );
}

export default ModalEditar;
