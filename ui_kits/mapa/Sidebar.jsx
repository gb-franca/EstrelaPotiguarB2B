/* Left results panel: brand + search, filters, sorted attraction list. */
const { Input, AttractionCard, Badge } = window.EstrelaPotiguarDesignSystem_69a35c;

function Sidebar({ attractions, query, onQuery, activeCats, onToggleCat, onSelect, selectedId }) {
  const { Search } = window.EPIcons;
  const FilterChips = window.FilterChips;
  return (
    <aside style={{
      width: 'var(--sheet-width)', flexShrink: 0, height: '100%',
      display: 'flex', flexDirection: 'column',
      background: 'var(--surface-card)', borderRight: '1px solid var(--border-subtle)',
      zIndex: 40,
    }}>
      {/* header */}
      <div style={{ padding: '18px 20px 12px', borderBottom: '1px solid var(--border-subtle)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
          <img src="../../assets/logo/estrela-mark.svg" alt="" style={{ width: 28, height: 28, filter: 'drop-shadow(var(--glow-sm))' }} />
          <div>
            <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 18, lineHeight: 1, color: 'var(--text-primary)' }}>Estrela Potiguar</div>
            <div style={{ fontSize: 11, color: 'var(--text-muted)', marginTop: 3 }}>Rio Grande do Norte · Brasil</div>
          </div>
        </div>
        <Input value={query} onChange={(e) => onQuery(e.target.value)}
          placeholder="Buscar praias, fortes, dunas…" leadingIcon={<Search size={18} />} />
        <div style={{ marginTop: 12 }}>
          <FilterChips active={activeCats} onToggle={onToggleCat} />
        </div>
      </div>

      {/* results */}
      <div style={{ flex: 1, overflowY: 'auto', padding: '14px 20px 24px' }}>
        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 12 }}>
          <span className="ep-eyebrow">Perto de você</span>
          <Badge tone="star">{attractions.length} estrelas</Badge>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          {attractions.map(a => (
            <AttractionCard key={a.id}
              name={a.name} category={a.cat}
              categoryColor={(window.EP_CATEGORIES.find(c => c.id === a.category) || {}).color}
              rating={a.rating} reviews={a.reviews} distance={a.distance}
              open={a.open} price={a.price} featured={a.featured}
              onClick={() => onSelect(a.id)}
              style={selectedId === a.id ? { outline: '2px solid var(--accent)', outlineOffset: 1 } : null}
            />
          ))}
          {attractions.length === 0 && (
            <div style={{ textAlign: 'center', color: 'var(--text-muted)', padding: '40px 0', fontSize: 14 }}>
              Nenhuma estrela por aqui. Ajuste os filtros.
            </div>
          )}
        </div>
      </div>
    </aside>
  );
}
window.Sidebar = Sidebar;
