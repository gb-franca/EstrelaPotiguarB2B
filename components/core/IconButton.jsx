import React from 'react';

const sizes = {
  sm: { box: '32px', font: '16px' },
  md: { box: '42px', font: '20px' },
  lg: { box: '52px', font: '24px' },
};

/**
 * Circular icon-only button — toolbar actions, map controls, close buttons.
 */
export function IconButton({
  children,
  size = 'md',
  variant = 'ghost',
  label,
  disabled = false,
  active = false,
  onClick,
  style,
  ...rest
}) {
  const s = sizes[size] || sizes.md;

  const variants = {
    solid: { background: 'var(--surface-raised)', color: 'var(--text-primary)', border: '1px solid var(--border-subtle)' },
    ghost: { background: 'transparent', color: 'var(--text-secondary)', border: '1px solid transparent' },
    floating: { background: 'var(--surface-card)', color: 'var(--text-primary)', border: '1px solid var(--border-subtle)', boxShadow: 'var(--shadow-float)' },
    accent: { background: 'var(--accent)', color: 'var(--on-accent)', border: '1px solid transparent' },
  };
  const v = variants[variant] || variants.ghost;

  const base = {
    display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
    width: s.box, height: s.box, fontSize: s.font,
    borderRadius: 'var(--radius-full)',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.45 : 1,
    transition: 'background var(--dur-base) var(--ease-standard), color var(--dur-base) var(--ease-standard), transform var(--dur-fast) var(--ease-standard)',
    ...v,
    ...(active ? { background: 'var(--accent-soft)', color: 'var(--accent)' } : null),
    ...style,
  };

  return (
    <button
      type="button"
      aria-label={label}
      title={label}
      disabled={disabled}
      onClick={onClick}
      style={base}
      onMouseEnter={(e) => { if (!disabled && !active && variant === 'ghost') { e.currentTarget.style.background = 'var(--accent-soft)'; e.currentTarget.style.color = 'var(--text-primary)'; } }}
      onMouseLeave={(e) => { if (!active && variant === 'ghost') { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--text-secondary)'; } }}
      onMouseDown={(e) => { if (!disabled) e.currentTarget.style.transform = 'scale(0.9)'; }}
      onMouseUp={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}
      {...rest}
    >
      {children}
    </button>
  );
}
