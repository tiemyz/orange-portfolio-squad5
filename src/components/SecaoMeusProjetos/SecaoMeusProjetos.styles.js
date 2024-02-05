import styled from 'styled-components'

export const SecaoProjetos = styled.section`
  padding: 40px 24px;
  margin-bottom: 27px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media screen and (min-width: 768px) and (max-width: 1024px) {
    padding-top: 56px;
    padding-left: 32px;
    flex-direction: row;
    justify-content: flex-start;
    margin-bottom: 39px;
  }

  @media screen and (min-width: 1024px) {
    padding-top: 56px;
    justify-content: flex-start;
    flex-direction: row;
    padding-bottom: 39px;
  }
`
export const SubtituloProjetos = styled.h6`
  margin-bottom: 16px;
  color: #0b0c0d;
  font-size: 20px;
  font-weight: 500;
  opacity: 0.6;
`
export const CampoBuscarTags = styled.input`
  align-self: stretch;
  margin-bottom: 40px;
  padding: 10px 0 10px 12px;
  border: 1px solid #818388;
  border-radius: 4px;
  width: 312px;
  height: 56px;

  &:focus,
  &:active {
    outline: none;
    border: 2px solid #2348b1;
  }

  &:hover {
    border-color: #000000;
  }

  //Tablet
  @media screen and (min-width: 768px) and (max-width: 1024px) {
    width: 420px;
  }
  //Desktop
  @media screen and (min-width: 1024px) {
    width: 520px;
  }
`
export const ListaProjetos = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  gap: 56px;
  padding: 0;
  width: 312px;
  height: 258px;
  justify-content: space-between;

  //Tablet
  @media screen and (min-width: 767px) and (max-width: 1024px) {
    justify-content: flex-start;
    width: 100%;
    height: 298px;
    gap: 24px;
    row-gap: 70px;
    
  }

  //Desktop
  @media screen and (min-width: 1024px) {
    justify-content: flex-start;
    width: 100%;
    height: 258px;
    gap: 24px;
    row-gap: 70px;
    padding-bottom: 50px;
  }
`;

export const ContainerProjeto = styled.div`
  position: relative;
  width: 312px;
  height: 258px;
  background-color: #e6e9f2;
  border-radius: 4px;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 50px;

  @media screen and (min-width: 768px){
    width: 390px;
    height: 300px;
  }

  @media screen and (min-width: 768px) and (max-width: 1200) {
    
  }
`;

//Estilo botão projeto - Mobile
export const BotaoProjeto = styled.button`
  position: absolute;
  z-index: 0;
  width: 312px;
  height: 258px;
  border: none;
  cursor: pointer;
  background-color: transparent;

  @media screen and (min-width: 1024px) {
    width: 390px;
    height: 258px;
  }
`;

export const InfosProject = styled.div`
  margin-top: 310px;
  //background-color: green;
  height: 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* width: 312px; */
  width: 100%;
  /* padding: 5px 10px; */

  @media screen and (min-width: 767px) {
    margin-top: 345px;
    height: 39px;
  }
`

//Estilo do p 1 do botão
export const StyledBodyText1 = styled.p`
  position: absolute;
  top: 110px;
  right: 100px;
  color: #303133;
  opacity: 0.6;
  font-size: 16px;
  font-weight: 400;
  text-align: left;

  //Tablet
  @media screen and (min-width: 768px) and (max-width: 1024px) {
    position: relative;
    margin: 10px 30px 10px 0;
    top: 115px;
    right: -25px;
  }
  //Desktop
  @media screen and (min-width: 1024px) {
    position: relative;
    margin: 10px 30px 10px 0;
    top: 115px;
    right: -38px;
  }
`

//Estilo do botão de lápis para dropdown:
export const BotaoLapis = styled.img`
  cursor:pointer;
  position: absolute;
  z-index: 1;
  top: 4%;
  right: 3%;
  width: 25px;
  height: 25px;
  padding: 4px;
  border-radius: 100%;
  background-color: #ffcc99;
  border: none;
  box-shadow: 2px 2px 5px 1px rgba(0, 0, 0, 0.1);
`

export const EditDeleteDropdown = styled.div`
  position: absolute;
  top: 50px;
  right: 15px;
  width: 180px;
  padding: 16px 0;
  border-radius: 8px;
  background-color: white;
  box-shadow: 2px 2px 5px 1px rgba(0, 0, 0, 0.1);

  &::before {
    content: '';
    position: absolute;
    top: -0.3rem;
    right: 1.1rem;
    width: 10px;
    height: 10px;
    transform: rotate(45deg);
    background-color: white;
  }

  //Tablet
  @media screen and (min-width: 768px) and (max-width: 1024px) {
    right: 15px;
  }
  //Desktop
  @media screen and (min-width: 1024px) {
    right: 15px;
  }
`

export const StyledButton = styled.button`
  display: flex;
  align-items: center;
  padding: 4px 0 6px 20px;
  justify-content: space-between;
  width: 180px;
  border: none;
  background-color: transparent;
  font-family: inherit;
  font-size: 14px;
  color: #333;
  cursor: pointer;

  &:hover {
    background-color: #ffeecc;
  }
`
/*Conteudo do container vazio */
export const TextDiv = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  padding: 0px 30px 0px 21px;

  @media screen and (min-width: 768px) {
    padding: 0px 60px 0px 59px;
  }
`

export const StyledBodyTexth5 = styled.h5`
  color: #303133;
  align-self: start;
  opacity: 0.6;
  font-size: 16px;
  font-weight: 400;
  text-align: left;
`

export const StyledBodyTextP = styled.p`
  color: #303133;
  display: flex;
  align-self: start;
  opacity: 0.6;
  font-size: 14px;
  font-weight: 400;
  text-align: left;
`
/*Seção Descobrir Projetos*/
export const DivDescobrirH4 = styled.div`
  margin-top: 88px;
  height: 120px;
  width: 312px;
  margin-bottom: 60px;
  @media screen and (min-width: 768px) {
    width: auto;
  }
`;

export const DescobrirH4 = styled.h4`
  font-size: 24px;
  line-height: 30px;
  font-weight: 400;
  letter-spacing: 0.25px;
  text-align: center; 
  
  @media screen and (min-width: 1024px) {
    padding: 0px 268px 0px 268px;
    font-size: 34px;
  }
`;

export const ProjectsImg = styled.img`
  width: 320px;
  height: 256px;

  @media screen and (min-width: 768px){
    width: 389px;
    height: 298px;
  }
`;

export const ContainerProjetoDescobrir = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 8px;
`;

export const InfosProjectDescobrir = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;