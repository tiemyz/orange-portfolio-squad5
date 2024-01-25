import styled from "styled-components";

export const ModalContainer = styled.div`
//Desktop
    @media (min-width: 768px) {
    margin: 143px 183px 167px 207px;
    padding: 24px 32px;
    width: 80.87%;
    height: 522px;
    position: absolute;
    }
`;

// Verificar se espaço entre divs está coerente com Figma (não consegui aproximar)
export const AdicionarProjetoDiv = styled.div`  
    display: flex;
    flex-direction: row;
`
export const FileiraUm = styled.div`
    width: 60%;
    margin: 0;
    padding: 0;
`
export const FileiraDois = styled.div`
    width: 60%;
    height: 100%;
    margin: 45px 0 0 0;
    padding: 0;
`
export const IconImg = styled.img`
    margin: 0 0 14px 0;
`

export const SubtituloAdicionarProjeto = styled.h5`
//Desktop
    @media (min-width: 768px) {
    color: var(--Neutral-110);
    font-size: 24px;
    font-weight: 400;
    margin: 0 0 16px 0;
    }
`

export const CampoInput = styled.input`
    align-self: stretch;
    margin: 0 0 16px 0;
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
`

export const DescricaoInput = styled.textarea`
    align-self: stretch;
    font-family: 'Roboto', sans-serif;
    margin: 0 0 16px 0;
    padding: 12px;
    border: 1px solid var(--Neutral-100);
    border-radius: 4px;
    width: 90%;
    height: 100px;
    &:hover {
        border: 1px solid var(--Neutral-110);
    }
    //Para code review: Focus não está funcionando como deveeria (Cor não muda)!
    &:focus {
        border: 2px solid var(--Info-100);
    }
`

export const ModalP = styled.p`
    color: var(--Neutral-110);
    font-size: 16px;
    font-weight: 400;
    margin: 16px 0 16px 0;
`

export const BotaoProjetoModal = styled.button`
    margin: 0;
    padding: 91px 50px;
    background-color: var(--Neutral-70);
    border-radius: 4px;
    width: 89.38%;
    height: 70.88%;
    border: none;
    cursor: pointer;
    align-content: center;
`