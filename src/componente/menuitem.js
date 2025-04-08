import React from "react";
import "./MenuItem.css"; // Importa o CSS

const MenuItem = ({ name, description, price, imageUrl }) => {
  return (
    <div className="menu-item">
      <img src={imageUrl} alt={name} />
      <h2>{name}</h2>
      <p>{description}</p>
      <p className="price">{price}</p>
    </div>
  );
};

export default MenuItem;

