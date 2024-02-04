import React from 'react';
import { ModalBackground, ModalContent2 } from '../Modal/Modal.styles';
import { ButtonGray, ButtonOrangeSmall } from '../Buttons/Buttons.styles';

function ModalExcluir({ onConfirm, onCancel }) {
  return (
    <ModalBackground>
      <ModalContent2 aria-labelledby="dialog">
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <h5 style={{ fontSize: '24px', color: '#818388', fontWeight: '400' }}>Deseja Excluir?</h5>
        </div>

        <div>
          <p style={{ fontSize: '16px' }}>Se você prosseguir irá excluir o projeto do seu portfólio</p>
        </div>

        <div style={{ display: 'flex', columnGap: '16px' }}>
          <ButtonOrangeSmall onClick={onConfirm}>EXCLUIR</ButtonOrangeSmall>
          <ButtonGray onClick={onCancel}>CANCELAR</ButtonGray>
        </div>
      </ModalContent2>
    </ModalBackground>
  );
}

export default ModalExcluir;
