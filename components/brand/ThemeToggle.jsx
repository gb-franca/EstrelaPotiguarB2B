import React from 'react';

const MOON = 'M21 12.8A9 9 0 1 1 11.2 3 7 7 0 0 0 21 12.8z';
const SUN_RAYS = [[12,1,12,4],[12,20,12,23],[4.2,4.2,6.3,6.3],[17.7,17.7,19.8,19.8],[1,12,4,12],[20,12,23,12],[4.2,19.8,6.3,17.7],[17.7,6.3,19.8,4.2]];

/**
 * Day/night theme toggle. A pill that slides a sun/moon knob; flips the
 * `data-theme` attribute on the chosen root (default <html>) unless controlled.
 */
export function ThemeToggle({ theme, onChange, target, style, ...rest }) {
  const isControlled = theme != null;
  const [internal, setInternal] = React.useState('dark');
  const current = isControlled ? theme : internal;
  const dark = current === 'dark';

  const apply = (next) => {
    if (!isControlled) {
      setInternal(next);
      const root = target || (typeof document !== 'undefined' ? document.documentElement : null);
      if (root) root.setAttribute('data-theme', next);
    }
    onChange && onChange(next);
  };

  return (
    <button
      type="button"
      role="switch"
      aria-checked={dark}
      aria-label={dark ? 'Modo noturno' : 'Modo diurno'}
      onClick={() => apply(dark ? 'light' : 'dark')}
      style={{
        position: 'relative', width: 64, height: 32, padding: 3,
        borderRadius: 'var(--radius-full)',
        background: dark ? 'var(--surface-inset)' : 'var(--accent-soft)',
        border: '1px solid var(--border-default)', cursor: 'pointer',
        transition: 'background var(--dur-base) var(--ease-standard)',
        ...style,
      }}
      {...rest}
    >
      <span style={{
        position: 'absolute', top: 3, left: dark ? 3 : 'calc(100% - 29px)',
        width: 26, height: 26, borderRadius: '50%',
        background: dark ? 'var(--surface-raised)' : 'var(--accent)',
        boxShadow: dark ? 'var(--shadow-sm)' : 'var(--glow-sm)',
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        transition: 'left var(--dur-base) var(--ease-standard), background var(--dur-base) var(--ease-standard)',
      }}>
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none"
             stroke={dark ? 'var(--accent)' : 'var(--on-accent)'} strokeWidth="2" strokeLinecap="round">
          {dark
            ? <path d={MOON} fill="var(--accent)" stroke="none" />
            : <>
                <circle cx="12" cy="12" r="4.2" fill="var(--on-accent)" stroke="none" />
                {SUN_RAYS.map((r, i) => <line key={i} x1={r[0]} y1={r[1]} x2={r[2]} y2={r[3]} />)}
              </>}
        </svg>
      </span>
    </button>
  );
}
