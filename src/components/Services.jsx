import ServiceCard from './ServiceCard.jsx'
import { services } from '../data/siteData.js'
import '../styles/services.css'

function Services() {
  return (
    <section id="servicos" className="services">
      <div className="container">
        <p className="section-eyebrow">— Nossos Serviços —</p>
        <h2 className="section-title">Soluções de segurança sob medida para você.</h2>

        <div className="services__grid">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
