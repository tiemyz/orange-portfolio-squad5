import React from 'react';
import { ButtonOrangeMedium } from '../Buttons/Buttons.styles';
import { ModalBackground, ModalContent, ModalH5 } from '../Modal/Modal.styles';
import CheckImg from '../../assets/images/check-green.png';

function ModalExcluirPopUp({ onClose }) {
  return (
    <ModalBackground>
      <ModalContent aria-labelledby="dialog">
        <ModalH5>Projeto deletado com sucesso!</ModalH5>
        <img src={CheckImg} alt="check-green" width={40}></img>
        <ButtonOrangeMedium onClick={onClose}>
          Voltar para Projetos
        </ButtonOrangeMedium>
      </ModalContent>
    </ModalBackground>
  );
}

export default ModalExcluirPopUp;
