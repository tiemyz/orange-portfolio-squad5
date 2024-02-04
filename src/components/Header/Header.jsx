import { useState, useEffect, useRef } from 'react';
import {
  HeaderContent,
  NavContainer,
  Menu,
  ButtonsMobile,
  Button,
  Logo,
  NavbarList,
  List,
  Link,
  Divider,
  Perfil,
  ImagemPerfil,
  Notifications
} from './Header.styles';
import MenuOpen from '../../assets/images/menu-open.svg';
import LogoImg from '../../assets/images/Logo-orange.png';
import ProfileImg from '../../assets/images/profile.png';
import NotificationsImg from '../../assets/images/notifications.png';
import LogoutButton from '../LogoutButton/LogoutButton';

function Header () {
  const [isOpen, setOpen] = useState(false)
  const menuRef = useRef(null)

  const handleMenuOpen = () => {
    setOpen(true)
  }

  const handleMenuClose = () => {
    setOpen(false)
  }

  const handleLinkClick = () => {
    setOpen(false)
  }

  const handleOutsideMenu = clickEvent => {
    if (menuRef.current && !menuRef.current.contains(clickEvent.target)) {
      setOpen(false)
    }
  }

  useEffect(() => {
    document.addEventListener('click', handleOutsideMenu)

    return () => {
      document.addEventListener('click', handleOutsideMenu)
    }
  }, [])

  return (
    <HeaderContent>
      <NavContainer>
        <Menu ref={menuRef}>
          <ButtonsMobile className="button-mobile">
            <Button
              className={`menu-open ${isOpen ? 'hidden' : ''}`}
              onClick={handleMenuOpen}
            >
              <img src={MenuOpen} alt="Abrir menu" />
            </Button>

            <Button
              className={`menu-close ${isOpen ? '' : 'hidden'}`}
              onClick={handleMenuClose}
            >
              <img src={MenuOpen} alt="Abrir menu" />
            </Button>
          </ButtonsMobile>

          <Logo src={LogoImg}></Logo>

          <NavbarList className={isOpen ? 'show' : ''}>
            <List>
              <Link href="/home" onClick={handleLinkClick}>
                Meus Projetos
              </Link>
            </List>
            <List>
              <Link href="/descobrir" onClick={handleLinkClick}>
                Descobrir
              </Link>
            </List>
            <Divider className="divider"></Divider>
            <List className="config" onClick={handleLinkClick}>
              <Link href="#">Configurações</Link>
            </List>
          </NavbarList>
        </Menu>

        <Perfil className="perfil">
          <ImagemPerfil
            ClassName="img-perfil"
            src={ProfileImg}
            alt="Foto de perfil"
          ></ImagemPerfil>
          <Notifications src={NotificationsImg}></Notifications>
          <LogoutButton/>
        </Perfil>
      </NavContainer>
    </HeaderContent>
  )
}

export default Header;