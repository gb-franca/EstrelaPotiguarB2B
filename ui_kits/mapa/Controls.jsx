/* Category filter chips (in-flow, for the sidebar) + floating map controls. */
const { Tag, IconButton } = window.EstrelaPotiguarDesignSystem_69a35c;

function FilterChips({ active, onToggle }) {
  const { Waves, Landmark, Mountain, Trees, Star } = window.EPIcons;
  const icons = { praias: <Waves size={15} />, historicos: <Landmark size={15} />, dunas: <Mountain size={15} />, natureza: <Trees size={15} />, gastronomia: <Star size={15} /> };
  return (
    <div style={{ display: 'flex', gap: 8, overflowX: 'auto', padding: '2px 0 4px' }}>
      {window.EP_CATEGORIES.map(c => (
        <Tag key={c.id} icon={icons[c.id]} color={c.color}
          selected={active.includes(c.id)} onClick={() => onToggle(c.id)}
          style={{ flexShrink: 0 }}>
          {c.label}
        </Tag>
      ))}
    </div>
  );
}

function MapControls({ onLocate }) {
  const { Plus, Minus, Locate, Layers } = window.EPIcons;
  return (
    <div style={{ position: 'absolute', right: 18, bottom: 24, zIndex: 50, display: 'flex', flexDirection: 'column', gap: 10 }}>
      <IconButton label="Camadas" variant="floating"><Layers size={20} /></IconButton>
      <div style={{ display: 'flex', flexDirection: 'column', borderRadius: 'var(--radius-full)', overflow: 'hidden', boxShadow: 'var(--shadow-float)' }}>
        <IconButton label="Aproximar" variant="floating" style={{ borderRadius: 0, boxShadow: 'none' }}><Plus size={20} /></IconButton>
        <div style={{ height: 1, background: 'var(--border-subtle)' }} />
        <IconButton label="Afastar" variant="floating" style={{ borderRadius: 0, boxShadow: 'none' }}><Minus size={20} /></IconButton>
      </div>
      <IconButton label="Minha localização" variant="accent" onClick={onLocate}><Locate size={20} /></IconButton>
    </div>
  );
}
window.FilterChips = FilterChips;
window.MapControls = MapControls;
