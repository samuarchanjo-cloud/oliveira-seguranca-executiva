import { ShieldCheck, Plane, Clock, Lock, ArrowRight } from 'lucide-react'
import { company, openWhatsAppBusiness, quickHighlights, whatsappBusinessLink } from '../data/siteData.js'
import heroImage from '../assets/hero-fullscreen.png'
import '../styles/hero.css'

const icons = { ShieldCheck, Plane, Clock, Lock }

function Hero() {
  const whatsappMessage = `Olá, ${company.name}. Gostaria de solicitar uma avaliação de segurança.`

  return (
    <section
      id="inicio"
      className="hero"
      style={{ '--hero-image': `url(${heroImage})` }}
    >
      <div className="hero__bg" aria-hidden="true" />
      <div className="hero__overlay" aria-hidden="true" />

      <div className="hero__inner container">
        <div className="hero__content">
          <div className="hero__badge">
            <span className="hero__badgeShield">
              <ShieldCheck size={18} />
            </span>
            Segurança Executiva
          </div>

          <h1 className="hero__title">
            SEGURANÇA
            <br />
            <span>EXECUTIVA</span>
          </h1>

          <p className="hero__subtitle">{company.slogan}</p>

          <p className="hero__text">
            Proteção pessoal e executiva de alto nível para garantir segurança,
            liberdade e tranquilidade em qualquer situação.
          </p>

          <a
            className="btn btn--gold hero__cta"
            href={whatsappBusinessLink(whatsappMessage)}
            onClick={(e) => {
              e.preventDefault()
              openWhatsAppBusiness(whatsappMessage)
            }}
          >
            Fale com Oliveira
            <ArrowRight size={18} />
          </a>
        </div>
      </div>

      <div className="hero__highlights container">
        {quickHighlights.map((item) => {
          const Icon = icons[item.icon]
          return (
            <div key={item.title} className="hero__highlight">
              {Icon && <Icon size={24} />}
              <span>{item.title}</span>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Hero
