import * as Icons from 'lucide-react'

function StatCard({ icon, value, label }) {
  const Icon = Icons[icon] || Icons.ShieldCheck

  return (
    <div className="stat-card">
      <Icon size={26} />
      <div className="stat-card__text">
        <strong>{value}</strong>
        <span>{label}</span>
      </div>
    </div>
  )
}

export default StatCard
