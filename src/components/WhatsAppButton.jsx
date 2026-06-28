import { MessageCircle } from 'lucide-react'
import { company, openWhatsAppBusiness, whatsappBusinessLink } from '../data/siteData.js'

function WhatsAppButton() {
  const whatsappMessage = `Olá, ${company.name}. Gostaria de solicitar uma avaliação de segurança.`

  return (
    <a
      className="whatsapp-fab"
      href={whatsappBusinessLink(whatsappMessage)}
      onClick={(e) => {
        e.preventDefault()
        openWhatsAppBusiness(whatsappMessage)
      }}
      aria-label="Falar no WhatsApp"
    >
      <MessageCircle size={26} />
    </a>
  )
}

export default WhatsAppButton
