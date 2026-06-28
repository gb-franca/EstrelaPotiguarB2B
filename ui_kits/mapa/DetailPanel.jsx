/* Detail panel — slides over the sidebar when a star is selected. */
const { Button, IconButton, Rating, Badge, Tabs } = window.EstrelaPotiguarDesignSystem_69a35c;

function InfoRow({ icon, label, value, accent }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '12px 0', borderBottom: '1px solid var(--border-subtle)' }}>
      <span style={{ color: accent || 'var(--text-muted)', display: 'flex', flexShrink: 0 }}>{icon}</span>
      <span style={{ flex: 1, color: 'var(--text-secondary)', fontSize: 14 }}>{label}</span>
      <span style={{ color: 'var(--text-primary)', fontSize: 14, fontWeight: 600 }}>{value}</span>
    </div>
  );
}

function DetailPanel({ item, onBack, theme }) {
  const [tab, setTab] = React.useState('sobre');
  const { ChevLeft, Heart, Route, Share, Clock, Pin, Star, Camera } = window.EPIcons;
  const color = (window.EP_CATEGORIES.find(c => c.id === item.category) || {}).color || 'var(--accent)';
  const [fav, setFav] = React.useState(false);

  return (
    <aside style={{
      width: 'var(--sheet-width)', flexShrink: 0, height: '100%', overflowY: 'auto',
      background: 'var(--surface-card)', borderRight: '1px solid var(--border-subtle)', zIndex: 45,
    }}>
      {/* hero */}
      <div style={{ position: 'relative', height: 220, background: 'radial-gradient(120% 120% at 70% -10%, #252178, #100f46 55%, #07061d)' }}>
        <div className="ep-starfield" style={{ position: 'absolute', inset: 0, backgroundColor: 'transparent', opacity: 0.85 }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(7,6,29,0.35) 0%, transparent 35%, var(--surface-card) 100%)' }} />
        <div style={{ position: 'absolute', top: 16, left: 16 }}>
          <IconButton label="Voltar" variant="floating" onClick={onBack}><ChevLeft size={20} /></IconButton>
        </div>
        <div style={{ position: 'absolute', top: 16, right: 16, display: 'flex', gap: 8 }}>
          <IconButton label="Compartilhar" variant="floating"><Share size={18} /></IconButton>
          <IconButton label="Favoritar" variant="floating" onClick={() => setFav(!fav)}>
            <span style={{ color: fav ? 'var(--aurora)' : 'currentColor' }}><Heart size={18} fill={fav ? 'var(--aurora)' : 'none'} /></span>
          </IconButton>
        </div>
        <div style={{ position: 'absolute', left: 20, right: 20, bottom: 16 }}>
          <div style={{ display: 'flex', gap: 6, marginBottom: 10 }}>
            {item.featured && <Badge tone="aurora" solid>★ Destaque</Badge>}
            <Badge tone="neutral" style={{ background: 'var(--surface-overlay)' }}>
              <span style={{ width: 7, height: 7, borderRadius: '50%', background: color, display: 'inline-block' }} />{item.cat}
            </Badge>
            <Badge tone={item.open ? 'success' : 'danger'} dot>{item.open ? 'Aberto agora' : 'Fechado'}</Badge>
          </div>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 30, fontWeight: 700, margin: 0, color: 'var(--text-primary)', letterSpacing: '-0.02em' }}>{item.name}</h2>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginTop: 8 }}>
            <Rating value={item.rating} count={item.reviews} size={16} showValue />
            <span style={{ color: 'var(--text-muted)', fontSize: 13 }}>· {item.city}</span>
          </div>
        </div>
      </div>

      {/* actions */}
      <div style={{ display: 'flex', gap: 10, padding: '16px 20px' }}>
        <Button variant="primary" leadingIcon={<Route size={18} />} fullWidth>Traçar rota</Button>
        <Button variant="secondary" leadingIcon={<Camera size={18} />}>Fotos</Button>
      </div>

      {/* tabs */}
      <div style={{ padding: '0 20px' }}>
        <Tabs value={tab} onChange={setTab} items={[
          { value: 'sobre', label: 'Sobre' },
          { value: 'info', label: 'Informações' },
          { value: 'avaliacoes', label: 'Avaliações', count: item.reviews },
        ]} />
      </div>

      <div style={{ padding: '18px 20px 28px' }}>
        {tab === 'sobre' && (
          <p style={{ color: 'var(--text-secondary)', fontSize: 15, lineHeight: 1.6, margin: 0 }}>{item.blurb}</p>
        )}
        {tab === 'info' && (
          <div>
            <InfoRow icon={<Clock size={18} />} label="Horário" value={item.open ? '08h – 18h' : 'Fechado'} accent={item.open ? 'var(--success)' : 'var(--danger)'} />
            <InfoRow icon={<Pin size={18} />} label="Distância" value={item.distance} />
            <InfoRow icon={<Star size={18} />} label="Entrada" value={item.price} accent="var(--accent)" />
          </div>
        )}
        {tab === 'avaliacoes' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: 44, fontWeight: 700, color: 'var(--text-primary)', lineHeight: 1 }}>{item.rating.toFixed(1)}</div>
              <div>
                <Rating value={item.rating} size={16} />
                <div style={{ color: 'var(--text-muted)', fontSize: 13, marginTop: 4 }}>{item.reviews.toLocaleString('pt-BR')} avaliações</div>
              </div>
            </div>
            <p style={{ color: 'var(--text-secondary)', fontSize: 14, lineHeight: 1.6, margin: 0, fontStyle: 'italic', fontFamily: 'var(--font-italic)' }}>
              “Chegamos no fim da tarde e o céu ficou estrelado. Inesquecível.” — Marina R.
            </p>
          </div>
        )}
      </div>
    </aside>
  );
}
window.DetailPanel = DetailPanel;
