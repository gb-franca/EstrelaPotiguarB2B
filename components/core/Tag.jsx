import React from 'react';

/**
 * Category / filter chip — selectable, used in the map filter bar.
 */
export function Tag({ children, icon, selected = false, onClick, color, style, ...rest }) {
  const interactive = !!onClick;
  const accent = color || 'var(--accent)';
  const base = {
    display: 'inline-flex', alignItems: 'center', gap: '7px',
    height: '34px', padding: '0 14px',
    fontFamily: 'var(--font-body)', fontSize: 'var(--text-sm)', fontWeight: 'var(--weight-medium)',
    lineHeight: 1, whiteSpace: 'nowrap',
    borderRadius: 'var(--radius-full)',
    cursor: interactive ? 'pointer' : 'default',
    userSelect: 'none',
    background: selected ? accent : 'var(--surface-card)',
    color: selected ? 'var(--on-accent)' : 'var(--text-secondary)',
    border: `1px solid ${selected ? 'transparent' : 'var(--border-default)'}`,
    transition: 'background var(--dur-base) var(--ease-standard), color var(--dur-base) var(--ease-standard), border-color var(--dur-base) var(--ease-standard)',
    ...style,
  };
  return (
    <button
      type="button"
      onClick={onClick}
      style={base}
      onMouseEnter={(e) => { if (interactive && !selected) e.currentTarget.style.borderColor = 'var(--border-strong)'; }}
      onMouseLeave={(e) => { if (interactive && !selected) e.currentTarget.style.borderColor = 'var(--border-default)'; }}
      {...rest}
    >
      {icon && <span style={{ display: 'inline-flex', fontSize: '16px', color: selected ? 'currentColor' : accent }}>{icon}</span>}
      {children}
    </button>
  );
}
