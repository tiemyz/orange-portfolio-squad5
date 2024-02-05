import styled from 'styled-components'

export const ModalBackground = styled.div`
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  padding-top: 35px;
  top: 0px;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;

  @media screen and (min-width: 1024px) {
    height: 100vh;
    width: 100vw;
    padding-top: 300px;
    align-items: normal;
  }
`

export const ModalContent = styled.div`
  background-color: pink;
  display: inline-flex;
  flex-direction: column;
  row-gap: 24px;
  width: 312px;
  height: 242px;
  margin-top: 35px;
  background-color: #fcfdff;
  align-items: center;
  justify-content: center;

  @media (min-width: 1024px) {
    width: 351px;
  }
`

export const ModalH5 = styled.h5`
  color: #515255;
  text-align: center;
  font-style: normal;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
`

export const ModalContent2 = styled.div`
  background-color: pink;
  display: flex;
  flex-direction: column;
  row-gap: 32px;
  width: 312px;
  height: 242px;
  background-color: #fcfdff;
  align-items: start;
  padding: 40px 42px;

  @media (min-width: 1024px) {
    width: 351px;
  }
`
