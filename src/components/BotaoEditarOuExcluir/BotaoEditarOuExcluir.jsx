import React, { useState } from 'react';
import { EditDeleteDropdown, StyledButton } from '../SecaoMeusProjetos/SecaoMeusProjetos.styles';
import ModalExcluir from '../ModalExcluir/ModalExcluir';
import ModalExcluirPopUp from '../ModalExcluir/ModalExcluirPopUp';

function BotaoEditarOuExcluir({ onEditar, onExcluir, onCloseExcluirPopUp  }) {
  const [showExcluirModal, setShowExcluirModal] = useState(false);
  const [showExcluirPopUp, setShowExcluirPopUp] = useState(false);

  const handleExcluirClick = () => {
    setShowExcluirModal(true);
  };

  const handleExcluirConfirm = () => {
    onExcluir();
    setShowExcluirModal(false);
    setShowExcluirPopUp(true);
  };

  const handleExcluirCancel = () => {
    setShowExcluirModal(false);
  };

  return (
    <>
      <EditDeleteDropdown>
        <StyledButton onClick={onEditar}>Editar</StyledButton>
        <StyledButton onClick={handleExcluirClick}>Excluir</StyledButton>
      </EditDeleteDropdown>

      {showExcluirModal && (
        <ModalExcluir
          onConfirm={handleExcluirConfirm}
          onCancel={handleExcluirCancel}
        />
      )}

      {showExcluirPopUp && (
        <ModalExcluirPopUp
          onClose={() => {
            setShowExcluirPopUp(false);
            onCloseExcluirPopUp();
          }}
        />
      )}
    </>
  );
}

export default BotaoEditarOuExcluir;