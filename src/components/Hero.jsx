import { ShieldCheck, Plane, Clock, Lock, ArrowRight } from 'lucide-react'
import { company, quickHighlights, whatsappLink } from '../data/siteData.js'
import '../styles/hero.css'

const icons = { ShieldCheck, Plane, Clock, Lock }

function Hero() {
  return (
    <section id="inicio" className="hero">
      <div className="hero__bg" aria-hidden="true" />
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
            Proteção pessoal e executiva de alto nível para garantir segurança, liberdade
            e tranquilidade em qualquer situação.
          </p>

          <a
            className="btn btn--gold hero__cta"
            href={whatsappLink(`Olá, ${company.name}. Gostaria de solicitar uma avaliação de segurança.`)}
            target="_blank"
            rel="noopener noreferrer"
          >
            Fale com Oliveira
            <ArrowRight size={18} />
          </a>
        </div>

        <div className="hero__media">
          {/* Substitua por src/assets/oliveira-hero.png quando disponível.
              Enquanto isso, mantém um placeholder em gradiente escuro. */}
          <div className="hero__mediaFrame">
            <div className="hero__mediaPlaceholder" />
            <div className="hero__mediaGlow" />
          </div>
        </div>
      </div>

      <div className="hero__highlights container">
        {quickHighlights.map((item) => {
          const Icon = icons[item.icon]
          return (
            <div key={item.label} className="hero__highlight">
              <Icon size={22} />
              <span>{item.label}</span>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Hero
