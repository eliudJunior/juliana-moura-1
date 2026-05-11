import { NavLink } from 'react-router-dom';
import { MapPin, Phone } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <h2 className="footer-logo">Juliana Moura</h2>
          <p className="footer-tagline">Exclusividade e arte em cada detalhe do seu cabelo e unhas.</p>
        </div>
        
        <div className="footer-links">
          <h3>Menu</h3>
          <NavLink to="/cabelo">Cabelo</NavLink>
          <NavLink to="/unhas">Unhas</NavLink>
          <NavLink to="/sobre">Nossa História</NavLink>
          <NavLink to="/contato">Agendamento</NavLink>
        </div>
        
        <div className="footer-contact">
          <h3>Contato</h3>
          <p><MapPin size={16}/> Rua da Elegância, 123 - Jardins, SP</p>
          <p><Phone size={16}/> (11) 99999-9999</p>
          <div className="social-links">
            <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">
              Instagram
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Salão Juliana Moura. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
