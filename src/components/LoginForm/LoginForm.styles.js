import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const LoginContainer = styled.div`
    //background-color: yellow;
    width: 527px;
    display: flex;
    flex-direction: column;
    row-gap: 32px;
`
/*------------------------------------------------ */
export const ElementDivs = styled.div`
    width: 527px;
    //background-color: green;
    display: flex;
    align-items: center;
    justify-content: center;
`
/*------------------------------------------------ */

export const LoginTitle = styled.h5`
    color: #222244;
    text-align: center;
    font-size: 48px;
    font-style: normal;
    font-weight: 400;
    line-height: 40px;
`
/*------------------------------------------------ */

export const GoogleButton = styled.button`
    cursor: pointer;
    display: flex;
    padding: 11px;
    align-items: center;
    justify-content: center;
    column-gap: 24px;
    border: none;
    border-radius: 2px;
    background: #FFF;
    box-shadow: 0px 1px 1px 0px rgba(0, 0, 0, 0.17), 0px 0px 1px 0px rgba(0, 0, 0, 0.08);
`;

export const GoogleButtonLogo = styled.img`
    width: 18px;
    height: 18px;
`;

export const GoogleButtonText = styled.span`
    color: rgba(0, 0, 0, 0.54);
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
`;
/*------------------------------------------------ */

export const FormContainer = styled.div`
    //background-color: pink;
    display: flex;
    width: 517px;
    height: 234px;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 16px;
    flex-shrink: 0;
`;

export const FormTitleContainer = styled.div`
    //background-color: green;

`
export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const FormTitle = styled.h5`
    color: #515255;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px; /* 100% */
`

export const Input = styled.input`
  margin-bottom: 10px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const Button = styled.button`
  background-color: #4285f4;
  color: #fff;
  padding: 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

export const LinkCadastro = styled(Link)`
  margin-top: 10px;
  text-decoration: none;
  color: #4285f4;
`;