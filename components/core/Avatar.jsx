import React from 'react';

/**
 * Avatar with image, or initials fallback on a night surface.
 */
export function Avatar({ src, name = '', size = 40, ring = false, style, ...rest }) {
  const initials = name.trim().split(/\s+/).slice(0, 2).map((w) => w[0]).join('').toUpperCase();
  const base = {
    display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
    width: size, height: size, flexShrink: 0,
    borderRadius: '50%', overflow: 'hidden',
    background: 'var(--surface-raised)',
    color: 'var(--accent)',
    fontFamily: 'var(--font-body)', fontWeight: 'var(--weight-semibold)',
    fontSize: Math.round(size * 0.4),
    border: ring ? '2px solid var(--accent)' : '1px solid var(--border-subtle)',
    boxShadow: ring ? 'var(--glow-sm)' : 'none',
    ...style,
  };
  return (
    <span style={base} {...rest}>
      {src
        ? <img src={src} alt={name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        : (initials || '★')}
    </span>
  );
}
