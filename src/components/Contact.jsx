import { useState } from 'react'
import { Phone, Mail, ShieldCheck, Send } from 'lucide-react'
import { company, whatsappLink } from '../data/siteData.js'
import '../styles/contact.css'

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })

  function handleChange(e) {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  function handleSubmit(e) {
    e.preventDefault()

    const lines = [
      `Olá, ${company.name}. Gostaria de solicitar uma avaliação de segurança.`,
      '',
      `Nome: ${form.name || '-'}`,
      `E-mail: ${form.email || '-'}`,
      `Telefone/WhatsApp: ${form.phone || '-'}`,
      `Mensagem: ${form.message || '-'}`,
    ]

    window.open(whatsappLink(lines.join('\n')), '_blank', 'noopener,noreferrer')
  }

  return (
    <section id="contato" className="contact">
      <div className="container contact__inner">
        <div className="contact__info">
          <p className="section-eyebrow">Contato —</p>
          <h2 className="section-title section-title--left">
            Fale diretamente
            <br />
            <span>com Oliveira</span>
          </h2>
          <p className="contact__text">
            Atendimento rápido, discreto e personalizado. Solicite uma avaliação
            confidencial agora mesmo.
          </p>

          <div className="contact__item">
            <Phone size={20} />
            <div>
              <strong>{company.phoneDisplay}</strong>
              <span>Atendimento via WhatsApp 24h</span>
            </div>
          </div>

          <div className="contact__item">
            <Mail size={20} />
            <div>
              <strong>{company.email}</strong>
              <span>Resposta rápida e sigilosa</span>
            </div>
          </div>

          <div className="contact__item">
            <ShieldCheck size={20} />
            <div>
              <strong>{company.area}</strong>
              <span>Todas as informações são tratadas com total confidencialidade.</span>
            </div>
          </div>
        </div>

        <form className="contact__form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Seu nome"
            value={form.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Seu e-mail"
            value={form.email}
            onChange={handleChange}
          />
          <input
            type="tel"
            name="phone"
            placeholder="Seu telefone / WhatsApp"
            value={form.phone}
            onChange={handleChange}
          />
          <textarea
            name="message"
            placeholder="Como podemos ajudar?"
            rows={5}
            value={form.message}
            onChange={handleChange}
          />

          <button type="submit" className="btn btn--gold contact__submit">
            Enviar mensagem
            <Send size={18} />
          </button>

          <p className="contact__lock">
            <ShieldCheck size={14} />
            Suas informações estão seguras e protegidas.
          </p>
        </form>
      </div>
    </section>
  )
}

export default Contact
