import React from 'react';

const sizes = {
  sm: { height: 'var(--control-sm)', padding: '0 14px', font: 'var(--text-sm)', gap: '6px' },
  md: { height: 'var(--control-md)', padding: '0 20px', font: 'var(--text-base)', gap: '8px' },
  lg: { height: 'var(--control-lg)', padding: '0 28px', font: 'var(--text-md)', gap: '10px' },
};

const variants = {
  primary: {
    background: 'var(--accent)',
    color: 'var(--on-accent)',
    border: '1px solid transparent',
  },
  aurora: {
    background: 'var(--aurora)',
    color: 'var(--text-on-aurora)',
    border: '1px solid transparent',
  },
  secondary: {
    background: 'transparent',
    color: 'var(--text-primary)',
    border: '1px solid var(--border-strong)',
  },
  ghost: {
    background: 'transparent',
    color: 'var(--text-primary)',
    border: '1px solid transparent',
  },
  subtle: {
    background: 'var(--accent-soft)',
    color: 'var(--accent)',
    border: '1px solid transparent',
  },
};

/**
 * Estrela Potiguar primary action button.
 */
export function Button({
  children,
  variant = 'primary',
  size = 'md',
  leadingIcon,
  trailingIcon,
  fullWidth = false,
  disabled = false,
  loading = false,
  type = 'button',
  onClick,
  style,
  ...rest
}) {
  const s = sizes[size] || sizes.md;
  const v = variants[variant] || variants.primary;
  const isGlow = variant === 'primary' || variant === 'aurora';

  const base = {
    display: fullWidth ? 'flex' : 'inline-flex',
    width: fullWidth ? '100%' : 'auto',
    alignItems: 'center',
    justifyContent: 'center',
    gap: s.gap,
    height: s.height,
    padding: s.padding,
    fontFamily: 'var(--font-body)',
    fontSize: s.font,
    fontWeight: 'var(--weight-medium)',
    lineHeight: 1,
    letterSpacing: '0.01em',
    borderRadius: 'var(--radius-full)',
    cursor: disabled || loading ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.5 : 1,
    transition: 'transform var(--dur-fast) var(--ease-standard), box-shadow var(--dur-base) var(--ease-standard), background var(--dur-base) var(--ease-standard), filter var(--dur-base) var(--ease-standard)',
    whiteSpace: 'nowrap',
    userSelect: 'none',
    ...v,
    ...style,
  };

  const onEnter = (e) => {
    if (disabled || loading) return;
    if (isGlow) e.currentTarget.style.boxShadow = variant === 'aurora' ? 'var(--glow-aurora)' : 'var(--glow-md)';
    e.currentTarget.style.filter = 'brightness(1.05)';
    if (variant === 'secondary' || variant === 'ghost') e.currentTarget.style.background = 'var(--accent-soft)';
  };
  const onLeave = (e) => {
    e.currentTarget.style.boxShadow = 'none';
    e.currentTarget.style.filter = 'none';
    if (variant === 'secondary' || variant === 'ghost') e.currentTarget.style.background = 'transparent';
  };
  const onDown = (e) => { if (!disabled && !loading) e.currentTarget.style.transform = 'scale(0.97)'; };
  const onUp = (e) => { e.currentTarget.style.transform = 'scale(1)'; };

  return (
    <button
      type={type}
      disabled={disabled || loading}
      onClick={onClick}
      style={base}
      onMouseEnter={onEnter}
      onMouseLeave={(e) => { onLeave(e); onUp(e); }}
      onMouseDown={onDown}
      onMouseUp={onUp}
      {...rest}
    >
      {loading ? <Spinner /> : leadingIcon}
      {children}
      {!loading && trailingIcon}
    </button>
  );
}

function Spinner() {
  return (
    <span
      style={{
        width: '1em', height: '1em', borderRadius: '50%',
        border: '2px solid currentColor', borderTopColor: 'transparent',
        display: 'inline-block', animation: 'ep-btn-spin 0.7s linear infinite',
      }}
    >
      <style>{`@keyframes ep-btn-spin{to{transform:rotate(360deg)}}`}</style>
    </span>
  );
}
