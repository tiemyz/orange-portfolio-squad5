import styled from "styled-components";

//Estilo da Seção Projetos
export const SecaoProjetos = styled.section`
    margin: 40px 0 16px 0;
    display: flex;
    flex-direction: column;
`;

//Estilo do subtítulo "Meus Projetos"
export const SubtituloProjetos = styled.h6 `
    margin: 0 0 16px 24px;
    color: var(--Neutral-130);
    font-size: 20px;
    font-weight: 500;
    opacity: 0.6;
`

//Estilo do campo de busca
export const CampoBuscarTags = styled.input`
    align-self: stretch;
    margin: 0 24px 24px 24px;
    padding: 10px 12px;
    border: 1px solid var(--Neutral-110);
    width: 79vw;
    &:hover {
        border: 1px solid var(--Neutral-110);
    }
    //Para code review: Focus não está funcionando como deveeria (Cor não muda)!
    &:focus {
        border: 2px solid var(--Info-100);
    }
`;

//Estilo botão projeto
export const BotaoProjeto = styled.button`
    margin: 0 24px;
    padding: 68px 21px;
    background-color: var(--Neutral-70);
    border-radius: 4px;
    min-width: 312px;
    min-height: 258px;
    border: none;
    cursor: pointer;
    align-content: center;
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
