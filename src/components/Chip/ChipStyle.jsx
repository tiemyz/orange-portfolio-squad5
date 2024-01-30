import styled from "styled-components";

export const ChipContent = styled.div`
    display: flex;
    padding: 4px;
    align-items: center;
    border-radius: 100px;
    background-color: rgba(0, 0, 0, 0.08);

`; 

export const ChipText = styled.sub`
    color: var(--Neutral-Colors-Neutral-130, #0B0C0D);
    padding: 6px;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 16px; /* 100% */
    letter-spacing: 0.15px;
`;

/*Atualmente é necessario adicionar o component Chip dentro desta div estilizada */
export const ChipDiv = styled.div`
    display: inline-flex;
    align-items: center;
    column-gap: 8px;

`; 
