import React from 'react';

const SPARKLE = 'M50 3 C54.5 31 69 45.5 97 50 C69 54.5 54.5 69 50 97 C45.5 69 31 54.5 3 50 C31 45.5 45.5 31 50 3 Z';

/**
 * A star map pin — the core wayfinding mark. An attraction on the night map.
 * `selected` enlarges the pin and turns on the glow.
 */
export function MapPin({
  color = 'var(--accent)',
  selected = false,
  size = 40,
  label,
  twinkle = false,
  onClick,
  style,
  ...rest
}) {
  const dim = selected ? size * 1.3 : size;
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label || 'atração'}
      style={{
        display: 'inline-flex', flexDirection: 'column', alignItems: 'center', gap: '4px',
        background: 'none', border: 'none', padding: 0, cursor: 'pointer',
        transition: 'transform var(--dur-base) var(--ease-spring)',
        transform: selected ? 'translateY(-2px)' : 'none',
        ...style,
      }}
      {...rest}
    >
      <span
        className={twinkle ? 'ep-twinkle' : undefined}
        style={{
          display: 'inline-flex', width: dim, height: dim,
          filter: selected ? `drop-shadow(var(--glow-md))` : 'drop-shadow(0 2px 4px rgba(4,4,20,0.5))',
          transition: 'width var(--dur-base) var(--ease-spring), height var(--dur-base) var(--ease-spring)',
        }}
      >
        <svg viewBox="0 0 100 100" width="100%" height="100%">
          <path d={SPARKLE} fill={color} stroke="rgba(4,4,20,0.35)" strokeWidth={selected ? 2 : 3} />
          <path d={SPARKLE} fill="rgba(255,255,255,0.35)" transform="translate(50 42) scale(0.34) translate(-50 -50)" />
        </svg>
      </span>
      {label && (
        <span style={{
          fontFamily: 'var(--font-body)', fontSize: 'var(--text-2xs)', fontWeight: 'var(--weight-semibold)',
          color: 'var(--text-primary)', background: 'var(--surface-card)',
          padding: '2px 8px', borderRadius: 'var(--radius-full)',
          border: '1px solid var(--border-subtle)', whiteSpace: 'nowrap',
          boxShadow: 'var(--shadow-sm)',
        }}>{label}</span>
      )}
    </button>
  );
}
