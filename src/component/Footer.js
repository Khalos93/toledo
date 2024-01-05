import React from 'react';
import './Footer.scss';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer--wrapper">
        <div className="footer--card">
          <h4 className="footer--card__title">LOCATION</h4>
          <p className="footer--card__details">
            47 Herbert Rd, London SE18 3SZ, United Kingdom
          </p>
        </div>
        <div className="footer--card">
          <h4 className="footer--card__title">HOURS</h4>
          <p className="footer--card__details">Wednesday - Thursday</p>
          <p className="footer--card__details">17.00 - 21.30</p>
          <p className="footer--card__details">Friday</p>
          <p className="footer--card__details">17.00 - 22.00</p>
          <p className="footer--card__details">Saturday</p>
          <p className="footer--card__details">13.00 - 21.30</p>
          <p className="footer--card__details">Sunday</p>
          <p className="footer--card__details">13.00 - 21.00</p>
        </div>
        <div className="footer--card">
          <h4 className="footer--card__title">CONTACT</h4>
          <p className="footer--card__details">00447424378493</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
