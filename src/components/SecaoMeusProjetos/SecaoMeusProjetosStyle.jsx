import styled from "styled-components";

//Estilo da Seção Projetos - Mobile
export const SecaoProjetos = styled.section`
    margin: 40px 0 27px 0;
    width: 312px;
    height: 441px;
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
    color: var(--Neutral-130);
    font-size: 20px;
    font-weight: 500;
    opacity: 0.6;
`

//Estilo do campo de busca - Mobile
export const CampoBuscarTags = styled.input`
    align-self: stretch;
    margin: 0 24px 24px 24px;
    padding: 0 12px;
    border: 1px solid var(--Neutral-100);
    border-radius: 4px;
    width: 90%;
    height: 52px;
    &:hover {
        border: 1px solid var(--Neutral-110);
    }
    //Para code review: Focus não está funcionando como deveeria (Cor não muda)!
    &:focus {
        border: 2px solid var(--Info-100);
    }

//Desktop
    @media (min-width: 768px) {
        width: 513px;
    }
`;

//Estilo botão projeto - Mobile
export const BotaoProjeto = styled.button`
    margin: 0 24px;
    padding: 68px 21px;
    background-color: var(--Neutral-70);
    border-radius: 4px;
    width: 100%;
    height: 70%;
    border: none;
    cursor: pointer;
    align-content: center;

//Desktop
    @media (min-width: 768px) {
    width: 53%;
    height: 70%;
    }
`;

//Estilo do p 1 do botão
export const StyledBodyText1 = styled.p`
    color: var(--Neutral-120);
    opacity: 0.6;
    font-size: 16px;
    font-weight: 400;
    text-align: left;
    margin: 16px auto;
`;

//Estilo do p 2 do botão
export const StyledBodyText2 = styled.p`
    color: var(--Neutral-120);
    opacity: 0.6;
    font-size: 14px;
    font-weight: 400;
    text-align: left;
    margin: 0;
`;
