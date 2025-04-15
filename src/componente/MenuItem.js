import React from 'react';

function MenuItem({ item }) {
  return (
    <div className="menu-item">
      <img
        src={item.imageUrl}
        alt={item.name}
        className="menu-item-imagem"
      />
      <h3>{item.name}</h3>
      <p>{item.description}</p>
      <span className="menu-item-preco">{item.price}</span>
    </div>
  );
}

export default MenuItem;
