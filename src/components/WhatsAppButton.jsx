import { MessageCircle } from 'lucide-react'
import { company, whatsappLink } from '../data/siteData.js'

function WhatsAppButton() {
  return (
    <a
      className="whatsapp-fab"
      href={whatsappLink(`Olá, ${company.name}. Gostaria de solicitar uma avaliação de segurança.`)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
    >
      <MessageCircle size={26} />
    </a>
  )
}

export default WhatsAppButton
