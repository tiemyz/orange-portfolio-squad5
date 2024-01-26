import styled from 'styled-components'

export const HeaderContent = styled.header`
  width: 100vw;
  height: 4rem;
  padding: 0.75rem 4rem;
  color: #fff;
  background: #113;
  border-radius: 4px;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Navbar = styled.nav`
  display: flex;
  align-items: center;
  gap: 1rem;
  flex: 1 0 0;
`
export const MobileIcon = styled.button`
  cursor: pointer;
  background: transparent;
  border: none;
  padding: 8px;
`
export const NavContent = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 99px;

  img .logo {
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
`
export const NavDropDown = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  background: #fff;
  padding: 10px;
  border-radius: 4px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 1;
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
`

export const NavLink = styled.a`
  display: block;
  color: white;
  text-decoration: none;
  padding: 8px;
  &:hover {
    background: #777;
  }
`
