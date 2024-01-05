import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../asset/icons/logo.jpeg';
import menuIcon from '../asset/icons/menu-icon.png';
import './Header.scss';

function Header() {
  return (
    <header className="header">
      <div className="header--wrapper">
        <Link to={'/'}>
          <img className="logo" src={logo} alt="pizzeria toledo logo" />
        </Link>
        <nav className="header--nav">
          <Link className="header--nav__link">Home</Link>
          <Link className="header--nav__link">Story</Link>
          <Link className="header--nav__link">Menu</Link>
          <Link className="header--nav__link">Order with us</Link>
          <Link className="header--nav__link">Ig</Link>
          <Link className="header--nav__link">tik&tok</Link>
        </nav>
        <div className="header--menu">
          <img className="menu-icon" src={menuIcon} alt="menu-icon" />
        </div>
      </div>
    </header>
  );
}

export default Header;
