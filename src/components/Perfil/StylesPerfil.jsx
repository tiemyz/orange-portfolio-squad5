import styled from 'styled-components'

export const ProfileContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 16px;

  /* Medias */
  @media (min-width: 768px) {
    flex-direction: row;
    gap: 42px;
  }
`

export const ImageProfile = styled.div`
  width: 122px;
  height: 122px;
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

  p {
    color: #0b0c0d;
    font-size: 16px;
  }

  @media (min-width: 768px) {
    gap: 24px;
  }
`
