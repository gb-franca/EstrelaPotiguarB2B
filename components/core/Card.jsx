import React from 'react';

/**
 * Surface container with night-sky elevation. Optional interactive hover-lift.
 */
export function Card({ children, padding = 'md', interactive = false, glow = false, style, ...rest }) {
  const pads = { none: '0', sm: 'var(--space-4)', md: 'var(--space-5)', lg: 'var(--space-6)' };
  const base = {
    background: 'var(--surface-card)',
    border: '1px solid var(--border-subtle)',
    borderRadius: 'var(--radius-lg)',
    boxShadow: 'var(--shadow-md)',
    padding: pads[padding] ?? pads.md,
    color: 'var(--text-primary)',
    transition: 'transform var(--dur-base) var(--ease-standard), box-shadow var(--dur-base) var(--ease-standard), border-color var(--dur-base) var(--ease-standard)',
    ...style,
  };
  return (
    <div
      style={base}
      onMouseEnter={(e) => {
        if (!interactive) return;
        e.currentTarget.style.transform = 'translateY(-3px)';
        e.currentTarget.style.boxShadow = glow ? 'var(--glow-md)' : 'var(--shadow-lg)';
        e.currentTarget.style.borderColor = 'var(--border-default)';
      }}
      onMouseLeave={(e) => {
        if (!interactive) return;
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = 'var(--shadow-md)';
        e.currentTarget.style.borderColor = 'var(--border-subtle)';
      }}
      {...rest}
    >
      {children}
    </div>
  );
}
