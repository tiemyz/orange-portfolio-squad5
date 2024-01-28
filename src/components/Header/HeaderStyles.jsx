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

export const Nav = styled.div`
  width: 100%;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

  img.logo {
    width: 83px;
    height: 31px;
  }

  .perfil {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
  }

  .img-perfil img {
    width: 40px;
    height: 40px;
    object-fit: cover;
    clip-path: circle();
  }

  .notification {
    cursor: pointer;
  }

  #menu {
    display: flex;
  }

  .menu-open,
  .menu-close {
    cursor: pointer;
    padding: 8px;
    background: transparent;
    border: none;
  }

  .hidden {
    display: none;
  }

  .buttons {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .show {
    left: 0;
  }

  @media (min-width: 768px) {
    .mobile {
      display: none;
    }
  }
`

export const Navbar = styled.nav`
  width: 147px;
  height: 155px;
  background: #fff;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: fixed;
  top: 64px;
  left: -159px;

  #navbar li {
    list-style: none;
    padding: 6px 16px;
    align-items: center;
    position: relative;
  }

  #navbar li a {
    color: rgba(0, 0, 0, 0.87);
    text-decoration: none;
    font-family: Roboto;
    font-size: 16px;
    font-weight: 400;
    letter-spacing: 0.15px;
  }

  .divider {
    width: 147px;
    height: 1px;
    margin: 8px 0;
    background: rgba(0, 0, 0, 0.12);
  }

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
