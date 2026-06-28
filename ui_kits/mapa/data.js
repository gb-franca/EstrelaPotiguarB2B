// Estrela Potiguar — sample attraction data (Rio Grande do Norte, Brazil)
// x/y are positions on the stylized map canvas (percent).
window.EP_CATEGORIES = [
  { id: 'praias',      label: 'Praias',      color: 'var(--info)' },
  { id: 'historicos',  label: 'Históricos',  color: 'var(--aurora)' },
  { id: 'dunas',       label: 'Dunas',       color: 'var(--accent)' },
  { id: 'natureza',    label: 'Natureza',    color: 'var(--mare)' },
  { id: 'gastronomia', label: 'Gastronomia', color: 'var(--danger)' },
];

window.EP_ATTRACTIONS = [
  {
    id: 'pipa', name: 'Praia da Pipa', category: 'praias', cat: 'Praia',
    x: 64, y: 78, rating: 4.9, reviews: 3120, open: true, distance: '82 km', price: 'Grátis',
    city: 'Tibau do Sul', featured: true,
    blurb: 'Falésias, golfinhos na baía e a vida noturna mais animada do litoral sul. O cartão-postal potiguar.',
  },
  {
    id: 'forte', name: 'Forte dos Reis Magos', category: 'historicos', cat: 'Histórico',
    x: 78, y: 30, rating: 4.6, reviews: 980, open: true, distance: '3,1 km', price: 'R$ 30',
    city: 'Natal',
    blurb: 'Fortaleza em forma de estrela de cinco pontas, erguida em 1598 na foz do Rio Potengi.',
  },
  {
    id: 'genipabu', name: 'Dunas de Genipabu', category: 'dunas', cat: 'Dunas',
    x: 70, y: 16, rating: 4.8, reviews: 2240, open: true, distance: '25 km', price: 'A partir de R$ 120',
    city: 'Extremoz', featured: true,
    blurb: 'Passeio de buggy “com ou sem emoção” entre dunas móveis, lagoas e dromedários à beira-mar.',
  },
  {
    id: 'careca', name: 'Morro do Careca', category: 'praias', cat: 'Praia',
    x: 80, y: 44, rating: 4.7, reviews: 1890, open: true, distance: '6,4 km', price: 'Grátis',
    city: 'Natal',
    blurb: 'A duna gigante que abraça Ponta Negra — símbolo de Natal, cercada de mar morno e quiosques.',
  },
  {
    id: 'maracajau', name: 'Parrachos de Maracajaú', category: 'natureza', cat: 'Recife',
    x: 66, y: 8, rating: 4.7, reviews: 760, open: true, distance: '55 km', price: 'A partir de R$ 90',
    city: 'Maxaranguape',
    blurb: 'Piscinas naturais de água cristalina a 7 km da costa — o “Caribe brasileiro” para mergulho.',
  },
  {
    id: 'gostoso', name: 'São Miguel do Gostoso', category: 'praias', cat: 'Praia',
    x: 52, y: 6, rating: 4.8, reviews: 1120, open: true, distance: '110 km', price: 'Grátis',
    city: 'São Miguel do Gostoso',
    blurb: 'Vila tranquila de pescadores, capital do vento — kitesurf, windsurf e pôr do sol sem fim.',
  },
  {
    id: 'pirangi', name: 'Cajueiro de Pirangi', category: 'natureza', cat: 'Natureza',
    x: 76, y: 60, rating: 4.4, reviews: 1340, open: true, distance: '22 km', price: 'R$ 5',
    city: 'Parnamirim',
    blurb: 'O maior cajueiro do mundo: uma única árvore que cobre 8.500 m² — vista de uma passarela suspensa.',
  },
  {
    id: 'dunas-parque', name: 'Parque das Dunas', category: 'natureza', cat: 'Parque',
    x: 82, y: 38, rating: 4.7, reviews: 2010, open: false, distance: '4,8 km', price: 'R$ 5',
    city: 'Natal',
    blurb: 'A segunda maior floresta urbana do país, trilhas na Mata Atlântica entre dunas e mirantes.',
  },
];
