// Dados centrais do site. Altere aqui textos, telefone e links.
// Para trocar imagens, substitua os arquivos em src/assets/ mantendo o mesmo nome.

export const company = {
  name: 'Oliveira',
  fullName: 'Oliveira Segurança Executiva',
  phoneDisplay: '(21) 97126-7312',
  whatsappNumber: '5521971267312',
  slogan: 'Proteção. Discrição. Confiança.',
  positioning:
    'Segurança executiva sob medida para pessoas, famílias, empresas e autoridades.',
  attendance: 'Atendimento 24h',
  area: 'Rio de Janeiro e atuação nacional sob consulta',
  email: 'contato@oliveiraseguranca.com.br',
}

export function whatsappLink(message) {
  const base = `https://wa.me/${company.whatsappNumber}`
  if (!message) return base
  return `${base}?text=${encodeURIComponent(message)}`
}

export const navLinks = [
  { label: 'Início', href: '#inicio' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Contato', href: '#contato' },
]

export const quickHighlights = [
  { icon: 'ShieldCheck', label: 'Proteção Estratégica' },
  { icon: 'Plane', label: 'Acompanhamento em Viagens' },
  { icon: 'Clock', label: 'Prontidão 24h' },
  { icon: 'Lock', label: 'Sigilo Absoluto' },
]

export const services = [
  {
    icon: 'UserCheck',
    title: 'Proteção Pessoal Executiva',
    text: 'Segurança dedicada para pessoas, famílias e executivos, com planejamento estratégico e atuação preventiva.',
  },
  {
    icon: 'Crown',
    title: 'Escolta VIP',
    text: 'Acompanhamento especializado para deslocamentos urbanos, rodoviários e compromissos de alto nível.',
  },
  {
    icon: 'Plane',
    title: 'Acompanhamento em Viagens',
    text: 'Profissionais qualificados para acompanhar você em viagens nacionais e internacionais com discrição e planejamento.',
  },
  {
    icon: 'Users',
    title: 'Segurança para Eventos',
    text: 'Planejamento e apoio operacional para eventos corporativos, sociais e institucionais.',
  },
  {
    icon: 'Landmark',
    title: 'Proteção para Empresários e Autoridades',
    text: 'Atuação estratégica para líderes empresariais, figuras públicas e pessoas que exigem máxima confidencialidade.',
  },
]

export const differentials = [
  'Atuação estratégica e preventiva',
  'Atendimento personalizado e sigiloso',
  'Equipe qualificada e preparada',
  'Planejamento sob medida para cada cliente',
  'Compromisso absoluto com sua segurança',
]

export const stats = [
  { icon: 'BadgeCheck', value: '10+', label: 'anos de experiência' },
  { icon: 'Clock', value: '24h', label: 'atendimento' },
  { icon: 'MapPinned', value: 'Nacional', label: 'atuação' },
  { icon: 'Lock', value: '100%', label: 'discrição e confiança' },
]
