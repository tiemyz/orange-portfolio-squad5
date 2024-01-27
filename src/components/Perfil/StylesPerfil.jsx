import styled from 'styled-components'

export const ProfileContent = styled.div`
  width: 312px;
  height: 236px;
  border: 1px solid red;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export const ImageProfile = styled.div`
  width: 122px;
  height: 122px;
  margin-bottom: 16px;

  /* Imagem de perfil */

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    border-radius: 50%;
  }
`
export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  /* Fonts */
  font-weight: 400;

  h5 {
    color: #303133;
    font-size: 24px;
    line-height: 24px;
  }

  span {
    color: #0b0c0d;
    font-size: 16px;
    line-height: 0.15px;
  }
`
