import React, { useState } from 'react';
import { EditDeleteDropdown, StyledButton } from '../SecaoMeusProjetos/SecaoMeusProjetos.styles';
import ModalExcluir from '../ModalExcluir/ModalExcluir';

function BotaoEditarOuExcluir({ onEditar, onExcluir }) {
  const [showExcluirModal, setShowExcluirModal] = useState(false);

  const handleExcluirClick = () => {
    setShowExcluirModal(true);
  };

  const handleExcluirConfirm = () => {
    onExcluir();

    setShowExcluirModal(false);
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
    </>
  );
}

export default BotaoEditarOuExcluir;