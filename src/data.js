// Estrela Potiguar B2B Dashboard MVP Mock Data - Refactored for Estrela vs Brilho Apagado

export const EP_CATEGORIES = [
  { id: 'praias',      label: 'Praias',      color: 'var(--info)' },
  { id: 'historicos',  label: 'Históricos',  color: 'var(--aurora)' },
  { id: 'dunas',       label: 'Dunas',       color: 'var(--accent)' },
  { id: 'natureza',    label: 'Natureza',    color: 'var(--mare)' },
  { id: 'gastronomia', label: 'Gastronomia', color: 'var(--danger)' },
];

export const ESTABLISHMENT_INFO = {
  name: "Estrela do Mar Restaurante & Lounge",
  location: "Ponta Negra, Natal - RN",
  category: "gastronomia",
  cat: "Gastronomia",
};

export const INITIAL_REVIEWS = [
  {
    id: 1,
    author: "Ricardo S. (São Paulo/SP)",
    type: "estrela", // Gostei
    vibe: "Gastronomia",
    group: "Casais",
    date: "2026-06-27",
    time: "20:45",
    text: "Pratos incríveis, principalmente o camarão servido na moranga. O atendimento foi excepcional e o ambiente à beira-mar com iluminação noturna é nota 10."
  },
  {
    id: 2,
    author: "Juliana M. (Natal/RN)",
    type: "eclipse", // Brilho Apagado
    vibe: "Sol & Praia",
    group: "Família",
    date: "2026-06-26",
    time: "14:20",
    text: "Esperamos mais de 45 minutos pela mesa na sexta-feira à tarde. A comida é boa, mas o serviço estava completamente desorganizado e as bebidas vieram quentes."
  },
  {
    id: 3,
    author: "Bruno F. (Belo Horizonte/MG)",
    type: "estrela", // Gostei
    vibe: "Sol & Praia",
    group: "Amigos",
    date: "2026-06-25",
    time: "19:15",
    text: "Ótima localização na praia de Ponta Negra. Cerveja bem gelada e porções generosas. O preço é um pouco salgado, mas condiz com a proposta."
  },
  {
    id: 4,
    author: "Clara H. (Buenos Aires/ARG)",
    type: "eclipse", // Brilho Apagado
    vibe: "Gastronomia",
    group: "Solo",
    date: "2026-06-24",
    time: "13:10",
    text: "Lugar bonito e agradável. No entanto, não havia nenhuma opção vegana clara no cardápio principal, tive que pedir para adaptarem um prato básico de arroz e salada."
  },
  {
    id: 5,
    author: "Mateus K. (Recife/PE)",
    type: "estrela", // Gostei
    vibe: "Cultura",
    group: "Casais",
    date: "2026-06-23",
    time: "21:30",
    text: "Visual incrível do Morro do Careca iluminado à noite. A moqueca estava perfeita e o chopp bem gelado. Recomendo muito para casais."
  },
  {
    id: 6,
    author: "Fernanda T. (Brasília/DF)",
    type: "eclipse", // Brilho Apagado
    vibe: "Sol & Praia",
    group: "Família",
    date: "2026-06-23",
    time: "15:00",
    text: "O atendimento de praia deixou a desejar na terça-feira. Pedimos petiscos e demorou muito, e o refrigerante estava quente. Precisam treinar melhor a equipe nos horários de pico."
  }
];

export const TOURIST_DEMOGRAPHICS = {
  budget: [
    { label: "Econômico", pct: 15, key: "econ" },
    { label: "Conforto", pct: 55, key: "conf", featured: true },
    { label: "Premium", pct: 30, key: "prem" }
  ],
  groups: [
    { name: "Casais", pct: 48 },
    { name: "Família", pct: 32 },
    { name: "Amigos", pct: 12 },
    { name: "Solo", pct: 8 }
  ],
  vibes: [
    { name: "Gastronomia", pct: 40, color: "var(--danger)" },
    { name: "Sol & Praia", pct: 35, color: "var(--info)" },
    { name: "Aventura", pct: 15, color: "var(--accent)" },
    { name: "Cultura", pct: 10, color: "var(--aurora)" }
  ]
};

export const LOST_OPPORTUNITIES = [
  { term: "Opção Vegana / Plant Based", count: 42, impact: "Alto" },
  { term: "Espaço Kids com monitor", count: 29, impact: "Médio" },
  { term: "Pet Friendly na varanda", count: 18, impact: "Baixo" }
];

export const CROSS_SCENARIOS = [
  {
    scenario: "Queda de 30% na quarta-feira à noite",
    external: "Setor gastronômico operou em baixa devido a fortes chuvas em Natal.",
    insight: "Aviso: Sua queda de 30% na quarta-feira acompanhou a tendência da cidade (chuvas). Não se preocupe com falhas de equipe neste dia."
  },
  {
    scenario: "Alta de negativas ('espera longa') na sexta à tarde",
    external: "Início de feriadão local com fluxo turístico 25% maior.",
    insight: "Alerta Operacional: O mercado está aquecido pelo feriado, mas sua operação não suportou. Reforce a escala de salão no próximo feriado."
  },
  {
    scenario: "Ociosidade nas terças-feiras à tarde",
    external: "Forte fluxo de comércio varejista no bairro de Ponta Negra.",
    insight: "Oportunidade: O comércio ao seu redor está movimentado nas terças à tarde. Que tal criar uma 'Promoção Happy Hour' para atrair esse público?"
  }
];
