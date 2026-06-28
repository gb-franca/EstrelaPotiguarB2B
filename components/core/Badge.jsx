import React from 'react';

const tones = {
  neutral: { background: 'var(--surface-raised)', color: 'var(--text-secondary)', border: 'var(--border-subtle)' },
  star:    { background: 'var(--accent-soft)', color: 'var(--accent)', border: 'transparent' },
  aurora:  { background: 'var(--aurora-soft)', color: 'var(--aurora)', border: 'transparent' },
  mare:    { background: 'var(--mare-soft)', color: 'var(--mare)', border: 'transparent' },
  success: { background: 'var(--success-soft)', color: 'var(--success)', border: 'transparent' },
  danger:  { background: 'var(--danger-soft)', color: 'var(--danger)', border: 'transparent' },
  info:    { background: 'var(--info-soft)', color: 'var(--info)', border: 'transparent' },
};

/**
 * Small status / metadata pill — "Aberto", "Grátis", "Top 10".
 */
export function Badge({ children, tone = 'neutral', solid = false, dot = false, leadingIcon, style, ...rest }) {
  const t = tones[tone] || tones.neutral;
  const base = {
    display: 'inline-flex', alignItems: 'center', gap: '6px',
    height: '24px', padding: dot ? '0 10px 0 8px' : '0 10px',
    fontFamily: 'var(--font-body)', fontSize: 'var(--text-xs)', fontWeight: 'var(--weight-semibold)',
    letterSpacing: '0.01em', lineHeight: 1, whiteSpace: 'nowrap',
    borderRadius: 'var(--radius-full)',
    background: solid ? t.color : t.background,
    color: solid ? 'var(--surface-canvas)' : t.color,
    border: `1px solid ${solid ? 'transparent' : t.border}`,
    ...style,
  };
  return (
    <span style={base} {...rest}>
      {dot && <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'currentColor', flexShrink: 0 }} />}
      {leadingIcon}
      {children}
    </span>
  );
}
