import styled from 'styled-components';

export const ModalBackground = styled.div`
  background: rgba(0, 0, 0, 0.5);
  position: fixed;  
  top: 0px; 
  left: 0;
  width: 100vw;
  height: 100vh; 
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
  overflow: auto;

  @media screen and (min-width: 1024px) {
    height: 100vh;
    width: 100vw;
  }
`;

export const AddProjectContainer = styled.div`
  background-color: #FEFEFE;
  height: 890px;
  width: 312px;
  display: flex;
  padding: 24px 16px;
  row-gap: 16px;
  flex-direction: column; 
  margin-top: 500px;
  align-items: center;
  
  @media screen and (min-width: 768px) {
    width: 624px;
  }


  @media screen and (min-width: 1024px) {
    height: 522px;
    width: 890px;
    padding: 24px 32px;
    margin-top: 155px;
  }
`;

export const DivTitulo = styled.div`
  //background-color: pink;
`;

export const TituloDoModal = styled.h5`
  color: #515255;
	font-size: 24px;
	font-weight: 400;
`;

export const DivBotaoForm = styled.div`
  display: flex;
  flex-direction: column-reverse;
	height: 671px;
  width: 280px;
  column-gap: 24px;
  width: auto;
  row-gap: 16px;
	
  @media screen and (min-width: 1024px) {
    flex-direction: row;
    height: 336px;
  }
`;

export const DivH3Img = styled.div`
	display: flex;
  flex-direction: column;
	height: 324px;  
  width: 100%;
  row-gap: 16px;
	cursor: pointer;

  @media screen and (min-width: 1024px) {
    height: 336px;
    width: 389px;
  }
`;

export const SubtituloModal = styled.p`
  color: #515255;
  display: flex;
	font-size: 16px;
	font-weight: 400;
`;

export const BotaoProjeto = styled.button`
  position: relative; 
  background-color: #E6E9F2;
  width: 100%;
  height: 100%;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

export const TextDiv = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  position: relative; 
`;

export const StyledBodyTextP = styled.p`
  color: #303133;
  padding: 10px;
  opacity: 0.6;
  font-size: 14px;
  font-weight: 400;
  text-align: left;
`
export const DivForm = styled.div`
	display: flex;
	flex-direction: column;
	gap: 16px;
	height: 304px; 
	width: 280px; 

  @media screen and (min-width: 768px) {
    width: 413px;
    height: 336px;
  }

  @media screen and (min-width: 1024px) {
    width: 413px;
    height: 336px;
  }
`;

export const DivFormInput = styled.div`
  gap: 16px;
	display: flex;
	flex-direction: column;

    & input {
      border: 1px solid #818388;
      border-radius: 4px;
      font-size: 16px;
      padding: 10px 0 10px 12px;
      height: 56px;
    }

    & textarea {
    border: 1px solid #818388;
		font-size: 16px;
		border-radius: 4px;
		display: flex;
		padding: 10px 0 10px 12px;
		height: 88px;
    }

  @media screen and (min-width: 768px) {
    & input{
      width: 100%;
    }
    & textarea {
        width: 100%;
        height: 120px;
    }
    
    
  }


  @media screen and (min-width: 1024px) {
      & input {
        width: 413px;
      }

      & textarea {
        width: 413px;
        height: 120px;
      }
  }
`;

export const DivLink = styled.div`
  display: flex;

  & a {
    text-decoration: none;
    color: #515255;
    min-width: 100%;
    font-size: 16px;
    font-weight: 400;
    text-align: left;
  }
`;

export const DivBotoes = styled.div`
	display: flex;
  gap: 16px;
`;

export const UploadImageDiv = styled.div`
  position: absolute;
  width: 100%;
  top: -77px;
  left: 0;

  @media screen and (min-width: 1024px) {
    top: -100px;
    left: 0;
  }
`
export const UploadImage = styled.img`
  height: 270px;
  width: 100%;
  border-radius: 4px;

  @media screen and (min-width: 768px) {
    margin-top: -16px;
    height: 286px;

  }
  @media screen and (min-width: 1024px) {
    margin-top: 0;
    height: 307px;
    width: 388px;
  }
`

export const UploadImageDiv2 = styled.div`
  position: absolute;
  top: 0;
  left: 0px;

  @media screen and (min-width: 1024px) {
    top: 0;
  }
`
export const UploadImage2 = styled.img`
  height: 258px;
  width: 312px;
  border-radius: 4px;

  @media screen and (min-width: 768px) {
    height: 300px;
    width: 390px;
  }
`