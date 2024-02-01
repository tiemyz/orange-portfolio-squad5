import styled from 'styled-components';

//Estilo da Seção Projetos - Mobile
export const SecaoProjetos = styled.section`
  padding: 0px 32px;
  display: flex;
  flex-direction: column;

  //Tablet
  @media screen and (min-width: 768px) and (max-width: 1024px) {
    flex-direction: row;
  }

  //Desktop
  @media screen and (min-width: 1024px) {
    flex-direction: row;
    width: 589px;
    height: 323px;
  }
`

//Estilo do subtítulo "Meus Projetos" - Mobile and Desktop
export const SubtituloProjetos = styled.h6`
  margin-bottom: 16px;
  color: #0b0c0d;
  font-size: 20px;
  font-weight: 500;
  opacity: 0.6;
`;

//Estilo do campo de busca - Mobile
export const CampoBuscarTags = styled.input`
  align-self: stretch;
  margin-bottom: 40px;
  padding: 10px 12px;
  border: 1px solid #818388;
  border-radius: 4px;
  width: 300px;
  height: 24px;
  &::hover {
    border: 1px solid #000000;
  }
  //Para code review: Focus não está funcionando como deveeria (Cor não muda)!
  &::focus {
    border: 2px solid #2348b1;
  }

  //Tablet
  @media screen and (min-width: 768px) and (max-width: 1024px) {
    width: 420px;
  }
  //Desktop
  @media screen and (min-width: 1024px) {
    width: 520px;
  }
`;

//Container projetos - Mobile
export const ListaProjetos = styled.ul`
  position: absolute;
  list-style: none;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  gap: 24px;
  padding: 0;

  //Tablet
  @media screen and (min-width: 768px) and (max-width: 1024px) {
    flex-direction: row;
  }

  //Desktop
  @media screen and (min-width: 1024px) {
    flex-direction: row;
    width: 100vw;
  }
`;

export const ContainerProjeto = styled.li`
  position: relative;
  display: flex;
  width: 330px;
  height: 260px;
  background-color: #E6E9F2;
  border-radius: 4px;
  border: none;
  flex-direction: row;

  //Desktop
  @media screen and (min-width: 1024px) {
    width: 100vw;
    width: 390px;
    height: 260px;
  }
`;

//Estilo botão projeto - Mobile
export const BotaoProjeto = styled.button`
  position: absolute;
  width: 100%;
  height: 100%;
  border: none;
  cursor: pointer;
  background-color: transparent;

  //Tablet
  @media screen and (min-width: 768px) and (max-width: 1024px) {
    &::before {
      margin: 155px 40px 0 30px;
    }
  }
  //Desktop
  @media screen and (min-width: 1024px) {
    &::before {
      margin: 155px 40px 0 45px;
    }
  }
`;

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
`;

//Estilo do botão de lápis para dropdown:
export const BotaoLapis = styled.img`
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
`;

//Estilo do dropdown:
export const EditDeleteDropdown = styled.div`
  position: absolute;
  top: 50px;
  right: 15px;
  width: 180px;
  height: 55px;
  padding: 16px 0;
  border-radius: 8px;
  background-color: white;
  box-shadow: 2px 2px 5px 1px rgba(0, 0, 0, 0.1);

  & ::before {
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
`;

export const StyledUl = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

export const StyledLi = styled.li`
  display: flex;
  align-items: center;
  padding: 4px 0 6px 20px;
  justify-content: space-between;
  &:hover {
    background-color: #ffeecc;
    cursor: pointer;
  }
`;


export const imagemCollection = styled.img`
  src: url('src\assets\images\collections.png');
  width: 46px;
`;

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
`;

export const StyledBodyTexth5 = styled.h5`
  color: #303133;
  align-self: start;
  opacity: 0.6;
  font-size: 16px;
  font-weight: 400;
  text-align: left;
  
  `;

export const StyledBodyTextP = styled.p`
  color: #303133;
  display: flex;
  align-self: start;
  opacity: 0.6;
  font-size: 14px;
  font-weight: 400;
  text-align: left;
  
  `;