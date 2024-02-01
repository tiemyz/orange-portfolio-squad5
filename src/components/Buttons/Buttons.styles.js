import styled from 'styled-components'

export const ButtonDefault = styled.button`
  cursor: pointer;
  width: 517px;
  padding: 8px 22px;
  border: none;
  border-radius: 4px;
  background: linear-gradient(135deg, #f83 0%, #f52 73.9%);
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);

  /*Fonts*/
  color: #fcfdff;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: 26px;
  letter-spacing: 0.46px;
  text-transform: uppercase;

  /*Hover*/
  &:hover {
    background: #cc4400;
  }

  @media screen and (max-width: 768px) {
    width: 312px;
  }
`

export const ButtonOrangeSmall = styled(ButtonDefault)`
  width: 100px;
`

export const ButtonOrangeMedium = styled(ButtonDefault)`
  width: 254px;
`

export const ButtonOrangeLarge = styled(ButtonDefault)`
  width: 312px;
`

export const ButtonGray = styled(ButtonDefault)`
  width: 200px;
  border-radius: 0.25rem;
  background: rgba(0, 0, 0, 0.12);
  align-items: center;
  transition: background-color 0.3s ease;

  /* Fonts */
  color: rgba(0, 0, 0, 0.38);

  /* Hover */
  &:hover {
    color: #fff;
    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
      0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
  }

  &:active {
    background: linear-gradient(135deg, #f83 0%, #f52 73.9%);
  }
`
