import React from "react";

const MenuItem = ({ id, name, description, price, image, onAdd }) => {
  return (
    <div className="menu-item">
      {/* Add loading="lazy" for image optimization */}
      <img 
        src={image} 
        alt={name} 
        className="menu-item-imagem" 
        loading="lazy"
      />
      <h3>{name}</h3>
      <p>{description}</p>
      <div className="menu-item-preco">{price}</div>
      <button 
        onClick={() => onAdd()} 
        className="menu-item-link"
        aria-label={`Adicionar ${name} ao carrinho`}
      >
        Adicionar ao Carrinho
      </button>
    </div>
  );
};

export default MenuItem;