import styled from "styled-components";

export const ModalBackground = styled.div`
    display: inline-flex;
    position: absolute;
    background-color: rgba(0, 0, 0, 0.5);
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
`;

export const ModalContent = styled.div`
    background-color: pink;
    display: inline-flex;
    flex-direction: column;
    row-gap: 24px;
    width: 312px;
    height: 242px;
    background-color: #FCFDFF;
    align-items: center;
    justify-content: center;

    @media (width >= 1024px ) {
        width: 351px;
    }
`;

export const ModalH5 = styled.h5`
    color: #515255;
    text-align: center;
    font-style: normal;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
`;

export const ModalContent2 = styled.div`
    background-color: pink;
    display: flex;
    flex-direction: column;
    row-gap: 32px;
    width: 312px;
    height: 242px;
    background-color: #FCFDFF;
    align-items: start;
    padding: 40px 42px;

    @media (width >= 1024px ) {
        width: 351px;
    }
`;