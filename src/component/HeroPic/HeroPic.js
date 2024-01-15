import React from 'react';

import './HeroPic.scss';

import HeroPictr from '../../asset/pictures/hero.jpeg';

function HeroPic() {
  return (
    <div className={`hero`}>
      <img src={HeroPictr} alt="hero-pic" className={`hero__pic`} />
    </div>
  );
}

export default HeroPic;
