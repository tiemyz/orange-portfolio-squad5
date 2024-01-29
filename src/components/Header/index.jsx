import { useState } from 'react'
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

import MenuOpen from '../../assets/images/menu-open.svg'

const Header = () => {
  const [isOpen, setOpen] = useState(false)

  const handleMenuOpen = () => {
    setOpen(true)
  }

  const handleMenuClose = () => {
    setOpen(false)
  }
  return (
    <HeaderContent>
      <NavContainer>
        <Menu>
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

          <Logo src="src/assets/images/Logo-orange.png"></Logo>

          <NavbarList className={isOpen ? 'show' : ''}>
            <List>
              <Link href="#">Meus Projetos</Link>
            </List>
            <List>
              <Link href="#">Descobrir</Link>
            </List>
            <Divider className="divider"></Divider>
            <List className="config">
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
