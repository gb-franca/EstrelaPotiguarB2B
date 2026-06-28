import React from 'react';

const STAR = 'M12 2.6l2.6 5.7 6.2.6-4.7 4.1 1.4 6.1L12 16.9 6.5 19.2l1.4-6.1L3.2 8.9l6.2-.6z';

function Star({ fill, size }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" style={{ display: 'block' }}>
      <path d={STAR} fill={fill} stroke="var(--accent)" strokeWidth="1" strokeLinejoin="round" />
    </svg>
  );
}

/**
 * Five-star rating. Read-only display or interactive input.
 */
export function Rating({ value = 0, count, max = 5, size = 16, onChange, showValue = false, style, ...rest }) {
  const interactive = !!onChange;
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', ...style }} {...rest}>
      <span style={{ display: 'inline-flex', gap: '2px' }}>
        {Array.from({ length: max }).map((_, i) => {
          const filled = i < Math.round(value);
          return (
            <span
              key={i}
              onClick={() => interactive && onChange(i + 1)}
              style={{ cursor: interactive ? 'pointer' : 'default', lineHeight: 0 }}
            >
              <Star size={size} fill={filled ? 'var(--accent)' : 'transparent'} />
            </span>
          );
        })}
      </span>
      {showValue && (
        <span style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-sm)', fontWeight: 'var(--weight-semibold)', color: 'var(--text-primary)', fontVariantNumeric: 'tabular-nums' }}>
          {value.toFixed(1)}
        </span>
      )}
      {count != null && (
        <span style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-sm)', color: 'var(--text-muted)' }}>
          ({count})
        </span>
      )}
    </span>
  );
}
