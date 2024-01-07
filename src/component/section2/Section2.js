import React from 'react';
import './Section2.scss';
import pic1 from '../../asset/pictures/pic1.png';
import pic2 from '../../asset/pictures/pic2.png';
import pic3 from '../../asset/pictures/pic3.png';
import pic4 from '../../asset/pictures/pic4.png';

function Section2() {
  return (
    <section className="section2">
      <h3 className="section2__title">DISCOVER HOW PIZZA IS OUR WORKHORSE</h3>
      <div className="section2__wrapper">
        <img className="section2__pic" src={pic1} alt="pic1" />
        <img className="section2__pic" src={pic2} alt="pic1" />
        <img className="section2__pic" src={pic3} alt="pic1" />
        <img className="section2__pic" src={pic4} alt="pic1" />
      </div>
    </section>
  );
}

export default Section2;
