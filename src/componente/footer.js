import React from "react";

const Footer = () => (
  <footer className="site-footer">
    <div className="footer-container">
      <div className="footer-col footer-about">
        <a href="/" className="footer-logo">Cocobambu</a>
        <p>
          Especialistas em gastronomia de alta qualidade. Experimente nossos pratos
          exclusivos feitos com ingredientes selecionados.
        </p>
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
);

export default Footer;
