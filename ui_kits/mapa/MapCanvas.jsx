/* The night-sky map canvas. Land, ocean, roads — and an attraction as a star. */
const { MapPin } = window.EstrelaPotiguarDesignSystem_69a35c;

function MapCanvas({ attractions, selectedId, onSelect, theme }) {
  const dark = theme !== 'light';
  const catColor = (id) => (window.EP_CATEGORIES.find(c => c.id === id) || {}).color || 'var(--accent)';

  return (
    <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', background: 'var(--map-canvas)' }}>
      {/* sky gradient wash */}
      <div style={{
        position: 'absolute', inset: 0,
        background: dark
          ? 'radial-gradient(120% 80% at 85% -10%, rgba(37,33,120,0.9), transparent 60%), radial-gradient(80% 70% at 10% 110%, rgba(25,23,96,0.6), transparent 60%)'
          : 'radial-gradient(120% 80% at 85% -10%, rgba(207,224,242,0.9), transparent 60%)',
      }} />
      {/* starfield only at night */}
      {dark && <div className="ep-starfield" style={{ position: 'absolute', inset: 0, backgroundColor: 'transparent', opacity: 0.9 }} />}

      {/* map vector layer */}
      <svg viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
        {/* ocean (east) */}
        <path d="M58 -5 C66 12, 70 30, 80 44 C88 56, 86 72, 96 86 L120 86 L120 -10 Z"
          fill="var(--map-water)" opacity={dark ? 0.85 : 1} />
        {/* coastline highlight */}
        <path d="M58 -5 C66 12, 70 30, 80 44 C88 56, 86 72, 96 86"
          fill="none" stroke={dark ? 'rgba(74,209,255,0.35)' : 'rgba(20,134,196,0.4)'} strokeWidth="0.5" />
        {/* land mass tint (west) */}
        <path d="M-10 -10 L58 -5 C66 12, 70 30, 80 44 C88 56, 86 72, 96 86 L-10 110 Z"
          fill="var(--map-land)" opacity={dark ? 0.6 : 1} />
        {/* lagoon */}
        <ellipse cx="40" cy="52" rx="7" ry="4" fill="var(--map-water)" opacity={dark ? 0.7 : 0.9} />
        {/* roads */}
        <g stroke="var(--map-road)" strokeWidth="0.7" fill="none" strokeLinecap="round">
          <path d="M20 25 C40 30, 55 30, 78 30" />
          <path d="M30 70 C45 60, 60 55, 80 44" />
          <path d="M78 30 C76 45, 78 55, 76 60" />
          <path d="M52 6 C55 25, 50 45, 64 78" />
        </g>
        {/* river Potengi to the fort */}
        <path d="M30 40 C50 36, 66 34, 78 30" fill="none" stroke="var(--map-water)" strokeWidth="1.1" opacity="0.8" />
      </svg>

      {/* "você está aqui" — Natal */}
      <div style={{ position: 'absolute', left: '79%', top: '34%', transform: 'translate(-50%,-50%)' }}>
        <div style={{
          width: 14, height: 14, borderRadius: '50%', background: 'var(--info)',
          border: '3px solid var(--surface-card)', boxShadow: '0 0 0 6px rgba(74,209,255,0.18)',
        }} />
      </div>

      {/* attraction stars */}
      {attractions.map(a => (
        <div key={a.id} style={{
          position: 'absolute', left: a.x + '%', top: a.y + '%',
          transform: 'translate(-50%,-50%)', zIndex: selectedId === a.id ? 30 : 20,
        }}>
          <MapPin
            color={catColor(a.category)}
            selected={selectedId === a.id}
            twinkle={a.featured && selectedId !== a.id}
            label={selectedId === a.id ? a.name : undefined}
            onClick={() => onSelect(a.id)}
          />
        </div>
      ))}
    </div>
  );
}
window.MapCanvas = MapCanvas;
