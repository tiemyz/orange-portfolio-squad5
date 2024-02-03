import React, { useState, useEffect, useRef, useContext } from 'react';
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
import NotificationsImg from '../../assets/images/notifications.png';
import { ProfileImageContext } from '../contex/ProfileImageContext';  // Importe o contexto

function Header() {
  const [isOpen, setOpen] = useState(false);
  const menuRef = useRef(null);
  const { profileImage } = useContext(ProfileImageContext);  // Consuma o contexto

  // Fecha o menu
  const handleMenuOpen = () => {
    setOpen(true);
  }

  // Abre o menu
  const handleMenuClose = () => {
    setOpen(false);
  }

  // Função para fechar o menu quando clicar em um link
  const handleLinkClick = () => {
    setOpen(false);
  }

  // Fecha o menu quando clicar fora
  const handleOutsideMenu = clickEvent => {
    if (menuRef.current && !menuRef.current.contains(clickEvent.target)) {
      setOpen(false);
    }
  }

  useEffect(() => {
    document.addEventListener('click', handleOutsideMenu);

    return () => {
      document.removeEventListener('click', handleOutsideMenu);
    }
  }, []);

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
              <Link href="#" onClick={handleLinkClick}>
                Meus Projetos
              </Link>
            </List>
            <List>
              <Link href="#" onClick={handleLinkClick}>
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
            className="img-perfil"
            src={profileImage || 'https://via.placeholder.com/150'}
            alt="Foto de perfil"
          />
          <Notifications src={NotificationsImg} alt="Ícone de notificações" />
        </Perfil>
      </NavContainer>
    </HeaderContent>
  );
}

export default Header;