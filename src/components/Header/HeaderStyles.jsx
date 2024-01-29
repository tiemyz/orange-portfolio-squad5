import styled from 'styled-components'

export const HeaderContent = styled.header`
  width: 100vw;
  height: 4rem;
  padding: 12px 24px;
  background: #113;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
  display: flex;
  align-items: center;
  box-sizing: border-box;
`

export const NavContainer = styled.nav`
  width: 100%;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .notification {
    cursor: pointer;
  }

  .show {
    left: 0;
    transition: 0.3s;
  }

  @media (min-width: 768px) {
    .button-mobile {
      display: none;
    }
  }
`

export const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 3px;
`

export const ButtonsMobile = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  .hidden {
    display: none;
  }
`
export const Button = styled.button`
  cursor: pointer;
  padding: 8px;
  background: transparent;
  border: none;
`

export const Logo = styled.img`
  width: 83px;
  height: 31px;
`
export const NavbarList = styled.ul`
  width: 147px;
  height: 155px;
  padding: 8px 0 0;
  position: fixed;
  background: #fff;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  top: 64px;
  left: -147px;

  @media (min-width: 768px) {
    width: auto;
    height: 41px;
    margin-left: 100px;
    background: none;
    top: 0;
    right: 0;
    position: relative;
    align-items: center;
    justify-content: center;

    #navbar {
      display: flex;
    }

    #navbar li a {
      color: #fcfdff;
      font-family: Roboto;
      font-size: 20px;
      font-weight: 500;
      line-height: 20px; /* 100% */
      letter-spacing: 0.15px;
    }

    #navbar .config {
      display: none;
    }

    .divider {
      display: none;
    }
  }
`

export const List = styled.li`
  list-style: none;
  padding: 6px 16px;
  position: relative;
  align-items: center;
`

export const Link = styled.a`
  color: rgba(0, 0, 0, 0.87);
  text-decoration: none;
  font-family: Roboto;
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 0.15px;
`

export const Divider = styled.div`
  width: 147px;
  height: 1px;
  margin: 8px 0;
  background: rgba(0, 0, 0, 0.12);
`

export const Perfil = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
`
export const ImagemPerfil = styled.img`
  display: flex;
  width: 40px;
  height: 40px;
  object-fit: cover;
  clip-path: circle();
`

export const Notifications = styled.img`
  cursor: pointer;
`
