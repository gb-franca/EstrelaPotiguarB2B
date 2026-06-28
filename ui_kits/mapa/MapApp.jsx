/* Estrela Potiguar — map app shell. Ties sidebar, map and detail together. */
const { ThemeToggle, Avatar } = window.EstrelaPotiguarDesignSystem_69a35c;

function MapApp() {
  const [theme, setTheme] = React.useState('dark');
  const [query, setQuery] = React.useState('');
  const [activeCats, setActiveCats] = React.useState([]);
  const [selectedId, setSelectedId] = React.useState(null);

  const all = window.EP_ATTRACTIONS;
  const filtered = all.filter(a => {
    const okCat = activeCats.length === 0 || activeCats.includes(a.category);
    const q = query.trim().toLowerCase();
    const okQ = !q || a.name.toLowerCase().includes(q) || a.city.toLowerCase().includes(q) || a.cat.toLowerCase().includes(q);
    return okCat && okQ;
  });
  const selected = all.find(a => a.id === selectedId);

  const toggleCat = (id) => setActiveCats(cs => cs.includes(id) ? cs.filter(c => c !== id) : [...cs, id]);

  const { Sidebar, DetailPanel, MapCanvas, MapControls } = window;

  return (
    <div data-theme={theme} style={{ position: 'absolute', inset: 0, display: 'flex', background: 'var(--surface-canvas)', fontFamily: 'var(--font-body)' }}>
      {selected
        ? <DetailPanel item={selected} theme={theme} onBack={() => setSelectedId(null)} />
        : <Sidebar attractions={filtered} query={query} onQuery={setQuery}
            activeCats={activeCats} onToggleCat={toggleCat}
            onSelect={setSelectedId} selectedId={selectedId} />}

      <main style={{ position: 'relative', flex: 1, overflow: 'hidden' }}>
        <MapCanvas attractions={filtered} selectedId={selectedId} onSelect={setSelectedId} theme={theme} />

        {/* floating user cluster */}
        <div style={{
          position: 'absolute', top: 18, right: 18, zIndex: 55,
          display: 'flex', alignItems: 'center', gap: 10,
          background: 'var(--glass-tint-dark)', WebkitBackdropFilter: 'var(--blur-glass)', backdropFilter: 'var(--blur-glass)',
          border: '1px solid var(--border-default)', borderRadius: 'var(--radius-full)',
          boxShadow: 'var(--shadow-float)', padding: '7px 10px',
        }}>
          <ThemeToggle theme={theme} onChange={setTheme} />
          <Avatar name="Ana Lima" size={34} ring />
        </div>

        {/* region label */}
        <div style={{
          position: 'absolute', top: 20, left: 20, zIndex: 40,
          fontFamily: 'var(--font-display)', fontSize: 13, fontWeight: 600,
          letterSpacing: '0.16em', textTransform: 'uppercase',
          color: 'var(--text-secondary)', background: 'var(--surface-overlay)',
          padding: '6px 12px', borderRadius: 'var(--radius-full)',
          WebkitBackdropFilter: 'blur(8px)', backdropFilter: 'blur(8px)',
        }}>Litoral · Natal</div>

        <MapControls onLocate={() => setSelectedId('forte')} />
      </main>
    </div>
  );
}
window.MapApp = MapApp;
