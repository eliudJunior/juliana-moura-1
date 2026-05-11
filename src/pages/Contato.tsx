import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import './Contato.css';

const Contato = () => {
  return (
    <div className="page-layout fade-in">
      <header className="page-header" style={{backgroundImage: 'linear-gradient(rgba(28, 28, 28, 0.4), rgba(28, 28, 28, 0.7)), url(https://images.unsplash.com/photo-1600880292089-90a7e086ee3c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80)'}}>
        <div className="container">
          <h1 className="page-title">Agende seu Momento</h1>
          <p className="page-subtitle">Estamos prontos para receber você em nosso oásis digital.</p>
        </div>
      </header>

      <section className="section container">
        <div className="contato-grid">
          <div className="contato-info">
            <h2>Informações</h2>
            <p className="contato-intro">
              Fale conosco para agendar um horário ou tirar dúvidas sobre nossos procedimentos e pacotes especiais.
            </p>
            
            <div className="info-list">
              <div className="info-item">
                <MapPin className="info-icon" />
                <div>
                  <h3>Endereço</h3>
                  <p>Rua da Elegância, 123<br/>Jardins, São Paulo - SP</p>
                </div>
              </div>
              
              <div className="info-item">
                <Phone className="info-icon" />
                <div>
                  <h3>Telefone & WhatsApp</h3>
                  <p>(11) 99999-9999</p>
                </div>
              </div>
              
              <div className="info-item">
                <Mail className="info-icon" />
                <div>
                  <h3>E-mail</h3>
                  <p>contato@julianamoura.com.br</p>
                </div>
              </div>
              
              <div className="info-item">
                <Clock className="info-icon" />
                <div>
                  <h3>Horário de Funcionamento</h3>
                  <p>Terça a Sábado: 09h às 19h<br/>Domingo e Segunda: Fechado</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="contato-form-container">
            <h2>Envie uma Mensagem</h2>
            <form className="contato-form" onSubmit={(e) => e.preventDefault()}>
              <div className="form-group">
                <label htmlFor="name">Nome Completo</label>
                <input type="text" id="name" placeholder="Como gosta de ser chamada?" required />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">E-mail</label>
                <input type="email" id="email" placeholder="seu @email.com" required />
              </div>

              <div className="form-group">
                <label htmlFor="service">Serviço de Interesse</label>
                <select id="service" required>
                  <option value="">Selecione um serviço</option>
                  <option value="cabelo">Cabelo (Corte, Cor, Tratamento)</option>
                  <option value="unhas">Unhas (Manicure, Pedicure, Gel)</option>
                  <option value="outros">Outros / Consultoria</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">Mensagem</label>
                <textarea id="message" rows={5} placeholder="Como podemos ajudar você hoje?" required></textarea>
              </div>

              <button type="submit" className="btn btn-primary" style={{width: '100%'}}>
                Enviar Mensagem
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contato;
