import styled from 'styled-components'

export const ButtonDefault = styled.button`
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transform: translate3d(0, 0, 0);
  padding: 8px 22px;
  border: none;
  border-radius: 4px;
  background: linear-gradient(135deg, #f83 0%, #f52 73.9%);
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);

  /*Fonts */
  color: #fcfdff;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: 26px;
  letter-spacing: 0.46px;
  text-transform: uppercase;

  /*Hover */
  &:hover {
    background: #cc4400;
  }

  &::after {
    content: '';
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    pointer-events: none;
    background-image: radial-gradient(circle, #fdfdfd 10%, transparent 2.01%);
    background-repeat: no-repeat;
    background-position: 50%;
    transform: scale(10, 10);
    opacity: 0;
    transition: transform 0.5s, opacity 1s;
  }

  &:active::after {
    transform: scale(0, 0);
    opacity: 0.6;
    transition: 0s;
  }
`

export const ButtonGray = styled(ButtonDefault)`
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
`
