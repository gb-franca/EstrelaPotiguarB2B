import React from 'react';

/**
 * Underline tab bar. The active tab is marked with a star-yellow indicator.
 * Controlled via `value` / `onChange`.
 */
export function Tabs({ items = [], value, onChange, style, ...rest }) {
  const wrap = {
    display: 'inline-flex', gap: 'var(--space-5)',
    borderBottom: '1px solid var(--border-subtle)',
    ...style,
  };
  return (
    <div style={wrap} role="tablist" {...rest}>
      {items.map((it) => {
        const key = it.value ?? it;
        const label = it.label ?? it;
        const active = key === value;
        return (
          <button
            key={key}
            role="tab"
            aria-selected={active}
            onClick={() => onChange && onChange(key)}
            style={{
              position: 'relative',
              background: 'none', border: 'none', cursor: 'pointer',
              padding: '0 0 12px', margin: 0,
              fontFamily: 'var(--font-body)', fontSize: 'var(--text-base)',
              fontWeight: active ? 'var(--weight-semibold)' : 'var(--weight-regular)',
              color: active ? 'var(--text-primary)' : 'var(--text-secondary)',
              transition: 'color var(--dur-base) var(--ease-standard)',
              display: 'inline-flex', alignItems: 'center', gap: '7px',
            }}
            onMouseEnter={(e) => { if (!active) e.currentTarget.style.color = 'var(--text-primary)'; }}
            onMouseLeave={(e) => { if (!active) e.currentTarget.style.color = 'var(--text-secondary)'; }}
          >
            {it.icon}
            {label}
            {it.count != null && (
              <span style={{ fontSize: 'var(--text-xs)', color: 'var(--text-muted)', fontVariantNumeric: 'tabular-nums' }}>{it.count}</span>
            )}
            <span style={{
              position: 'absolute', left: 0, right: 0, bottom: -1, height: 2,
              borderRadius: '2px 2px 0 0',
              background: active ? 'var(--accent)' : 'transparent',
              boxShadow: active ? 'var(--glow-sm)' : 'none',
              transition: 'background var(--dur-base) var(--ease-standard)',
            }} />
          </button>
        );
      })}
    </div>
  );
}
