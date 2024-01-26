import {
  HeaderContent,
  Navbar,
  MobileIcon,
  NavContent,
  NavDropDown,
  NavLink
} from './HeaderStyles'
import IconButton from '../../assets/images/menu.svg'
import Logo from '../../assets/images/Logo-orange.png'
import IconNotifications from '../../assets/images/notifications.png'
import PhotoProfile from '../../assets/images/perfil.png'
import { useState } from 'react'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }
  return (
    <HeaderContent>
      <Navbar>
        <MobileIcon onClick={toggleMenu}>
          <img src={IconButton} alt="Botaõ menu" />
        </MobileIcon>
        <NavContent>
          <img src={Logo} alt="Logo Oranje" className="logo" />

          <div className="perfil">
            <div className="img-perfil">
              <img src={PhotoProfile} alt="Foto de perfil" />
            </div>
            <div>
              <img src={IconNotifications} alt="Botão de notificação" />
            </div>
          </div>

          {isOpen && (
            <NavDropDown isOpen={isOpen}>
              <NavLink href="#">Meus Projetos</NavLink>
              <NavLink href="#">Descobrir</NavLink>
              <div className="divider"></div>
              <NavLink href="#">Configurações</NavLink>
            </NavDropDown>
          )}
        </NavContent>
      </Navbar>
    </HeaderContent>
  )
}

export default Header
