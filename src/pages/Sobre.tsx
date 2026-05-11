import './Sobre.css';

const Sobre = () => {
  return (
    <div className="page-layout fade-in">
      <header className="page-header" style={{backgroundImage: 'linear-gradient(rgba(28, 28, 28, 0.4), rgba(28, 28, 28, 0.7)), url(https://images.unsplash.com/photo-1521590832167-7bfc17484d20?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80)'}}>
        <div className="container">
          <h1 className="page-title">Nossa História</h1>
          <p className="page-subtitle">A essência por trás de cada detalhe do Salão Juliana Moura.</p>
        </div>
      </header>

      <section className="section container">
        <div className="editorial-grid">
          <div className="editorial-images" style={{height: '500px'}}>
            <img src="https://images.unsplash.com/photo-1595476108010-b4d1f10d5e43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Juliana Moura" className="img-main" style={{width: '90%', height: '100%', objectPosition: 'top'}}/>
          </div>
          <div className="editorial-content">
            <h2>A Filosofia</h2>
            <div className="sobre-texto">
              <p>
                O Salão Juliana Moura nasceu de um sonho singular: criar um santuário de beleza onde cada cliente fosse 
                tratado não apenas como um serviço, mas como uma obra de arte em constante evolução.
              </p>
              <p>
                Juliana, com mais de 15 anos de experiência e especializações nos maiores centros de beleza da Europa e 
                Estados Unidos, trouxe para o Brasil uma abordagem única que une visagismo de ponta com um profundo 
                respeito pela natureza de cada indivíduo.
              </p>
              <p>
                "Nós não ditamos tendências, nós as traduzimos para o seu estilo de vida. Nosso objetivo é que, ao se 
                olhar no espelho, você reconheça a sua versão mais autêntica e confiante."
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="ambiente-section">
        <div className="container text-center">
          <h2>Nosso Espaço</h2>
          <p className="ambiente-desc">
            Projetado para ser um refúgio da agitação urbana. Um ambiente onde o luxo minimalista 
            se encontra com o conforto absoluto, proporcionando uma experiência sensorial completa.
          </p>
        </div>
        <div className="gallery-grid">
          <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Ambiente 1" />
          <img src="https://images.unsplash.com/photo-1522337660859-02fbefca4702?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Ambiente 2" />
          <img src="https://images.unsplash.com/photo-1620916566398-39f1143ab7be?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Ambiente 3" />
        </div>
      </section>
    </div>
  );
};

export default Sobre;
