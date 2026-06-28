import React from 'react';

/**
 * Toggle switch. Default track lights up star-yellow when on.
 */
export function Switch({ checked = false, onChange, disabled = false, size = 'md', label, style, ...rest }) {
  const dims = {
    sm: { w: 36, h: 20, k: 14 },
    md: { w: 46, h: 26, k: 20 },
  }[size] || { w: 46, h: 26, k: 20 };

  const track = {
    position: 'relative', display: 'inline-flex', alignItems: 'center', flexShrink: 0,
    width: dims.w, height: dims.h, borderRadius: 'var(--radius-full)',
    background: checked ? 'var(--accent)' : 'var(--surface-inset)',
    border: `1px solid ${checked ? 'transparent' : 'var(--border-default)'}`,
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.5 : 1,
    transition: 'background var(--dur-base) var(--ease-standard)',
    padding: 0,
  };
  const knob = {
    position: 'absolute', top: '50%', left: checked ? `calc(100% - ${dims.k + 2}px)` : '2px',
    transform: 'translateY(-50%)',
    width: dims.k, height: dims.k, borderRadius: '50%',
    background: checked ? 'var(--on-accent)' : 'var(--text-secondary)',
    boxShadow: 'var(--shadow-sm)',
    transition: 'left var(--dur-base) var(--ease-standard), background var(--dur-base) var(--ease-standard)',
  };

  const btn = (
    <button
      type="button" role="switch" aria-checked={checked} disabled={disabled}
      onClick={() => !disabled && onChange && onChange(!checked)}
      style={track} {...rest}
    >
      <span style={knob} />
    </button>
  );

  if (!label) return btn;
  return (
    <label style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', cursor: disabled ? 'not-allowed' : 'pointer', ...style }}>
      {btn}
      <span style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-sm)', color: 'var(--text-primary)' }}>{label}</span>
    </label>
  );
}
