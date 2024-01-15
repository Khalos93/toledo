import React from 'react';
import './MenuPage.scss';
import ItemCard from '../ItemCard/ItemCard';
import Datas from '../../asset/jsonData/datas.json';

function MenuPage() {
  return (
    <section className="menu">
      <h2 className="menu__title">enjoy our pizza</h2>
      <div className="div-to-flex">
        {Datas.map(item => {
          return <ItemCard key={item.id} item={item} />;
        })}
      </div>
    </section>
  );
}

export default MenuPage;
