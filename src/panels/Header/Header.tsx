import { useState } from 'react';

import { HiMenu, HiOutlineUserCircle } from 'react-icons/hi';
import { RiMenuUnfoldLine } from 'react-icons/ri';
import { AiOutlineMessage } from 'react-icons/ai';

import './Header.scss';
import Modal from '../../components/Modal/Modal';
import Logo from '../../assets/Logo';

function Header() {
  const [isOpenModalMessage, setisOpenModalMessage] = useState(false);
  const [isOpenModalUser, setisOpenModalUser] = useState(false);
  const [isMenuBurguerOpen, setisMenuBurguerOpen] = useState(false);
  const [headerClass, setHeaderClass] = useState("header");
  
  const showNav = () => {
    isMenuBurguerOpen ? setHeaderClass("header active") : setHeaderClass("header");

    setisMenuBurguerOpen(!isMenuBurguerOpen)
  };

  const navList = [
    {
      name: 'Overview',
      href: '/'
    },
    {
      name: 'Partners',
      href: '/'
    },
    {
      name: 'Widgets',
      href: '/'
    },
    {
      name: 'APIs',
      href: '/'
    }
  ]

  return (
    <>
      <header className={headerClass}>
        <button className="header__menu-burguer" aria-label='menu-burguer'>
          {isMenuBurguerOpen && <HiMenu onClick={showNav} />}
          {!isMenuBurguerOpen && <RiMenuUnfoldLine onClick={showNav} />}
        </button>

        <nav className='header__nav'>
          <ul className='header__nav--list'>
            <li>
              <Logo style={{width: '64px', height: '64px'}} />
            </li>
            {navList.map((li) => (
              <li key={li.name + '0'}>
                <a href={li.href}>{ li.name.toUpperCase() }</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className='header__profile'>
          <button aria-label='modal-message' onClick={() => setisOpenModalMessage(true)}><AiOutlineMessage /></button>
          <button aria-label='modal-user' onClick={() => setisOpenModalUser(true)}><HiOutlineUserCircle /></button>
        </div>
      </header>

      {isOpenModalMessage &&
        <Modal isCenterModal={true} setIsOpen={setisOpenModalMessage}>
          <p>Você não possui mensagens.</p>
        </Modal>
      }
      {isOpenModalUser &&
        <Modal setIsOpen={setisOpenModalUser}>
          <form className="form">
            <label htmlFor="login">Login:</label>
            <input type="text" id="login" className="form--input" />

            <label htmlFor="senha">Senha:</label>
            <input type="password" id="senha" className="form--input" />

            <button>Entrar</button>
          </form>
        </Modal>}
    </>
  );
}

export default Header;
