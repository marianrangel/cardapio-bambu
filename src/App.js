import React from 'react';
import './styles.css';
import menuItems from './data';
import MenuItem from './componente/MenuItem';

function App() {
  return (
    <div className="cardapio-container">
      <h1>Nosso Cardápio</h1>
      <div className="lista-itens-cardapio">
        {menuItems.map((item) => (
          <MenuItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

export default App;
