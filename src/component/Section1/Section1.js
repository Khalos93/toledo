import React from 'react';
import { Link } from 'react-router-dom';
import deliverooIcon from '../../asset/icons/deliveroo.png';
import './Section.scss';

function Section1() {
  return (
    <section className="section">
      <h3 className="section__title">LOCATED SOME BULLSHIT</h3>
      <p className="section__desc">ORDER HERE FOR DELIVERY</p>
      <Link
        className="section__link"
        to={
          'https://deliveroo.co.uk/menu/london/woolwich-common/pizzeria-toledo-47-herbert-road'
        }
      >
        <img
          className="section__logo"
          alt="deliveroo logo"
          src={deliverooIcon}
        />
      </Link>
    </section>
  );
}

export default Section1;
