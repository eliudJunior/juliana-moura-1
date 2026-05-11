import './Services.css';

const Cabelo = () => {
  const services = [
    {
      title: "Corte & Visagismo",
      desc: "Análise do formato do rosto e estilo de vida para criar o corte perfeito que realce sua beleza natural.",
      price: "A partir de R$ 150"
    },
    {
      title: "Colorimetria Avançada",
      desc: "Mechas, luzes, balayage e coloração global utilizando técnicas europeias e produtos premium.",
      price: "A partir de R$ 350"
    },
    {
      title: "Terapia Capilar",
      desc: "Reconstrução, nutrição profunda e tratamento do couro cabeludo para fios saudáveis de dentro para fora.",
      price: "A partir de R$ 180"
    },
    {
      title: "Escova & Finalização",
      desc: "Preparação impecável para eventos ou para o seu dia a dia, com durabilidade excepcional.",
      price: "A partir de R$ 120"
    }
  ];

  return (
    <div className="page-layout fade-in">
      <header className="page-header" style={{backgroundImage: 'linear-gradient(rgba(28, 28, 28, 0.4), rgba(28, 28, 28, 0.7)), url(https://images.unsplash.com/photo-1595476108010-b4d1f10d5e43?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80)'}}>
        <div className="container">
          <h1 className="page-title">Cabelos</h1>
          <p className="page-subtitle">Moldura da sua essência. Especialistas em transformar sua visão em realidade.</p>
        </div>
      </header>

      <section className="section container">
        <div className="editorial-grid">
          <div className="editorial-content">
            <h2>Arte em Fios</h2>
            <p>
              Acreditamos que cada cabelo conta uma história. No Salão Juliana Moura, não oferecemos apenas serviços, 
              oferecemos uma consultoria completa de imagem. Nossos profissionais são treinados nas mais recentes 
              tendências internacionais e utilizam apenas produtos de altíssima performance para garantir 
              resultados deslumbrantes sem comprometer a integridade dos seus fios.
            </p>
            <div className="service-list">
              {services.map((service, index) => (
                <div key={index} className="service-item">
                  <div className="service-item-header">
                    <h3>{service.title}</h3>
                    <span className="service-price">{service.price}</span>
                  </div>
                  <p>{service.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="editorial-images">
            <img src="https://images.unsplash.com/photo-1562322140-8baeececf3df?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Estilo de cabelo 1" className="img-main" />
            <img src="https://images.unsplash.com/photo-1519699047748-de8e457a634e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Estilo de cabelo 2" className="img-secondary" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cabelo;
