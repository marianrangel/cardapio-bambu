import React from "react";

const Carrinho = ({ carrinho, excluirItem, total, formatarPreco }) => {
  return (
    <section className="carrinho">
      <h2>Seu Carrinho</h2>
      {carrinho.length === 0 ? (
        <p className="carrinho-vazio">O carrinho está vazio.</p>
      ) : (
        <div className="carrinho-content">
          <ul className="carrinho-lista">
            {carrinho.map((item) => (
              <li key={item.timestamp} className="carrinho-item">
                <span className="item-name">{item.name}</span>
                <span className="item-price">{item.displayPrice}</span>
                <button
                  onClick={() => excluirItem(item.timestamp)}
                  className="btn-excluir"
                >
                  Excluir
                </button>
              </li>
            ))}
          </ul>
          <div className="total">
            <h3>Total: {formatarPreco(total)}</h3>
            <button className="btn-finalizar">Finalizar Pedido</button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Carrinho;
