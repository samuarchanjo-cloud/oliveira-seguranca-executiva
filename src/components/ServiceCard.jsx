import * as Icons from 'lucide-react'

function ServiceCard({ icon, title, text }) {
  const Icon = Icons[icon] || Icons.ShieldCheck

  return (
    <article className="service-card">
      <div className="service-card__icon">
        <Icon size={28} />
      </div>
      <h3 className="service-card__title">{title}</h3>
      <p className="service-card__text">{text}</p>
    </article>
  )
}

export default ServiceCard
