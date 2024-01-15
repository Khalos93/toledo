import React from 'react';
import './MobileNav.scss';
import { Link } from 'react-router-dom';

function MobileNav() {
  return (
    <nav className={`mobile__nav`}>
      <Link>Home</Link>
      <Link>Story</Link>
      <Link>Menu</Link>
      <div>
        <Link>Dev</Link>
        <Link>Ig</Link>
        <Link>Tik</Link>
        <Link>email</Link>
      </div>
    </nav>
  );
}

export default MobileNav;
