import styled from "styled-components";

//POR ALGUM MOTIVO O BACKGROUND NÃO TÁ COBRINDO A TELA INTEIRA!
/* FUNDO */
export const ModalBackground = styled.div`
  background: rgba(0, 0, 0, 0.5);  
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

/* CONTAINER DO MODAL */
export const AddProjectContainer = styled.div`
  background-color: #FEFEFE;
	top: 0;
	height: 859px;
	width: 312px;
	display: flex;
	flex-direction: row;
	position: absolute;
	margin: 150px 0 0 0;

/* DESKTOP */
@media screen and (min-width: 1024px) {
	height: 522px;
	width: 890px;
	flex-direction: column;
	margin: 148px 180px;
	}
`;

/* DIV - TÍTULO */
export const DivTitulo = styled.div`
  width: fit-content;
`;

/* TEXTO DO TÍTULO */
export const TituloDoModal = styled.h5`
  color: #515255;
  width: 280px;
	font-size: 24px;
	font-weight: 400;
	left: 24px;
	position: relative;
	margin: 10px 0 0 0;
	
/* DESKTOP */
@media screen and (min-width: 1024px) {
	margin: 45px 0;
	font-size: 24px;
	top: -20px;
	left: 32px;
	}
`;

/* DIV QUE SELECIONA IMAGEM E INPUTS */
export const DivBotaoForm = styled.div`
  display: flex;
  justify-content: space-between;
	height: 100%;
	margin: 65px 0 0 0;
	position: absolute;
	width: 100%;
	order: 1;
	
/* DESKTOP */
@media screen and (min-width: 1024px) {
	margin: 60px 0 0 32px;
	}

`;

/* DIV COM O <p> E O BOTÃO PARA SELECIONAR A IMAGEM */
export const DivH3Img = styled.div`
  background-color: #e6e9f2;
	border-radius: 4px;
	position: absolute;
	display: flex;
	height: 304px;
	width: 266px;
	top: 360px;
	left: 22px;
	cursor: pointer;

/* DESKTOP */
@media screen and (min-width: 1024px) {
	left: 0;
	top: 38px;
	width: 389px;
    }
`;

/* BOTÃO QUE ADICIONA IMAGEM */
export const BotaoProjeto = styled.button`
  position: absolute;
  width: 100%;
  height: 100%;
  border: none;
  cursor: pointer;
  background-color: transparent;

/* DESKTOP */
  @media screen and (min-width: 1024px) {
    &::before {
      margin: 155px 40px 0 45px;
    }
  }
`;

/* CONTEÚDO DENTRO DO BOTÃO */
export const TextDiv = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  padding: 0px 8px 0px 15px;

/* DESKTOP */
@media screen and (min-width: 768px) {
    padding: 0px 60px 0px 59px;
  }
`;

/* TEXTO DENTRO DO BOTÃO */
export const StyledBodyTextP = styled.p`
  color: #303133;
  padding: 0;
  display: flex;
  align-self: start;
  opacity: 0.6;
  font-size: 14px;
  font-weight: 400;
  text-align: left;
`
/* DIV - SUBTITULO */
export const DivSubtitulo = styled.div`
  display: flex;
  position: relative;
  top: 370px;
	right: 257px;
  min-width: 263px;
  min-height: fit-content;

/* DESKTOP */
@media screen and (min-width: 1024px) {
    top: -30px;
    right: -50px;
  }
`;

/* TEXTO DO SUBTITULO */
export const SubtituloModal = styled.p`
  color: #515255;
  display: flex;
	font-size: 16px;
	font-weight: 400;
	position: relative;

/* DESKTOP */
	@media screen and (min-width: 1024px) {
	top: -20px;
	right: 20px;
  }
`;

/* DIV DO FORMULÁRIO */
export const DivForm = styled.div`
  align-items: flex-start;
	display: flex;
	flex-direction: column;
	gap: 16px;
	height: 684px;
	margin: 0 0 0 10px;
	top: -10px;
	position: relative;
	width: 263px;
	order: 0;

/* DESKTOP */
	@media screen and (min-width: 1024px){
	margin: 370px 0 0 10px;
	height: 336px;
	left: 400px;
	top: -365px;
	width: 413px;		
	}
`;

/* DIV DOS INPUTS */
export const DivFormInput = styled.div`
  align-items: flex-start;
	border: none;
  gap: 16px;
	border-radius: 4px;
	display: flex;
	flex-direction: column;
	padding: 0px 12px;
	position: relative;

  /* ESTILO DOS INPUTS */
	& input {
		border: 1px solid #818388;
		align-items: center;
		align-self: stretch;
		border-radius: 4px;
		font-size: 16px;
		display: flex;
		flex: 0 0 auto;
		gap: 8px;
		padding: 10px 0 10px 12px;
		position: relative;
		width: 263px;
		height: 56px;
  }

    /* ESTILO DA TEXTAREA */
    & textarea {
    border: 1px solid #818388;
		font-family: 'Roboto', sans-serif;
		font-size: 16px;
		resize: none;
		border-radius: 4px;
		display: flex;
		flex: 0 0 auto;
		gap: 8px;
		padding: 10px 0 10px 12px;
		width: 263px;
		height: 88px;
		position: relative;
    }

/* DESKTOP */
@media screen and (min-width: 1024px) {
      top: 5px;
      right: 10px;

      & input {
        width: 413px;
      }

      & textarea {
        width: 413px;
        height: 115px;
      }
  }
`;

/* DIV COM LINK E BOTÕES */
export const DivLink = styled.div`
  display: flex;
  position: relative;
  padding: 12px 0 0 0;
  min-width: 263px;
  height: 120px;
  margin: 0;
  top: 730px;
  right: 520px;

  /* ESTILO DO LINK */
  & a {
    text-decoration: none;
    color: #515255;
    min-width: 100%;
    font-size: 16px;
    font-weight: 400;
    text-align: left;
  }

/* DESKTOP */
@media screen and (min-width: 1024px) {
    top: 265px;
    right: -30px;
  }
`;

/* DIV APENAS COM BOTÕES */
export const DivBotoes = styled.div`
  position: relative;
	display: flex;
  gap: 16px;
	height: 110px;
	min-width: 265px;
	margin:0;
  top: 30px;
	right: 265px;
	
/* DESKTOP */
@media screen and (min-width: 1024px) {
    top: 35px;
    right: 890px;
}
`;

/* PORCENTAGEM DE PROGRESSO DO ENVIO DA IMAGEM */
export const PorcentagemProgresso = styled.div`
  color: #515255;
  display: flex;
  position: relative;
  align-items: center;
  top: 323px;
  right: 550px;
  margin: 0;

/* DESKTOP */
@media screen and (min-width: 1024px) {
    top: 156px;
    right: 0;
    left: 390px;
}
`;