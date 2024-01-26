import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const LoginFormContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 540px;
    row-gap: 32px;
`
export const TitleGoogleDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 32px;
`
export const Title = styled.h3`
    font-style: normal;
    text-align: center;
    font-size: 47.5px; 
    font-weight: 400;
    line-height: 40px; 
    color: #222244;
`
export const GoogleButton = styled.button`
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    padding: 11px;
    column-gap: 24px;
    border-radius: 2px;
    background: #FFF;
    box-shadow: 0px 1px 1px 0px rgba(0, 0, 0, 0.17), 0px 0px 1px 0px rgba(0, 0, 0, 0.08);
`
export const GoogleButtonLogo = styled.img`
    width: 18px;
    height: 18px;
`
export const GoogleButtonText = styled.span`
    font-style: normal;
    line-height: normal;
    font-size: 14px;
    font-weight: 500;
    color: rgba(0, 0, 0, 0.54);
`
export const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 517px; 
    gap: 18px;
    flex-shrink: 0;
`
export const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 517px;
    row-gap: 17px;
    flex-shrink: 0;
`
export const FormTitle = styled.h5`
    align-self: stretch;
    font-style: normal;
    font-size: 24px;
    font-weight: 400;
    line-height: 24px; 
    color: #515255;
`
export const InputContainer = styled.div`
    position: relative;
    width: 517px; 
`
export const InputLabel = styled.label`
    /* Label */
    position: absolute;
    pointer-events: none;
    top: -7px;
    left: 16px;
    padding: 0 5px;
    transition: 0.2s ease-out;
    background: #fff;

    /* Fonte */
    font-style: normal;
    font-size: 12px;
    font-weight: 400;
    line-height: 16px;
    letter-spacing: 0.4px;
    color: #515255;
`
export const InputField = styled.input`
    /* Input */
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    align-self: stretch;
    width: 95%; 
    padding: 12px;
    border-radius: 4px;
    transition: border-color 0.3s ease;
    border: 1px solid #ddd;
    background: #fff;

    /* Fonte */
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0.15px;
    font-size: 16px;
    color: #303133;

    &:focus,
    &:active {
        outline: none;
        border-color: #2348B1;
    }

    &:hover {
        border-color: #000000;
    }
`
export const VisibilityButton = styled.button`
    transform: translateY(-50%);
    position: absolute;
    background: transparent;
    border: none;
    cursor: pointer;
    top: 50%;
    right: 12px;
`
export const EyesIcon = styled.img`
    width: 24px;
    height: auto;
`
export const LinkCadastro = styled(Link)`
    text-decoration: none;
    font-style: normal;
    font-size: 16px;
    font-weight: 400;
    line-height: 16px; 
    letter-spacing: 0.15px;
    color: #818388;
`