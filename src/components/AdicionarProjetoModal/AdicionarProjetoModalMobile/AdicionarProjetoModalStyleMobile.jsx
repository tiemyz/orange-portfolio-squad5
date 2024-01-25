import styled from "styled-components";

export const ModalContainer = styled.div`
    margin: 148px 24px 55px 24px;
    position: fixed;
    width: 312px;
    height: 986px;
    display: flex;
    justify-content: center;
    position: absolute;
`;

export const SubtituloAdicionarProjeto = styled.h5`
    color: var(--Neutral-110);
    font-size: 24px;
    font-weight: 400;
    margin: 0 0 20px 0;
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
    height: 8.93%;
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
    margin: 0 0 16px 0;
`

export const BotaoProjetoModal = styled.button`
    margin: 17px 0;
    padding: 91px 21px;
    background-color: var(--Neutral-70);
    border-radius: 4px;
    width: 100%;
    height: 30.84%;
    border: none;
    cursor: pointer;
    align-content: center;
`