import { CheckCircle2 } from 'lucide-react'
import StatCard from './StatCard.jsx'
import { differentials, stats } from '../data/siteData.js'
import '../styles/about.css'

function About() {
  return (
    <section id="sobre" className="about">
      <div className="container about__inner">
        <div className="about__content">
          <p className="section-eyebrow">Sobre Oliveira</p>
          <h2 className="section-title section-title--left">
            Experiência que protege.
            <br />
            <span>Discrição que garante.</span>
          </h2>

          <p className="about__text">
            Oliveira Segurança Executiva atua com foco em proteção pessoal, acompanhamento
            estratégico e atendimento sigiloso. Cada operação é planejada de acordo com a
            necessidade do cliente, priorizando prevenção, discrição e confiança.
          </p>

          <ul className="about__list">
            {differentials.map((item) => (
              <li key={item}>
                <CheckCircle2 size={18} />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="about__media">
          {/* Substitua por uma segunda foto do profissional em pose de autoridade,
              ou reutilize src/assets/oliveira-hero.png com outro enquadramento. */}
          <div className="about__mediaFrame">
            <div className="about__mediaPlaceholder" />
          </div>
        </div>
      </div>

      <div className="container about__stats">
        {stats.map((stat) => (
          <StatCard key={stat.label} {...stat} />
        ))}
      </div>
    </section>
  )
}

export default About
