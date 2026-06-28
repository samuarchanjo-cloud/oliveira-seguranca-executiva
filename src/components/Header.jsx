import { useEffect, useState } from 'react'
import { Phone, Menu, X } from 'lucide-react'
import { company, navLinks, whatsappLink } from '../data/siteData.js'
import '../styles/header.css'

function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`header ${scrolled ? 'header--scrolled' : ''}`}>
      <div className="header__inner container">
        <a href="#inicio" className="header__brand" onClick={() => setOpen(false)}>
          <svg className="header__shield" viewBox="0 0 64 64" aria-hidden="true">
            <path
              d="M32 4 L56 14 V32 C56 46 46 56 32 60 C18 56 8 46 8 32 V14 Z"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
            />
            <path
              d="M32 16 C38 22 44 24 48 24 C48 38 42 48 32 52 C22 48 16 38 16 24 C20 24 26 22 32 16 Z"
              fill="currentColor"
            />
          </svg>
          <span className="header__brandText">
            OLIVEIRA
            <small>Segurança Executiva</small>
          </span>
        </a>

        <nav className={`header__nav ${open ? 'header__nav--open' : ''}`}>
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="header__actions">
          <a
            className="header__phone"
            href={whatsappLink(`Olá, ${company.name}. Gostaria de solicitar uma avaliação de segurança.`)}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Phone size={16} />
            <span>
              {company.phoneDisplay}
              <small>{company.attendance}</small>
            </span>
          </a>

          <button
            className="header__burger"
            aria-label={open ? 'Fechar menu' : 'Abrir menu'}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
