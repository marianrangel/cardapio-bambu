import React, { useState, useEffect, lazy, Suspense } from "react";
import "./styles.css";

// Lazy load do componente ExtraInfo
const ExtraInfo = lazy(() => import("./componente/ExtraInfo"));

// Dados do cardápio com categorias
const menuItems = [
  {
    id: 1,
    name: "Camarão Internacional",
    description: "Arroz cremoso com ervilhas, presunto, coberto com camarões e gratinado com queijo.",
    price: 98.90,
    displayPrice: "R$ 98,90",
    imageUrl: "/img/camarao-internacional.jpg",
    categoria: "pratos-principais"
  },
  {
    id: 2,
    name: "Rede de Pescador",
    description: "Frutos do mar variados grelhados, acompanhados de arroz de açafrão e legumes.",
    price: 129.90,
    displayPrice: "R$ 129,90",
    imageUrl: "/img/peixe-a-delicia.jpg",
    categoria: "pratos-principais"
  },
  {
    id: 3,
    name: "Moqueca de Camarão",
    description: "Moqueca baiana tradicional com camarões, leite de coco e azeite de dendê.",
    price: 109.90,
    displayPrice: "R$ 109,90",
    imageUrl: "/img/mosqueca.jpg",
    categoria: "pratos-principais"
  },
  {
    id: 4,
    name: "Filé à parmegiana",
    description: "Filé mignon à milanesa, molho caseiro de tomate, queijo, arroz com bacon e batata frita.",
    price: 253.00,
    displayPrice: "R$ 253,00",
    imageUrl: "/img/file.jpg",
    categoria: "pratos-principais"
  },
  {
    id: 5,
    name: "Burrata Coco Bambu",
    description: "Burrata com molho de tomate, manjericão e azeite de oliva.",
    price: 78.00,
    displayPrice: "R$ 78,00",
    imageUrl: "/img/burrata.jpg",
    categoria: "entradas"
  },
  {
    id: 6,
    name: "Croquete de Bacalhau",
    description: "Bolinho de bacalhau com batata, cebola e salsa.",
    price: 71.00,
    displayPrice: "R$ 71,00",
    imageUrl: "/img/croquete.jpg",
    categoria: "entradas"
  },
  {
    id: 7,
    name: "Suco de Abacaxi",
    description: "Jarra 500ml",
    price: 22.90,
    displayPrice: "R$ 22,90",
    imageUrl: "/img/jarra.jpg",
    categoria: "bebidas"
  },
  {
    id: 8,
    name: "Coca-Cola",
    description: "290ml",
    price: 7.90,
    displayPrice: "R$ 7,90",
    imageUrl: "/img/coca-cola.jpg",
    categoria: "bebidas"
  },
  {
    id: 9,
    name: "Gelato de Brigadeiro",
    description: "Sorvete cremoso de chocolate com pedaços de brigadeiro",
    price: 31.00,
    displayPrice: "R$ 31,00",
    imageUrl: "/img/gelato.jpg",
    categoria: "sobremesas"
  },
  {
    id: 10,
    name: "Cocada ao Forno com Sorvete",
    description: "Clássica cocada quente ao forno servida com sorvete de creme.",
    price: 34.90,
    displayPrice: "R$ 34,90",
    imageUrl: "/img/cocada_de_forno.jpg",
    categoria: "sobremesas"
  }
];

const categorias = [
  { id: "todos", nome: "Todos" },
  { id: "entradas", nome: "Entradas" },
  { id: "pratos-principais", nome: "Pratos Principais" },
  { id: "bebidas", nome: "Bebidas" },
  { id: "sobremesas", nome: "Sobremesas" }
];

function App() {
  const [carrinho, setCarrinho] = useState([]);
  const [total, setTotal] = useState(0);
  const [categoriaAtiva, setCategoriaAtiva] = useState("todos");
  const [itensFiltrados, setItensFiltrados] = useState(menuItems);
  const [menuMobileAtivo, setMenuMobileAtivo] = useState(false);

  useEffect(() => {
    if (categoriaAtiva === "todos") {
      setItensFiltrados(menuItems);
    } else {
      setItensFiltrados(menuItems.filter(item => item.categoria === categoriaAtiva));
    }
  }, [categoriaAtiva]);

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
    return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  };

  const toggleMenu = () => {
    setMenuMobileAtivo(!menuMobileAtivo);
  };

  return (
    <>
      <header className="site-header">
        <div className="header-container">
          <a href="/" className="logo">
            <span className="logo-text">Coco Bambu</span>
          </a>
          <button className="menu-toggle" onClick={toggleMenu}>☰</button>
          <nav className={`main-nav ${menuMobileAtivo ? 'active' : ''}`}>
            <ul>
              <li><a href="#cardapio">Início</a></li>
              <li className="categoria-dropdown">
                <a href="#categorias">Cardápio</a>
                <div className="categoria-dropdown-content">
                  {categorias.map(cat => (
                    <a
                      key={cat.id}
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        setCategoriaAtiva(cat.id);
                      }}
                    >
                      {cat.nome}
                    </a>
                  ))}
                </div>
              </li>
              <li><a href="#promocoes">Promoções</a></li>
              <li><a href="#contato">Contato</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <div className="main-content">
        <main className="cardapio-container">
          <h1 className="menu-title">Nosso Cardápio</h1>

          <div className="categoria-filtros">
            {categorias.map(cat => (
              <button
                key={cat.id}
                className={`filtro-btn ${categoriaAtiva === cat.id ? 'active' : ''}`}
                onClick={() => setCategoriaAtiva(cat.id)}
              >
                {cat.nome}
              </button>
            ))}
          </div>

          <section className="lista-itens-cardapio">
            {itensFiltrados.map((item) => (
              <div className="menu-item" key={item.id}>
                <div className="menu-item-image-container">
                  <img src={item.imageUrl} alt={item.name} className="menu-item-imagem" />
                  <span className="menu-item-categoria">
                    {categorias.find(cat => cat.id === item.categoria)?.nome}
                  </span>
                </div>
                <div className="menu-item-content">
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                  <div className="menu-item-footer">
                    <span className="menu-item-preco">{item.displayPrice}</span>
                    <button
                      className="menu-item-link"
                      onClick={() => adicionarAoCarrinho(item)}
                    >
                      Adicionar
                    </button>
                  </div>
                </div>
              </div>
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

          {/* Component ExtraInfo carregado sob demanda */}
          <Suspense fallback={<div>Carregando informações extras...</div>}>
            <ExtraInfo />
          </Suspense>
        </main>
      </div>

      <footer className="site-footer">
        <div className="footer-container">
          <div className="footer-col footer-about">
            <a href="/" className="footer-logo">Cocobambu</a>
            <p>Especialistas em gastronomia de alta qualidade. Experimente nossos pratos exclusivos feitos com ingredientes selecionados.</p>
          </div>
          <div className="footer-col">
            <h3>Links Rápidos</h3>
            <nav className="footer-nav">
              <ul>
                <li><a href="#cardapio">Cardápio</a></li>
                <li><a href="#promocoes">Promoções</a></li>
                <li><a href="#contato">Contato</a></li>
                <li><a href="#sobre">Sobre Nós</a></li>
              </ul>
            </nav>
          </div>
          <div className="footer-col">
            <h3>Contato</h3>
            <div className="footer-contato">
              <p><span className="contato-icon">📍</span> Av. Paulista, 1000 - São Paulo</p>
              <p><span className="contato-icon">📱</span> (11) 99999-9999</p>
              <p><span className="contato-icon">✉️</span> contato@Cocobambu.com</p>
            </div>
          </div>
        </div>
        <div className="copyright">
          &copy; {new Date().getFullYear()} Coco Bambu. Todos os direitos reservados.
        </div>
      </footer>
    </>
  );
}

export default App;
