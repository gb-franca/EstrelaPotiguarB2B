import React, { useState } from 'react';
import { Rating } from '../core/Rating.jsx';
import { Badge } from '../core/Badge.jsx';

const HEART = 'M12 21s-7.5-4.7-10-9.3C.6 9 2 5.5 5.2 5.1c2-.2 3.5 1 4.8 2.6 1.3-1.6 2.8-2.8 4.8-2.6C18 5.5 19.4 9 18 11.7 15.5 16.3 12 21 12 21z';

/**
 * Attraction summary card — the primary content unit. Composes Rating + Badge.
 * Image area falls back to a night gradient when no `image` is given.
 */
export function AttractionCard({
  name,
  category,
  categoryColor = 'var(--accent)',
  image,
  rating,
  reviews,
  distance,
  open,
  featured = false,
  price,
  favorite: favoriteProp,
  onFavorite,
  onClick,
  style,
  ...rest
}) {
  const [fav, setFav] = useState(!!favoriteProp);
  const isFav = favoriteProp != null ? favoriteProp : fav;

  return (
    <div
      onClick={onClick}
      style={{
        width: '100%', background: 'var(--surface-card)',
        border: `1px solid ${featured ? 'var(--aurora)' : 'var(--border-subtle)'}`,
        borderRadius: 'var(--radius-lg)', overflow: 'hidden', cursor: onClick ? 'pointer' : 'default',
        boxShadow: 'var(--shadow-md)',
        transition: 'transform var(--dur-base) var(--ease-standard), box-shadow var(--dur-base) var(--ease-standard)',
        ...style,
      }}
      onMouseEnter={(e) => { if (onClick) { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = 'var(--shadow-lg)'; } }}
      onMouseLeave={(e) => { if (onClick) { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'var(--shadow-md)'; } }}
      {...rest}
    >
      {/* Image / cover */}
      <div style={{
        position: 'relative', height: 150,
        background: image ? `center/cover no-repeat url(${image})`
          : 'radial-gradient(120% 120% at 75% 0%, #252178, #100f46 55%, #07061d)',
      }}>
        {!image && (
          <div className="ep-starfield" style={{ position: 'absolute', inset: 0, opacity: 0.8, backgroundColor: 'transparent' }} />
        )}
        <div style={{ position: 'absolute', top: 12, left: 12, display: 'flex', gap: 6 }}>
          {featured && <Badge tone="aurora" solid>★ Destaque</Badge>}
          {category && <Badge tone="neutral" style={{ background: 'var(--surface-overlay)', backdropFilter: 'blur(6px)' }}>
            <span style={{ width: 7, height: 7, borderRadius: '50%', background: categoryColor, display: 'inline-block' }} />{category}
          </Badge>}
        </div>
        <button
          type="button"
          onClick={(e) => { e.stopPropagation(); setFav(!isFav); onFavorite && onFavorite(!isFav); }}
          aria-label="Favoritar"
          style={{
            position: 'absolute', top: 10, right: 10, width: 34, height: 34,
            display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
            borderRadius: '50%', border: 'none', cursor: 'pointer',
            background: 'var(--surface-overlay)', backdropFilter: 'blur(6px)',
          }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24"
               fill={isFav ? 'var(--aurora)' : 'none'} stroke={isFav ? 'var(--aurora)' : 'var(--text-primary)'} strokeWidth="2">
            <path d={HEART} />
          </svg>
        </button>
      </div>

      {/* Body */}
      <div style={{ padding: 'var(--space-4)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: 8 }}>
          <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-lg)', fontWeight: 700, margin: 0, color: 'var(--text-primary)', letterSpacing: '-0.01em' }}>{name}</h3>
          {price && <span style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', whiteSpace: 'nowrap' }}>{price}</span>}
        </div>

        {rating != null && (
          <div style={{ marginTop: 8 }}>
            <Rating value={rating} count={reviews} size={15} showValue />
          </div>
        )}

        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginTop: 12, fontFamily: 'var(--font-body)', fontSize: 'var(--text-sm)', color: 'var(--text-secondary)' }}>
          {open != null && (
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, color: open ? 'var(--success)' : 'var(--danger)', fontWeight: 600 }}>
              <span style={{ width: 7, height: 7, borderRadius: '50%', background: 'currentColor' }} />
              {open ? 'Aberto agora' : 'Fechado'}
            </span>
          )}
          {distance && <span>{distance}</span>}
        </div>
      </div>
    </div>
  );
}
