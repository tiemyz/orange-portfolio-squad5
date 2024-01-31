import styled from 'styled-components';

export const PageContainer = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: space-between;
`
export const DivImg = styled.div`
    width: 30%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden; 

    @media screen and (max-width: 1400px) {
        width: 40%;
    }

    @media screen and (max-width: 1120px) {
        display: none;
    }
`
export const DivForm = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 70%;

    @media screen and (max-width: 1400px) {
        width: 60%;
    }

    @media screen and (max-width: 1120px) {
        width: 100%;
    }  
`
export const SideImg = styled.img`
    width: 100%;
    height: 100%;
    object-fit: fit;
`