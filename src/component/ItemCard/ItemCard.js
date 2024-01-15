import React from 'react';
import './ItemCard.scss';

function ItemCard({ item }) {
  console.log(item.image);
  return (
    <div className={`card`}>
      <img
        className={`card__img`}
        src={item.image}
        alt={`${item.title} pizza`}
      />
      <h3 className={`card__title`}>{item.title}</h3>
      <p className={`card__description`}>{item.description}</p>
    </div>
  );
}

export default ItemCard;
