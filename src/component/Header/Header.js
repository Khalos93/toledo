import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../asset/icons/logo.jpeg';
import menuIcon from '../../asset/icons/menu-icon.png';
import './Header.scss';
import tiktokIcon from '../../asset/icons/tiktok.png';
import istangramIcon from '../../asset/icons/instagram.png';
import deliverooBw from '../../asset/icons/deliveroob&w.png';

function Header() {
  return (
    <header className="header">
      <div className="header--wrapper">
        <Link to={'/'}>
          <img className="logo" src={logo} alt="pizzeria toledo logo" />
        </Link>
        <nav className="header--nav">
          <Link to={'/'} className="header--nav__link">
            Home
          </Link>
          <Link className="header--nav__link">Story</Link>
          <Link className="header--nav__link">Menu</Link>
          <Link
            to={
              'https://deliveroo.co.uk/menu/london/woolwich-common/pizzeria-toledo-47-herbert-road'
            }
            className="header--nav__link"
          >
            <img
              className="social--media__logo"
              src={deliverooBw}
              alt="deliveroo logo"
            />
          </Link>
          <Link
            to={
              'https://www.instagram.com/toledo_pizzeria_napoletana?igsh=ZTlnZWNtZTFjcHRk'
            }
            className="header--nav__link"
          >
            <img
              className="social--media__logo"
              src={istangramIcon}
              alt="istangram icon"
            />
          </Link>
          <Link
            to={
              'https://www.tiktok.com/login?redirect_url=https%3A%2F%2Fwww.tiktok.com%2F%40pizzeria_toledo%3F_t%3D8dWpO34jQeA%26_r%3D1&lang=en&enter_method=mandatory'
            }
            className="header--nav__link"
          >
            <img
              className="social--media__logo"
              src={tiktokIcon}
              alt="tik tok icon"
            />
          </Link>
        </nav>
        <div className="header--menu">
          <img className="menu-icon" src={menuIcon} alt="menu-icon" />
        </div>
      </div>
    </header>
  );
}

export default Header;
