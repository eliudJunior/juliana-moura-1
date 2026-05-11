import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Cabelo', path: '/cabelo' },
    { name: 'Unhas', path: '/unhas' },
    { name: 'Sobre', path: '/sobre' },
    { name: 'Contato', path: '/contato' },
  ];

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <NavLink to="/" className="logo">
          Juliana Moura
        </NavLink>

        <nav className="desktop-nav">
          {navLinks.map((link) => (
            <NavLink 
              key={link.path} 
              to={link.path}
              className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
            >
              {link.name}
            </NavLink>
          ))}
          <a href="https://wa.me/5511999999999" target="_blank" rel="noreferrer" className="btn btn-outline btn-sm" style={{ padding: '0.5rem 1.5rem', marginLeft: '1rem' }}>
            Agendar
          </a>
        </nav>

        <button className="mobile-toggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={24} color="#1C1C1C" /> : <Menu size={24} color="#1C1C1C" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-nav ${mobileMenuOpen ? 'open' : ''}`}>
        {navLinks.map((link) => (
          <NavLink 
            key={link.path} 
            to={link.path}
            className="mobile-link"
            onClick={() => setMobileMenuOpen(false)}
          >
            {link.name}
          </NavLink>
        ))}
        <a href="https://wa.me/5511999999999" target="_blank" rel="noreferrer" className="mobile-link" style={{marginTop: '1rem', display: 'block'}}>
            Agendar Horário
        </a>
      </div>
    </header>
  );
};

export default Header;
