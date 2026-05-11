import './Services.css';

const Unhas = () => {
  const services = [
    {
      title: "Manicure & Pedicure Clássica",
      desc: "Cuidados essenciais com foco em biossegurança, cuticulagem perfeita e esmaltação duradoura.",
      price: "A partir de R$ 60"
    },
    {
      title: "Spa dos Pés",
      desc: "Tratamento relaxante com esfoliação, hidratação profunda e massagem revitalizante.",
      price: "A partir de R$ 90"
    },
    {
      title: "Alongamento em Gel ou Fibra",
      desc: "Extensões naturais e resistentes, esculpidas milimetricamente para o formato ideal das suas mãos.",
      price: "A partir de R$ 220"
    },
    {
      title: "Nail Art Personalizada",
      desc: "Design exclusivo nas unhas, desde francesinhas modernas até criações artísticas complexas.",
      price: "Sob consulta"
    }
  ];

  return (
    <div className="page-layout fade-in">
      <header className="page-header" style={{backgroundImage: 'linear-gradient(rgba(28, 28, 28, 0.4), rgba(28, 28, 28, 0.7)), url(https://images.unsplash.com/photo-1519014816548-bf5fe059e98b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80)'}}>
        <div className="container">
          <h1 className="page-title">Unhas</h1>
          <p className="page-subtitle">Detalhes que fazem toda a diferença. O máximo cuidado para suas mãos e pés.</p>
        </div>
      </header>

      <section className="section container">
        <div className="editorial-grid reverse">
          <div className="editorial-content">
            <h2>Cuidado em cada Detalhe</h2>
            <p>
              Suas mãos falam por você. Nosso espaço dedicado ao cuidado das unhas foi projetado para oferecer 
              momentos de puro relaxamento enquanto nossas especialistas trabalham. Seguimos os mais rigorosos 
              padrões de biossegurança, utilizando materiais esterilizados em autoclave e descartáveis, 
              garantindo não apenas beleza, mas total saúde.
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
             <img src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Unhas 1" className="img-main" />
             <img src="https://images.unsplash.com/photo-1604654894610-df63bc536371?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Unhas 2" className="img-secondary" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Unhas;
