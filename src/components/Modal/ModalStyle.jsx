import styled from "styled-components";

export const ModalDiv = styled.div`
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
