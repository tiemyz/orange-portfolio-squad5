import styled from 'styled-components'

export const ProfileContent = styled.div`
  padding-top: 128px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 16px;
  transition: 0.3s;

  /* Medias */
  @media screen and (min-width: 768px) {
    padding-top: 176px;
    flex-direction: row;
    gap: 42px;
  }

  @media screen and (min-width: 1024px) {
    padding-top: 185px;
  }
`

export const ImageProfile = styled.img`
  width: 122px;
  height: 122px;
  clip-path: circle();
`

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  @media screen and (min-width: 768px) {
    gap: 24px;
  }
`

export const Name = styled.h5`
  color: #303133;
  font-size: 24px;
  font-weight: 400;
  line-height: 24px;
`

export const Local = styled.p`
  color: rgba(11, 12, 13, 0.5);
  font-size: 16px;
`
