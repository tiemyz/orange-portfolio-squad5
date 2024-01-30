import styled from 'styled-components';

export const Alert = styled.div`
    display: flex;
    width: 320px;
    height: 52px;
    padding: 6px 16px;
    justify-content: flex-start;
    align-items: center;
    border-radius: 4px;
    background: #2E7D32;
    gap: 12px;
    margin-bottom: 142px; 
    
    @media screen and (max-width: 768px) {
        width: 280px;
        margin-bottom: 56px;
    }
`
export const CheckImg = styled.img`
    width: 22px;
    height: 22px;
`
export const AlertText = styled.span`
    color: #FFFFFF;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 150%; 
    letter-spacing: 0.15px;
`