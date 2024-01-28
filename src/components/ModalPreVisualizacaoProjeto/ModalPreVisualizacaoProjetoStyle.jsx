import styled from "styled-components";


export const ModalPreVisualizacaoBackground = styled.div`
    display: inline-flex;
    position: absolute;
    background-color: rgba(0, 0, 0, 0.5);
    width: 100%;
    height: 100%;
    justify-content: center;
    
`;

export const ModalPreVisualizacaoContent = styled.div`
    width: 100%;
        height: 100%;
        margin-top: 15%;
        border-radius: var(--3, 24px) var(--3, 24px) var(--none, 0px) var(--none, 0px);
    display: inline-flex;
    flex-direction: column;
    /* row-gap: 24px; */
    background: #FFF;
    align-items: center;
    justify-content: center;

`;

export const ModalPreVisualizacaoTextContainer = styled.div`
    width: 308px;
    
    
`;

export const ModalPreVisualizacaoH5 = styled.h5`
    color: var(--Neutral-Colors-Neutral-120, #303133);
    text-align: center;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px; /* 100% */

`;

export const ModalPreVisualizacaoInfoUsuario = styled.div`
    display: flex;
    width: 104px;
    height: 50px;
    padding: var(--none, 0px);
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: var(--1, 8px);

`;

export const ModalPreVisualizacaoNomeUsuario = styled.sub`
    color: var(--Neutral-Colors-Neutral-120, #303133);
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;

`;

export const ModalPreVisualizacaoTime = styled.time`
    color: var(--Neutral-Colors-Neutral-110, #515255);
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;

`;

export const ModalPreVisualizacaoDiv = styled.div`
    display: inline-flex;
    width: 100%;
    padding: var(--none, 10px);
    align-items: center;
    justify-content: space-between;
    gap: var(--1, 8px);

`;

export const ModalPreVisualizacaoP = styled.p`
    color: var(--Neutral-Colors-Neutral-120, #303133);
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 16px; /* 100% */
    letter-spacing: 0.5px;

`;

export const ModalPreVisualizacaoH6 = styled.h6`
    color: #0B0C0D;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 16px;
    letter-spacing: 0.15px;

`;

export const ModalPreVisualizacaoLinks = styled.a`
    color: var(--Support-Colors-Info-info-80, #608AE1);
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 14px;
    letter-spacing: 0.25px;

`;