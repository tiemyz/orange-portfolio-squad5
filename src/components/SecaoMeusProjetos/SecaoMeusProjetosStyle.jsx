import styled from "styled-components";

//Estilo da Seção Projetos - Mobile
export const SecaoProjetos = styled.section`
    margin: 40px 0 27px 0;
    display: flex;
    flex-direction: column;

//Desktop
    @media (min-width: 768px) {
        margin: 56px 0 79px 32px;
        width: 589px;
        height: 323px;
    }
`;

//Estilo do subtítulo "Meus Projetos" - Mobile and Desktop
export const SubtituloProjetos = styled.h6 `
    margin: 0 0 16px 24px;
    color: #0B0C0D;
    font-size: 20px;
    font-weight: 500;
    opacity: 0.6;
`

//Estilo do campo de busca - Mobile
export const CampoBuscarTags = styled.input`
    align-self: stretch;
    margin: 0 24px 24px 24px;
    padding: 10px 12px;
    border: 1px solid #818388;
    border-radius: 4px;
    width: 90%;
    height: 24px;
    &:hover {
        border: 1px solid #000000;
    }
    //Para code review: Focus não está funcionando como deveeria (Cor não muda)!
    &:focus {
        border: 2px solid #2348B1;
    }

//Desktop
    @media (min-width: 768px) {
        width: 513px;
    }
`;

//Container projetos
export const ListaProjetos = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: row;
    margin: 0;
    padding: 0;

`


//Estilo botão projeto - Mobile
export const BotaoProjeto = styled.button`
    position: relative;
    margin: 0 24px;
    padding: 60px;
    background-color: #E6E9F2;
    border-radius: 4px;
    width: 389px;
    height: 258px;
    border: none;
    cursor: pointer;
    flex-direction: column;

//Desktop
    @media (max-width: 768px) {
    width: 53%;
    height: 70%;
    }
`;

//Estilo do p 1 do botão
export const StyledBodyText1 = styled.p`
    color: #303133;
    opacity: 0.6;
    font-size: 16px;
    font-weight: 400;
    text-align: left;
    margin: 16px auto;
`;

//Estilo do p 2 do botão
export const StyledBodyText2 = styled.p`
    color: #303133;
    opacity: 0.6;
    font-size: 14px;
    font-weight: 400;
    text-align: left;
    margin: 0;
`;

//Estilo do botão de lápis para dropdown:

export const BotaoLapis = styled.img`
    position: absolute;
    top: 10px;
    right: 12px;
    width: 25px;
    height: 25px;
    padding: 4px;
    border-radius: 100%;
    background-color: #FFCC99;
    border: none;
    box-shadow: 2px 2px 5px 1px rgba(0, 0, 0, 0.1);
`;

//Estilo do dropdown:
export const EditDeleteDropdown = styled.div`
    position: absolute;
    top: 214px;
    right: 806px;
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
`

export const StyledUl = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 2px;
`

export const StyledLi = styled.li`
    display: flex;
    align-items: center;
    padding: 4px 0 6px 20px;
    justify-content: space-between;
    &:hover {
        background-color: #FFEECC;
        cursor: pointer;
    }
`