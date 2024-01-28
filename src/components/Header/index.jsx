import { HeaderContent, Nav, Navbar } from './HeaderStyles'
import MenuOpen from '../../assets/images/menu-open.svg'
import Logo from '../../assets/images/Logo-orange.png'
import IconNotifications from '../../assets/images/notifications.png'
import PhotoProfile from '../../assets/images/profile.png'
import { useState } from 'react'

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
      <Nav>
        <div id="menu">
          <div className="buttons mobile">
            <button
              className={`menu-open ${isOpen ? 'hidden' : ''}`}
              onClick={handleMenuOpen}
            >
              <img src={MenuOpen} alt="Abrir menu" />
            </button>
            <button
              className={`menu-close ${isOpen ? '' : 'hidden'}`}
              onClick={handleMenuClose}
            >
              <img src={MenuOpen} alt="Abrir menu" />
            </button>
          </div>

          <img src={Logo} alt="Logo Oranje" className="logo" />
        </div>
        <Navbar className={isOpen ? 'show' : ''}>
          <ul id="navbar">
            <li>
              <a href="#">Meus Projetos</a>
            </li>
            <li>
              <a href="#">Descobrir</a>
            </li>
            <div className="divider"></div>
            <li className="config">
              <a href="#">Configurações</a>
            </li>
          </ul>
        </Navbar>
        <div className="perfil">
          <div className="img-perfil">
            <img src={PhotoProfile} alt="Foto de perfil" />
          </div>
          <img
            src={IconNotifications}
            alt="Botão de notificação"
            className="notification"
          />
        </div>
      </Nav>
    </HeaderContent>
  )
}

export default Header
