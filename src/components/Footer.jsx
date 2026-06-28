import { Instagram, Linkedin, Facebook } from 'lucide-react'
import { company, navLinks } from '../data/siteData.js'
import '../styles/footer.css'

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <span className="footer__brandName">
            OLIVEIRA
            <small>Segurança Executiva</small>
          </span>
          <p>{company.slogan}</p>
          <p className="footer__muted">Soluções de segurança executiva sob medida para você.</p>
        </div>

        <div className="footer__col">
          <h4>Navegação</h4>
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </div>

        <div className="footer__col">
          <h4>Atendimento</h4>
          <span className="footer__phone">{company.phoneDisplay}</span>
          <span className="footer__muted">{company.attendance}</span>
        </div>

        <div className="footer__col">
          <h4>Siga-nos</h4>
          <div className="footer__social">
            <a href="#" aria-label="Instagram"><Instagram size={18} /></a>
            <a href="#" aria-label="LinkedIn"><Linkedin size={18} /></a>
            <a href="#" aria-label="Facebook"><Facebook size={18} /></a>
          </div>
        </div>
      </div>

      <div className="container footer__bottom">
        <span>© {year} {company.fullName}. Todos os direitos reservados.</span>
        <span>Atuação nacional</span>
      </div>
    </footer>
  )
}

export default Footer
