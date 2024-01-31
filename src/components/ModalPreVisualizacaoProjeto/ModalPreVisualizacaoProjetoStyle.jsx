import styled from "styled-components";


/*Background do modal */

export const BackgroundPreVisualizacao = styled.div`
    display: inline-flex;
    position: relative;
    background-color: rgba(0, 0, 0, 0.5);
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    
`;

export const ContentPreVisualizacao = styled.div`
    width: 1042px;
    height: auto;
    margin: 134px 119px 28px 119px;
    padding: 24px;
    display: inline-flex;
    flex-direction: column;
    background: #FFF;
    align-items: center;
    

    @media (max-width: 768px){
        width: 100%;
        height: 100%;
        margin: 204px 0px 0px 0px;
        border-radius: var(--3, 24px) var(--3, 24px) var(--none, 0px) var(--none, 0px);
        justify-content: start;
    }

    @media screen and (min-width: 768px) and (max-width: 1023px) {
        width: 80%;
    }

`;


export const CloseButtonDiv = styled.div`
    display: inline-flex;
    width: 100%;
    justify-content: right;
`;


export const CloseButton = styled.button`
    width: 14px;
    background-color: #FFF;
    border: none;

    &:hover {
        background-color: grey;
    }

`;

/*Imagem Projeto */
export const DivImagemPreVisualizacao = styled.div`
    width: 100%;
    /* width: 838px; */
    height: 585px;

    @media screen and (max-width: 768px){
        width: 312px;
        height: 258px;
    }

`;



export const ImagemPreVisualizacao = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

/* Titulo */
export const H5PreVisualizacao = styled.h5`
    color: var(--Neutral-Colors-Neutral-120, #303133);
    padding-top: 16px;
    padding-bottom: 32px;
    text-align: center;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
 

`;

/* Informaçoes do usuario */
export const InfoContainerPreVisualizacao = styled.div`
    display: inline-flex;
    width: 312px;
    align-items: center;
    align-content: center;
    justify-content: space-between;
    gap: var(--1, 8px);

    @media screen and (min-width: 770px) and (max-width: 1023px) {
        width: 100%;
    }

    @media screen and (min-width: 769px){
        width: 100%;
        position: relative;
        top: -670px;
        
    }

`;

export const UsuarioContainer = styled.div`
    display: inline-flex;
    padding-top: 10px;
    padding-bottom: 26px;
    gap: var(--1, 8px);
   

`;

export const InfoUsuario = styled.div`
    display: flex;
    width: auto;
    height: 50px;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    gap: var(--1, 8px);
   

`;

export const NomeUsuario = styled.sub`
    color: var(--Neutral-Colors-Neutral-120, #303133);
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;

`;

export const TimePreVisualizacao = styled.time`
    color: var(--Neutral-Colors-Neutral-110, #515255);
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;

`;



/*Paragrafo sobre o projeto */
export const TextContainer = styled.div`
    
    width: 838px;

    @media screen and (max-width: 767px) {
        width: 308px;
    }

    @media screen and (min-width: 768px) {
        width: 100%;
    }


    @media screen and (min-width: 1024px) {
        margin-top: -50px;
        margin-bottom: 83px;
    }
    
`;


export const ParagrafoPreVisualizacao = styled.p`
    color: var(--Neutral-Colors-Neutral-120, #303133);
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 16px; /* 100% */
    letter-spacing: 0.5px;

`;

export const H6PreVisualizacao = styled.h6`
    color: #0B0C0D;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 16px;
    letter-spacing: 0.15px;


`;

export const LinksPreVisualizacao = styled.a`
    color: var(--Support-Colors-Info-info-80, #608AE1);
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 14px;
    letter-spacing: 0.25px;

`;