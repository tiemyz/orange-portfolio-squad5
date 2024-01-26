import styled from "styled-components";



export const ModalPreVisualizacaoBackground = styled.div`
    display: inline-flex;
    position: absolute;
    background-color: rgba(0, 0, 0, 0.5);
    width: 100%;
    height: 100%;
    
`;

export const ModalPreVisualizacaoContent = styled.div`
    display: inline-flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    margin-top: 15%;
    border-radius: var(--3, 24px) var(--3, 24px) var(--none, 0px) var(--none, 0px);
    background: #FFF;
    align-items: center;
    align-content: center;

`;

export const ModalPreVisualizacaoH5 = styled.h5`
    color: var(--Neutral-Colors-Neutral-120, #303133);
    text-align: center;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px; /* 100% */

`;