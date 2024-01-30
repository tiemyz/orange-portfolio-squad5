import { useState, useEffect, useRef } from 'react'
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
} from './HeaderStyles'

const Header = () => {
  const [isOpen, setOpen] = useState(false)
  const menuRef = useRef(null)

  // Fecha o menu
  const handleMenuOpen = () => {
    setOpen(true)
  }

  // Abre o menu
  const handleMenuClose = () => {
    setOpen(false)
  }

  // Função para fechar o menu quando clicar em um link
  const handleLinkClick = () => {
    setOpen(false)
  }
  // Fecha o menu quando clicar em outro campo da página
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
              <img src="src/assets/images/menu-open.svg" alt="Abrir menu" />
            </Button>

            <Button
              className={`menu-close ${isOpen ? '' : 'hidden'}`}
              onClick={handleMenuClose}
            >
              <img src="src/assets/images/menu-open.svg" alt="Abrir menu" />
            </Button>
          </ButtonsMobile>

          <Logo src="src/assets/images/Logo-orange.png"></Logo>

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
            ClassName="img-perfil"
            src="src/assets/images/profile.png"
            alt="Foto de perfil"
          ></ImagemPerfil>
          <Notifications src="src/assets/images/notifications.png"></Notifications>
        </Perfil>
      </NavContainer>
    </HeaderContent>
  )
}

export default Header