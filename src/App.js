import React, { useState, useEffect } from "react"; // ✅ Incluído useEffect
import MenuItem from "./componente/MenuItem";
import "./styles.css";

// Dados do cardápio
const menuItems = [
  {
    id: 1,
    name: "Camarão Internacional",
    description: "Arroz cremoso com ervilhas, presunto, coberto com camarões e gratinado com queijo.",
    price: 98.90,
    displayPrice: "R$ 98,90",
    imageUrl: "/img/camarao-internacional.jpg",
  },
  {
    id: 2,
    name: "Rede de Pescador",
    description: "Frutos do mar variados grelhados, acompanhados de arroz de açafrão e legumes.",
    price: 129.90,
    displayPrice: "R$ 129,90",
    imageUrl: "/img/peixe-a-delicia.jpg",
  },
  {
    id: 3,
    name: "Moqueca de Camarão",
    description: "Moqueca baiana tradicional com camarões, leite de coco e azeite de dendê.",
    price: 109.90,
    displayPrice: "R$ 109,90",
    imageUrl: "/img/mosqueca.jpg",
  },
  {
    id: 4,
    name: "Cocada ao Forno com Sorvete",
    description: "Clássica cocada quente ao forno servida com sorvete de creme.",
    price: 34.90,
    displayPrice: "R$ 34,90",
    imageUrl: "/img/cocada_de_forno.jpg",
  }
];

function App() {
  const [carrinho, setCarrinho] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const novoTotal = carrinho.reduce((soma, item) => soma + item.price, 0);
    setTotal(novoTotal);
  }, [carrinho]);

  const adicionarAoCarrinho = (item) => {
    const itemComTimestamp = {
      ...item,
      timestamp: new Date().getTime()
    };
    setCarrinho((prevCarrinho) => [...prevCarrinho, itemComTimestamp]);
    alert(`${item.name} adicionado ao carrinho!`);
  };

  const excluirItem = (timestamp) => {
    setCarrinho((prevCarrinho) =>
      prevCarrinho.filter((item) => item.timestamp !== timestamp)
    );
  };

  const formatarPreco = (valor) => {
    return valor.toLocaleString('pt-BR', { 
      style: 'currency', 
      currency: 'BRL' 
    });
  };

  return (
    <main className="cardapio-container">
      <h1 className="menu-title">Nosso Cardápio</h1>

      <section className="lista-itens-cardapio">
        {menuItems.map((item) => (
          <MenuItem 
            key={item.id}
            id={item.id}
            name={item.name}
            description={item.description}
            price={item.displayPrice}
            image={item.imageUrl}
            onAdd={() => adicionarAoCarrinho(item)}
          />
        ))}
      </section>

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
    </main>
  );
}

export default App;
