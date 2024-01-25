import styled from "styled-components";

export const ButtonDefault = styled.button`
    cursor: pointer;
    padding: 8px 22px;
    border: none;
    border-radius: 4px;
    background: linear-gradient(135deg, #f83 0%, #f52 73.9%);
    box-shadow: 0px 3px 1px -2px rgba(0,0,0,0.20), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px  rgba(0,0,0,0.12);

    /*Fonts */
    color: #FCFDFF;
    font-size: 15px;
    font-style: normal;
    font-weight: 500;
    line-height: 26px;
    letter-spacing: 0.46px;
    text-transform: uppercase;

    /*Hover */
    &:hover {
        background: #CC4400;
    
    }
`;

export const ButtonGrayDefault = styled.button`
    height: 2.6rem;
    padding: .5rem 1.37rem;
    border: none;
    border-radius: 0.25rem;
    background: rgba(0, 0, 0, 0.12);
    align-items: center;

    /* Fonts */
    color: rgba(0, 0, 0, 0.38);
    font-size: 0.93rem;
    font-weight: 500;
    line-height: 1.6rem;
    letter-spacing: 0.028rem;
    text-transform: uppercase;
`