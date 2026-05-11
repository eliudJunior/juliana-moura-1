import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home fade-in">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">A Arte da<br/>Sua Beleza</h1>
          <p className="hero-subtitle">
            Cabelos, unhas e estética elevados à perfeição. Descubra sua melhor versão no Salão Juliana Moura.
          </p>
          <div className="hero-actions">
            <a href="https://wa.me/5511999999999" className="btn btn-primary" target="_blank" rel="noreferrer">
              Agende seu horário
            </a>
            <Link to="/sobre" className="btn btn-outline">
              Nossa Essência
            </Link>
          </div>
        </div>
        <div className="hero-image-wrapper">
          <img 
            src="https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
            alt="Mulher com cabelo esvoaçante" 
            className="hero-image"
          />
        </div>
      </section>

      {/* Services Preview */}
      <section className="services-preview section container">
        <div className="section-header text-center">
          <h2 className="section-title">Nossos Serviços</h2>
          <p className="section-description">Especialidades desenhadas para realçar sua autenticidade.</p>
        </div>

        <div className="services-grid">
          {/* Cabelo Card */}
          <Link to="/cabelo" className="service-card">
            <div className="service-image-container">
              <img 
                src="https://images.unsplash.com/photo-1522337660859-02fbefca4702?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Procedimentos de Cabelo" 
              />
              <div className="service-overlay">
                <h3>Design de Cabelos</h3>
                <span className="service-link-text">Ver detalhes <ArrowRight size={16} /></span>
              </div>
            </div>
          </Link>

          {/* Unhas Card */}
          <Link to="/unhas" className="service-card">
            <div className="service-image-container">
              <img 
                src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Manicure e Pedicure" 
              />
              <div className="service-overlay">
                <h3>Manicure & Pedicure</h3>
                <span className="service-link-text">Ver detalhes <ArrowRight size={16} /></span>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Quote Section */}
      <section className="quote-section">
        <div className="container">
          <blockquote className="quote-text">
            "Não criamos apenas estilos, revelamos a confiança que já existe dentro de você."
          </blockquote>
          <cite className="quote-author">— Juliana Moura</cite>
        </div>
      </section>
    </div>
  );
};

export default Home;
