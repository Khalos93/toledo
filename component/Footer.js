import React from 'react';

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
          <p className="footer--card__details"></p>
          <p className="footer--card__details"></p>
        </div>
        <div className="footer--card">
          <h4 className="footer--card__title">CONTACT</h4>
          <p className="footer--card__details"></p>
          <p className="footer--card__details"></p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
