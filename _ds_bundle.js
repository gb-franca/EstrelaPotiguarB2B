/* @ds-bundle: {"format":3,"namespace":"EstrelaPotiguarDesignSystem_69a35c","components":[{"name":"AttractionCard","sourcePath":"components/brand/AttractionCard.jsx"},{"name":"MapPin","sourcePath":"components/brand/MapPin.jsx"},{"name":"ThemeToggle","sourcePath":"components/brand/ThemeToggle.jsx"},{"name":"Avatar","sourcePath":"components/core/Avatar.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Input","sourcePath":"components/core/Input.jsx"},{"name":"Rating","sourcePath":"components/core/Rating.jsx"},{"name":"Switch","sourcePath":"components/core/Switch.jsx"},{"name":"Tabs","sourcePath":"components/core/Tabs.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"}],"sourceHashes":{"components/brand/AttractionCard.jsx":"94e18e523ce2","components/brand/MapPin.jsx":"856961e1f9f5","components/brand/ThemeToggle.jsx":"097a1555ee5f","components/core/Avatar.jsx":"521b35a6b39f","components/core/Badge.jsx":"a8c444603d64","components/core/Button.jsx":"1c2d950671b4","components/core/Card.jsx":"e6eadfdf2723","components/core/IconButton.jsx":"dac72b686e55","components/core/Input.jsx":"e7ff4f7cce25","components/core/Rating.jsx":"45ab868c2a0c","components/core/Switch.jsx":"43cd758bcb3f","components/core/Tabs.jsx":"5d58daa09f3a","components/core/Tag.jsx":"59e9d36227f2","ui_kits/mapa/Controls.jsx":"5cf606ddecad","ui_kits/mapa/DetailPanel.jsx":"4fb04a07d9e1","ui_kits/mapa/MapApp.jsx":"add30340546a","ui_kits/mapa/MapCanvas.jsx":"267e78ec1f2b","ui_kits/mapa/Sidebar.jsx":"5d75e085f1ae","ui_kits/mapa/data.js":"56a086afdcdd","ui_kits/mapa/icons.jsx":"9db16dfc76c0"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.EstrelaPotiguarDesignSystem_69a35c = window.EstrelaPotiguarDesignSystem_69a35c || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/brand/MapPin.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SPARKLE = 'M50 3 C54.5 31 69 45.5 97 50 C69 54.5 54.5 69 50 97 C45.5 69 31 54.5 3 50 C31 45.5 45.5 31 50 3 Z';

/**
 * A star map pin — the core wayfinding mark. An attraction on the night map.
 * `selected` enlarges the pin and turns on the glow.
 */
function MapPin({
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
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    onClick: onClick,
    "aria-label": label || 'atração',
    style: {
      display: 'inline-flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '4px',
      background: 'none',
      border: 'none',
      padding: 0,
      cursor: 'pointer',
      transition: 'transform var(--dur-base) var(--ease-spring)',
      transform: selected ? 'translateY(-2px)' : 'none',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    className: twinkle ? 'ep-twinkle' : undefined,
    style: {
      display: 'inline-flex',
      width: dim,
      height: dim,
      filter: selected ? `drop-shadow(var(--glow-md))` : 'drop-shadow(0 2px 4px rgba(4,4,20,0.5))',
      transition: 'width var(--dur-base) var(--ease-spring), height var(--dur-base) var(--ease-spring)'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 100 100",
    width: "100%",
    height: "100%"
  }, /*#__PURE__*/React.createElement("path", {
    d: SPARKLE,
    fill: color,
    stroke: "rgba(4,4,20,0.35)",
    strokeWidth: selected ? 2 : 3
  }), /*#__PURE__*/React.createElement("path", {
    d: SPARKLE,
    fill: "rgba(255,255,255,0.35)",
    transform: "translate(50 42) scale(0.34) translate(-50 -50)"
  }))), label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-2xs)',
      fontWeight: 'var(--weight-semibold)',
      color: 'var(--text-primary)',
      background: 'var(--surface-card)',
      padding: '2px 8px',
      borderRadius: 'var(--radius-full)',
      border: '1px solid var(--border-subtle)',
      whiteSpace: 'nowrap',
      boxShadow: 'var(--shadow-sm)'
    }
  }, label));
}
Object.assign(__ds_scope, { MapPin });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/MapPin.jsx", error: String((e && e.message) || e) }); }

// components/brand/ThemeToggle.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const MOON = 'M21 12.8A9 9 0 1 1 11.2 3 7 7 0 0 0 21 12.8z';
const SUN_RAYS = [[12, 1, 12, 4], [12, 20, 12, 23], [4.2, 4.2, 6.3, 6.3], [17.7, 17.7, 19.8, 19.8], [1, 12, 4, 12], [20, 12, 23, 12], [4.2, 19.8, 6.3, 17.7], [17.7, 6.3, 19.8, 4.2]];

/**
 * Day/night theme toggle. A pill that slides a sun/moon knob; flips the
 * `data-theme` attribute on the chosen root (default <html>) unless controlled.
 */
function ThemeToggle({
  theme,
  onChange,
  target,
  style,
  ...rest
}) {
  const isControlled = theme != null;
  const [internal, setInternal] = React.useState('dark');
  const current = isControlled ? theme : internal;
  const dark = current === 'dark';
  const apply = next => {
    if (!isControlled) {
      setInternal(next);
      const root = target || (typeof document !== 'undefined' ? document.documentElement : null);
      if (root) root.setAttribute('data-theme', next);
    }
    onChange && onChange(next);
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    role: "switch",
    "aria-checked": dark,
    "aria-label": dark ? 'Modo noturno' : 'Modo diurno',
    onClick: () => apply(dark ? 'light' : 'dark'),
    style: {
      position: 'relative',
      width: 64,
      height: 32,
      padding: 3,
      borderRadius: 'var(--radius-full)',
      background: dark ? 'var(--surface-inset)' : 'var(--accent-soft)',
      border: '1px solid var(--border-default)',
      cursor: 'pointer',
      transition: 'background var(--dur-base) var(--ease-standard)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 3,
      left: dark ? 3 : 'calc(100% - 29px)',
      width: 26,
      height: 26,
      borderRadius: '50%',
      background: dark ? 'var(--surface-raised)' : 'var(--accent)',
      boxShadow: dark ? 'var(--shadow-sm)' : 'var(--glow-sm)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'left var(--dur-base) var(--ease-standard), background var(--dur-base) var(--ease-standard)'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "15",
    height: "15",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: dark ? 'var(--accent)' : 'var(--on-accent)',
    strokeWidth: "2",
    strokeLinecap: "round"
  }, dark ? /*#__PURE__*/React.createElement("path", {
    d: MOON,
    fill: "var(--accent)",
    stroke: "none"
  }) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "4.2",
    fill: "var(--on-accent)",
    stroke: "none"
  }), SUN_RAYS.map((r, i) => /*#__PURE__*/React.createElement("line", {
    key: i,
    x1: r[0],
    y1: r[1],
    x2: r[2],
    y2: r[3]
  }))))));
}
Object.assign(__ds_scope, { ThemeToggle });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/ThemeToggle.jsx", error: String((e && e.message) || e) }); }

// components/core/Avatar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Avatar with image, or initials fallback on a night surface.
 */
function Avatar({
  src,
  name = '',
  size = 40,
  ring = false,
  style,
  ...rest
}) {
  const initials = name.trim().split(/\s+/).slice(0, 2).map(w => w[0]).join('').toUpperCase();
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: size,
    height: size,
    flexShrink: 0,
    borderRadius: '50%',
    overflow: 'hidden',
    background: 'var(--surface-raised)',
    color: 'var(--accent)',
    fontFamily: 'var(--font-body)',
    fontWeight: 'var(--weight-semibold)',
    fontSize: Math.round(size * 0.4),
    border: ring ? '2px solid var(--accent)' : '1px solid var(--border-subtle)',
    boxShadow: ring ? 'var(--glow-sm)' : 'none',
    ...style
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: base
  }, rest), src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: name,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }) : initials || '★');
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const tones = {
  neutral: {
    background: 'var(--surface-raised)',
    color: 'var(--text-secondary)',
    border: 'var(--border-subtle)'
  },
  star: {
    background: 'var(--accent-soft)',
    color: 'var(--accent)',
    border: 'transparent'
  },
  aurora: {
    background: 'var(--aurora-soft)',
    color: 'var(--aurora)',
    border: 'transparent'
  },
  mare: {
    background: 'var(--mare-soft)',
    color: 'var(--mare)',
    border: 'transparent'
  },
  success: {
    background: 'var(--success-soft)',
    color: 'var(--success)',
    border: 'transparent'
  },
  danger: {
    background: 'var(--danger-soft)',
    color: 'var(--danger)',
    border: 'transparent'
  },
  info: {
    background: 'var(--info-soft)',
    color: 'var(--info)',
    border: 'transparent'
  }
};

/**
 * Small status / metadata pill — "Aberto", "Grátis", "Top 10".
 */
function Badge({
  children,
  tone = 'neutral',
  solid = false,
  dot = false,
  leadingIcon,
  style,
  ...rest
}) {
  const t = tones[tone] || tones.neutral;
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '6px',
    height: '24px',
    padding: dot ? '0 10px 0 8px' : '0 10px',
    fontFamily: 'var(--font-body)',
    fontSize: 'var(--text-xs)',
    fontWeight: 'var(--weight-semibold)',
    letterSpacing: '0.01em',
    lineHeight: 1,
    whiteSpace: 'nowrap',
    borderRadius: 'var(--radius-full)',
    background: solid ? t.color : t.background,
    color: solid ? 'var(--surface-canvas)' : t.color,
    border: `1px solid ${solid ? 'transparent' : t.border}`,
    ...style
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: base
  }, rest), dot && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: '50%',
      background: 'currentColor',
      flexShrink: 0
    }
  }), leadingIcon, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const sizes = {
  sm: {
    height: 'var(--control-sm)',
    padding: '0 14px',
    font: 'var(--text-sm)',
    gap: '6px'
  },
  md: {
    height: 'var(--control-md)',
    padding: '0 20px',
    font: 'var(--text-base)',
    gap: '8px'
  },
  lg: {
    height: 'var(--control-lg)',
    padding: '0 28px',
    font: 'var(--text-md)',
    gap: '10px'
  }
};
const variants = {
  primary: {
    background: 'var(--accent)',
    color: 'var(--on-accent)',
    border: '1px solid transparent'
  },
  aurora: {
    background: 'var(--aurora)',
    color: 'var(--text-on-aurora)',
    border: '1px solid transparent'
  },
  secondary: {
    background: 'transparent',
    color: 'var(--text-primary)',
    border: '1px solid var(--border-strong)'
  },
  ghost: {
    background: 'transparent',
    color: 'var(--text-primary)',
    border: '1px solid transparent'
  },
  subtle: {
    background: 'var(--accent-soft)',
    color: 'var(--accent)',
    border: '1px solid transparent'
  }
};

/**
 * Estrela Potiguar primary action button.
 */
function Button({
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
    ...style
  };
  const onEnter = e => {
    if (disabled || loading) return;
    if (isGlow) e.currentTarget.style.boxShadow = variant === 'aurora' ? 'var(--glow-aurora)' : 'var(--glow-md)';
    e.currentTarget.style.filter = 'brightness(1.05)';
    if (variant === 'secondary' || variant === 'ghost') e.currentTarget.style.background = 'var(--accent-soft)';
  };
  const onLeave = e => {
    e.currentTarget.style.boxShadow = 'none';
    e.currentTarget.style.filter = 'none';
    if (variant === 'secondary' || variant === 'ghost') e.currentTarget.style.background = 'transparent';
  };
  const onDown = e => {
    if (!disabled && !loading) e.currentTarget.style.transform = 'scale(0.97)';
  };
  const onUp = e => {
    e.currentTarget.style.transform = 'scale(1)';
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled || loading,
    onClick: onClick,
    style: base,
    onMouseEnter: onEnter,
    onMouseLeave: e => {
      onLeave(e);
      onUp(e);
    },
    onMouseDown: onDown,
    onMouseUp: onUp
  }, rest), loading ? /*#__PURE__*/React.createElement(Spinner, null) : leadingIcon, children, !loading && trailingIcon);
}
function Spinner() {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      width: '1em',
      height: '1em',
      borderRadius: '50%',
      border: '2px solid currentColor',
      borderTopColor: 'transparent',
      display: 'inline-block',
      animation: 'ep-btn-spin 0.7s linear infinite'
    }
  }, /*#__PURE__*/React.createElement("style", null, `@keyframes ep-btn-spin{to{transform:rotate(360deg)}}`));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Surface container with night-sky elevation. Optional interactive hover-lift.
 */
function Card({
  children,
  padding = 'md',
  interactive = false,
  glow = false,
  style,
  ...rest
}) {
  const pads = {
    none: '0',
    sm: 'var(--space-4)',
    md: 'var(--space-5)',
    lg: 'var(--space-6)'
  };
  const base = {
    background: 'var(--surface-card)',
    border: '1px solid var(--border-subtle)',
    borderRadius: 'var(--radius-lg)',
    boxShadow: 'var(--shadow-md)',
    padding: pads[padding] ?? pads.md,
    color: 'var(--text-primary)',
    transition: 'transform var(--dur-base) var(--ease-standard), box-shadow var(--dur-base) var(--ease-standard), border-color var(--dur-base) var(--ease-standard)',
    ...style
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: base,
    onMouseEnter: e => {
      if (!interactive) return;
      e.currentTarget.style.transform = 'translateY(-3px)';
      e.currentTarget.style.boxShadow = glow ? 'var(--glow-md)' : 'var(--shadow-lg)';
      e.currentTarget.style.borderColor = 'var(--border-default)';
    },
    onMouseLeave: e => {
      if (!interactive) return;
      e.currentTarget.style.transform = 'translateY(0)';
      e.currentTarget.style.boxShadow = 'var(--shadow-md)';
      e.currentTarget.style.borderColor = 'var(--border-subtle)';
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const sizes = {
  sm: {
    box: '32px',
    font: '16px'
  },
  md: {
    box: '42px',
    font: '20px'
  },
  lg: {
    box: '52px',
    font: '24px'
  }
};

/**
 * Circular icon-only button — toolbar actions, map controls, close buttons.
 */
function IconButton({
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
    solid: {
      background: 'var(--surface-raised)',
      color: 'var(--text-primary)',
      border: '1px solid var(--border-subtle)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--text-secondary)',
      border: '1px solid transparent'
    },
    floating: {
      background: 'var(--surface-card)',
      color: 'var(--text-primary)',
      border: '1px solid var(--border-subtle)',
      boxShadow: 'var(--shadow-float)'
    },
    accent: {
      background: 'var(--accent)',
      color: 'var(--on-accent)',
      border: '1px solid transparent'
    }
  };
  const v = variants[variant] || variants.ghost;
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: s.box,
    height: s.box,
    fontSize: s.font,
    borderRadius: 'var(--radius-full)',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.45 : 1,
    transition: 'background var(--dur-base) var(--ease-standard), color var(--dur-base) var(--ease-standard), transform var(--dur-fast) var(--ease-standard)',
    ...v,
    ...(active ? {
      background: 'var(--accent-soft)',
      color: 'var(--accent)'
    } : null),
    ...style
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    "aria-label": label,
    title: label,
    disabled: disabled,
    onClick: onClick,
    style: base,
    onMouseEnter: e => {
      if (!disabled && !active && variant === 'ghost') {
        e.currentTarget.style.background = 'var(--accent-soft)';
        e.currentTarget.style.color = 'var(--text-primary)';
      }
    },
    onMouseLeave: e => {
      if (!active && variant === 'ghost') {
        e.currentTarget.style.background = 'transparent';
        e.currentTarget.style.color = 'var(--text-secondary)';
      }
    },
    onMouseDown: e => {
      if (!disabled) e.currentTarget.style.transform = 'scale(0.9)';
    },
    onMouseUp: e => {
      e.currentTarget.style.transform = 'scale(1)';
    }
  }, rest), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
/**
 * Text input with optional leading icon — search, forms, filters.
 */
function Input({
  value,
  defaultValue,
  onChange,
  placeholder,
  type = 'text',
  size = 'md',
  leadingIcon,
  trailingIcon,
  disabled = false,
  invalid = false,
  fullWidth = true,
  style,
  ...rest
}) {
  const [focused, setFocused] = useState(false);
  const heights = {
    sm: 'var(--control-sm)',
    md: 'var(--control-md)',
    lg: 'var(--control-lg)'
  };
  const wrap = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '10px',
    width: fullWidth ? '100%' : 'auto',
    height: heights[size] || heights.md,
    padding: '0 16px',
    background: 'var(--surface-inset)',
    color: 'var(--text-primary)',
    border: `1px solid ${invalid ? 'var(--danger)' : focused ? 'var(--border-focus)' : 'var(--border-default)'}`,
    borderRadius: 'var(--radius-md)',
    boxShadow: focused ? 'var(--ring)' : 'none',
    transition: 'border-color var(--dur-base) var(--ease-standard), box-shadow var(--dur-base) var(--ease-standard)',
    opacity: disabled ? 0.5 : 1,
    ...style
  };
  const input = {
    flex: 1,
    minWidth: 0,
    border: 'none',
    outline: 'none',
    background: 'transparent',
    color: 'var(--text-primary)',
    fontFamily: 'var(--font-body)',
    fontSize: size === 'sm' ? 'var(--text-sm)' : 'var(--text-base)'
  };
  const iconStyle = {
    display: 'inline-flex',
    color: 'var(--text-muted)',
    fontSize: '18px',
    flexShrink: 0
  };
  return /*#__PURE__*/React.createElement("label", {
    style: wrap
  }, leadingIcon && /*#__PURE__*/React.createElement("span", {
    style: iconStyle
  }, leadingIcon), /*#__PURE__*/React.createElement("input", _extends({
    type: type,
    value: value,
    defaultValue: defaultValue,
    onChange: onChange,
    placeholder: placeholder,
    disabled: disabled,
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false),
    style: input
  }, rest)), trailingIcon && /*#__PURE__*/React.createElement("span", {
    style: iconStyle
  }, trailingIcon));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Input.jsx", error: String((e && e.message) || e) }); }

// components/core/Rating.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const STAR = 'M12 2.6l2.6 5.7 6.2.6-4.7 4.1 1.4 6.1L12 16.9 6.5 19.2l1.4-6.1L3.2 8.9l6.2-.6z';
function Star({
  fill,
  size
}) {
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    style: {
      display: 'block'
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: STAR,
    fill: fill,
    stroke: "var(--accent)",
    strokeWidth: "1",
    strokeLinejoin: "round"
  }));
}

/**
 * Five-star rating. Read-only display or interactive input.
 */
function Rating({
  value = 0,
  count,
  max = 5,
  size = 16,
  onChange,
  showValue = false,
  style,
  ...rest
}) {
  const interactive = !!onChange;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '8px',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      gap: '2px'
    }
  }, Array.from({
    length: max
  }).map((_, i) => {
    const filled = i < Math.round(value);
    return /*#__PURE__*/React.createElement("span", {
      key: i,
      onClick: () => interactive && onChange(i + 1),
      style: {
        cursor: interactive ? 'pointer' : 'default',
        lineHeight: 0
      }
    }, /*#__PURE__*/React.createElement(Star, {
      size: size,
      fill: filled ? 'var(--accent)' : 'transparent'
    }));
  })), showValue && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-sm)',
      fontWeight: 'var(--weight-semibold)',
      color: 'var(--text-primary)',
      fontVariantNumeric: 'tabular-nums'
    }
  }, value.toFixed(1)), count != null && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-sm)',
      color: 'var(--text-muted)'
    }
  }, "(", count, ")"));
}
Object.assign(__ds_scope, { Rating });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Rating.jsx", error: String((e && e.message) || e) }); }

// components/brand/AttractionCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
const HEART = 'M12 21s-7.5-4.7-10-9.3C.6 9 2 5.5 5.2 5.1c2-.2 3.5 1 4.8 2.6 1.3-1.6 2.8-2.8 4.8-2.6C18 5.5 19.4 9 18 11.7 15.5 16.3 12 21 12 21z';

/**
 * Attraction summary card — the primary content unit. Composes Rating + Badge.
 * Image area falls back to a night gradient when no `image` is given.
 */
function AttractionCard({
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
  return /*#__PURE__*/React.createElement("div", _extends({
    onClick: onClick,
    style: {
      width: '100%',
      background: 'var(--surface-card)',
      border: `1px solid ${featured ? 'var(--aurora)' : 'var(--border-subtle)'}`,
      borderRadius: 'var(--radius-lg)',
      overflow: 'hidden',
      cursor: onClick ? 'pointer' : 'default',
      boxShadow: 'var(--shadow-md)',
      transition: 'transform var(--dur-base) var(--ease-standard), box-shadow var(--dur-base) var(--ease-standard)',
      ...style
    },
    onMouseEnter: e => {
      if (onClick) {
        e.currentTarget.style.transform = 'translateY(-3px)';
        e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
      }
    },
    onMouseLeave: e => {
      if (onClick) {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = 'var(--shadow-md)';
      }
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      height: 150,
      background: image ? `center/cover no-repeat url(${image})` : 'radial-gradient(120% 120% at 75% 0%, #252178, #100f46 55%, #07061d)'
    }
  }, !image && /*#__PURE__*/React.createElement("div", {
    className: "ep-starfield",
    style: {
      position: 'absolute',
      inset: 0,
      opacity: 0.8,
      backgroundColor: 'transparent'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 12,
      left: 12,
      display: 'flex',
      gap: 6
    }
  }, featured && /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: "aurora",
    solid: true
  }, "\u2605 Destaque"), category && /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: "neutral",
    style: {
      background: 'var(--surface-overlay)',
      backdropFilter: 'blur(6px)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 7,
      height: 7,
      borderRadius: '50%',
      background: categoryColor,
      display: 'inline-block'
    }
  }), category)), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: e => {
      e.stopPropagation();
      setFav(!isFav);
      onFavorite && onFavorite(!isFav);
    },
    "aria-label": "Favoritar",
    style: {
      position: 'absolute',
      top: 10,
      right: 10,
      width: 34,
      height: 34,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: '50%',
      border: 'none',
      cursor: 'pointer',
      background: 'var(--surface-overlay)',
      backdropFilter: 'blur(6px)'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 24 24",
    fill: isFav ? 'var(--aurora)' : 'none',
    stroke: isFav ? 'var(--aurora)' : 'var(--text-primary)',
    strokeWidth: "2"
  }, /*#__PURE__*/React.createElement("path", {
    d: HEART
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-lg)',
      fontWeight: 700,
      margin: 0,
      color: 'var(--text-primary)',
      letterSpacing: '-0.01em'
    }
  }, name), price && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-sm)',
      color: 'var(--text-secondary)',
      whiteSpace: 'nowrap'
    }
  }, price)), rating != null && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 8
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Rating, {
    value: rating,
    count: reviews,
    size: 15,
    showValue: true
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      marginTop: 12,
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-sm)',
      color: 'var(--text-secondary)'
    }
  }, open != null && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      color: open ? 'var(--success)' : 'var(--danger)',
      fontWeight: 600
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 7,
      height: 7,
      borderRadius: '50%',
      background: 'currentColor'
    }
  }), open ? 'Aberto agora' : 'Fechado'), distance && /*#__PURE__*/React.createElement("span", null, distance))));
}
Object.assign(__ds_scope, { AttractionCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/AttractionCard.jsx", error: String((e && e.message) || e) }); }

// components/core/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Toggle switch. Default track lights up star-yellow when on.
 */
function Switch({
  checked = false,
  onChange,
  disabled = false,
  size = 'md',
  label,
  style,
  ...rest
}) {
  const dims = {
    sm: {
      w: 36,
      h: 20,
      k: 14
    },
    md: {
      w: 46,
      h: 26,
      k: 20
    }
  }[size] || {
    w: 46,
    h: 26,
    k: 20
  };
  const track = {
    position: 'relative',
    display: 'inline-flex',
    alignItems: 'center',
    flexShrink: 0,
    width: dims.w,
    height: dims.h,
    borderRadius: 'var(--radius-full)',
    background: checked ? 'var(--accent)' : 'var(--surface-inset)',
    border: `1px solid ${checked ? 'transparent' : 'var(--border-default)'}`,
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.5 : 1,
    transition: 'background var(--dur-base) var(--ease-standard)',
    padding: 0
  };
  const knob = {
    position: 'absolute',
    top: '50%',
    left: checked ? `calc(100% - ${dims.k + 2}px)` : '2px',
    transform: 'translateY(-50%)',
    width: dims.k,
    height: dims.k,
    borderRadius: '50%',
    background: checked ? 'var(--on-accent)' : 'var(--text-secondary)',
    boxShadow: 'var(--shadow-sm)',
    transition: 'left var(--dur-base) var(--ease-standard), background var(--dur-base) var(--ease-standard)'
  };
  const btn = /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    role: "switch",
    "aria-checked": checked,
    disabled: disabled,
    onClick: () => !disabled && onChange && onChange(!checked),
    style: track
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: knob
  }));
  if (!label) return btn;
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '10px',
      cursor: disabled ? 'not-allowed' : 'pointer',
      ...style
    }
  }, btn, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-sm)',
      color: 'var(--text-primary)'
    }
  }, label));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Switch.jsx", error: String((e && e.message) || e) }); }

// components/core/Tabs.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Underline tab bar. The active tab is marked with a star-yellow indicator.
 * Controlled via `value` / `onChange`.
 */
function Tabs({
  items = [],
  value,
  onChange,
  style,
  ...rest
}) {
  const wrap = {
    display: 'inline-flex',
    gap: 'var(--space-5)',
    borderBottom: '1px solid var(--border-subtle)',
    ...style
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: wrap,
    role: "tablist"
  }, rest), items.map(it => {
    const key = it.value ?? it;
    const label = it.label ?? it;
    const active = key === value;
    return /*#__PURE__*/React.createElement("button", {
      key: key,
      role: "tab",
      "aria-selected": active,
      onClick: () => onChange && onChange(key),
      style: {
        position: 'relative',
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        padding: '0 0 12px',
        margin: 0,
        fontFamily: 'var(--font-body)',
        fontSize: 'var(--text-base)',
        fontWeight: active ? 'var(--weight-semibold)' : 'var(--weight-regular)',
        color: active ? 'var(--text-primary)' : 'var(--text-secondary)',
        transition: 'color var(--dur-base) var(--ease-standard)',
        display: 'inline-flex',
        alignItems: 'center',
        gap: '7px'
      },
      onMouseEnter: e => {
        if (!active) e.currentTarget.style.color = 'var(--text-primary)';
      },
      onMouseLeave: e => {
        if (!active) e.currentTarget.style.color = 'var(--text-secondary)';
      }
    }, it.icon, label, it.count != null && /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 'var(--text-xs)',
        color: 'var(--text-muted)',
        fontVariantNumeric: 'tabular-nums'
      }
    }, it.count), /*#__PURE__*/React.createElement("span", {
      style: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: -1,
        height: 2,
        borderRadius: '2px 2px 0 0',
        background: active ? 'var(--accent)' : 'transparent',
        boxShadow: active ? 'var(--glow-sm)' : 'none',
        transition: 'background var(--dur-base) var(--ease-standard)'
      }
    }));
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tabs.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Category / filter chip — selectable, used in the map filter bar.
 */
function Tag({
  children,
  icon,
  selected = false,
  onClick,
  color,
  style,
  ...rest
}) {
  const interactive = !!onClick;
  const accent = color || 'var(--accent)';
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '7px',
    height: '34px',
    padding: '0 14px',
    fontFamily: 'var(--font-body)',
    fontSize: 'var(--text-sm)',
    fontWeight: 'var(--weight-medium)',
    lineHeight: 1,
    whiteSpace: 'nowrap',
    borderRadius: 'var(--radius-full)',
    cursor: interactive ? 'pointer' : 'default',
    userSelect: 'none',
    background: selected ? accent : 'var(--surface-card)',
    color: selected ? 'var(--on-accent)' : 'var(--text-secondary)',
    border: `1px solid ${selected ? 'transparent' : 'var(--border-default)'}`,
    transition: 'background var(--dur-base) var(--ease-standard), color var(--dur-base) var(--ease-standard), border-color var(--dur-base) var(--ease-standard)',
    ...style
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    onClick: onClick,
    style: base,
    onMouseEnter: e => {
      if (interactive && !selected) e.currentTarget.style.borderColor = 'var(--border-strong)';
    },
    onMouseLeave: e => {
      if (interactive && !selected) e.currentTarget.style.borderColor = 'var(--border-default)';
    }
  }, rest), icon && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      fontSize: '16px',
      color: selected ? 'currentColor' : accent
    }
  }, icon), children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// ui_kits/mapa/Controls.jsx
try { (() => {
/* Category filter chips (in-flow, for the sidebar) + floating map controls. */
const {
  Tag,
  IconButton
} = window.EstrelaPotiguarDesignSystem_69a35c;
function FilterChips({
  active,
  onToggle
}) {
  const {
    Waves,
    Landmark,
    Mountain,
    Trees,
    Star
  } = window.EPIcons;
  const icons = {
    praias: /*#__PURE__*/React.createElement(Waves, {
      size: 15
    }),
    historicos: /*#__PURE__*/React.createElement(Landmark, {
      size: 15
    }),
    dunas: /*#__PURE__*/React.createElement(Mountain, {
      size: 15
    }),
    natureza: /*#__PURE__*/React.createElement(Trees, {
      size: 15
    }),
    gastronomia: /*#__PURE__*/React.createElement(Star, {
      size: 15
    })
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      overflowX: 'auto',
      padding: '2px 0 4px'
    }
  }, window.EP_CATEGORIES.map(c => /*#__PURE__*/React.createElement(Tag, {
    key: c.id,
    icon: icons[c.id],
    color: c.color,
    selected: active.includes(c.id),
    onClick: () => onToggle(c.id),
    style: {
      flexShrink: 0
    }
  }, c.label)));
}
function MapControls({
  onLocate
}) {
  const {
    Plus,
    Minus,
    Locate,
    Layers
  } = window.EPIcons;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      right: 18,
      bottom: 24,
      zIndex: 50,
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(IconButton, {
    label: "Camadas",
    variant: "floating"
  }, /*#__PURE__*/React.createElement(Layers, {
    size: 20
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      borderRadius: 'var(--radius-full)',
      overflow: 'hidden',
      boxShadow: 'var(--shadow-float)'
    }
  }, /*#__PURE__*/React.createElement(IconButton, {
    label: "Aproximar",
    variant: "floating",
    style: {
      borderRadius: 0,
      boxShadow: 'none'
    }
  }, /*#__PURE__*/React.createElement(Plus, {
    size: 20
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 1,
      background: 'var(--border-subtle)'
    }
  }), /*#__PURE__*/React.createElement(IconButton, {
    label: "Afastar",
    variant: "floating",
    style: {
      borderRadius: 0,
      boxShadow: 'none'
    }
  }, /*#__PURE__*/React.createElement(Minus, {
    size: 20
  }))), /*#__PURE__*/React.createElement(IconButton, {
    label: "Minha localiza\xE7\xE3o",
    variant: "accent",
    onClick: onLocate
  }, /*#__PURE__*/React.createElement(Locate, {
    size: 20
  })));
}
window.FilterChips = FilterChips;
window.MapControls = MapControls;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mapa/Controls.jsx", error: String((e && e.message) || e) }); }

// ui_kits/mapa/DetailPanel.jsx
try { (() => {
/* Detail panel — slides over the sidebar when a star is selected. */
const {
  Button,
  IconButton,
  Rating,
  Badge,
  Tabs
} = window.EstrelaPotiguarDesignSystem_69a35c;
function InfoRow({
  icon,
  label,
  value,
  accent
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      padding: '12px 0',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: accent || 'var(--text-muted)',
      display: 'flex',
      flexShrink: 0
    }
  }, icon), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      color: 'var(--text-secondary)',
      fontSize: 14
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-primary)',
      fontSize: 14,
      fontWeight: 600
    }
  }, value));
}
function DetailPanel({
  item,
  onBack,
  theme
}) {
  const [tab, setTab] = React.useState('sobre');
  const {
    ChevLeft,
    Heart,
    Route,
    Share,
    Clock,
    Pin,
    Star,
    Camera
  } = window.EPIcons;
  const color = (window.EP_CATEGORIES.find(c => c.id === item.category) || {}).color || 'var(--accent)';
  const [fav, setFav] = React.useState(false);
  return /*#__PURE__*/React.createElement("aside", {
    style: {
      width: 'var(--sheet-width)',
      flexShrink: 0,
      height: '100%',
      overflowY: 'auto',
      background: 'var(--surface-card)',
      borderRight: '1px solid var(--border-subtle)',
      zIndex: 45
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      height: 220,
      background: 'radial-gradient(120% 120% at 70% -10%, #252178, #100f46 55%, #07061d)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "ep-starfield",
    style: {
      position: 'absolute',
      inset: 0,
      backgroundColor: 'transparent',
      opacity: 0.85
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(180deg, rgba(7,6,29,0.35) 0%, transparent 35%, var(--surface-card) 100%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 16,
      left: 16
    }
  }, /*#__PURE__*/React.createElement(IconButton, {
    label: "Voltar",
    variant: "floating",
    onClick: onBack
  }, /*#__PURE__*/React.createElement(ChevLeft, {
    size: 20
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 16,
      right: 16,
      display: 'flex',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(IconButton, {
    label: "Compartilhar",
    variant: "floating"
  }, /*#__PURE__*/React.createElement(Share, {
    size: 18
  })), /*#__PURE__*/React.createElement(IconButton, {
    label: "Favoritar",
    variant: "floating",
    onClick: () => setFav(!fav)
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: fav ? 'var(--aurora)' : 'currentColor'
    }
  }, /*#__PURE__*/React.createElement(Heart, {
    size: 18,
    fill: fav ? 'var(--aurora)' : 'none'
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 20,
      right: 20,
      bottom: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      marginBottom: 10
    }
  }, item.featured && /*#__PURE__*/React.createElement(Badge, {
    tone: "aurora",
    solid: true
  }, "\u2605 Destaque"), /*#__PURE__*/React.createElement(Badge, {
    tone: "neutral",
    style: {
      background: 'var(--surface-overlay)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 7,
      height: 7,
      borderRadius: '50%',
      background: color,
      display: 'inline-block'
    }
  }), item.cat), /*#__PURE__*/React.createElement(Badge, {
    tone: item.open ? 'success' : 'danger',
    dot: true
  }, item.open ? 'Aberto agora' : 'Fechado')), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 30,
      fontWeight: 700,
      margin: 0,
      color: 'var(--text-primary)',
      letterSpacing: '-0.02em'
    }
  }, item.name), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      marginTop: 8
    }
  }, /*#__PURE__*/React.createElement(Rating, {
    value: item.rating,
    count: item.reviews,
    size: 16,
    showValue: true
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-muted)',
      fontSize: 13
    }
  }, "\xB7 ", item.city)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      padding: '16px 20px'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    leadingIcon: /*#__PURE__*/React.createElement(Route, {
      size: 18
    }),
    fullWidth: true
  }, "Tra\xE7ar rota"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    leadingIcon: /*#__PURE__*/React.createElement(Camera, {
      size: 18
    })
  }, "Fotos")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 20px'
    }
  }, /*#__PURE__*/React.createElement(Tabs, {
    value: tab,
    onChange: setTab,
    items: [{
      value: 'sobre',
      label: 'Sobre'
    }, {
      value: 'info',
      label: 'Informações'
    }, {
      value: 'avaliacoes',
      label: 'Avaliações',
      count: item.reviews
    }]
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '18px 20px 28px'
    }
  }, tab === 'sobre' && /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--text-secondary)',
      fontSize: 15,
      lineHeight: 1.6,
      margin: 0
    }
  }, item.blurb), tab === 'info' && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(InfoRow, {
    icon: /*#__PURE__*/React.createElement(Clock, {
      size: 18
    }),
    label: "Hor\xE1rio",
    value: item.open ? '08h – 18h' : 'Fechado',
    accent: item.open ? 'var(--success)' : 'var(--danger)'
  }), /*#__PURE__*/React.createElement(InfoRow, {
    icon: /*#__PURE__*/React.createElement(Pin, {
      size: 18
    }),
    label: "Dist\xE2ncia",
    value: item.distance
  }), /*#__PURE__*/React.createElement(InfoRow, {
    icon: /*#__PURE__*/React.createElement(Star, {
      size: 18
    }),
    label: "Entrada",
    value: item.price,
    accent: "var(--accent)"
  })), tab === 'avaliacoes' && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 44,
      fontWeight: 700,
      color: 'var(--text-primary)',
      lineHeight: 1
    }
  }, item.rating.toFixed(1)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Rating, {
    value: item.rating,
    size: 16
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--text-muted)',
      fontSize: 13,
      marginTop: 4
    }
  }, item.reviews.toLocaleString('pt-BR'), " avalia\xE7\xF5es"))), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--text-secondary)',
      fontSize: 14,
      lineHeight: 1.6,
      margin: 0,
      fontStyle: 'italic',
      fontFamily: 'var(--font-italic)'
    }
  }, "\u201CChegamos no fim da tarde e o c\xE9u ficou estrelado. Inesquec\xEDvel.\u201D \u2014 Marina R."))));
}
window.DetailPanel = DetailPanel;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mapa/DetailPanel.jsx", error: String((e && e.message) || e) }); }

// ui_kits/mapa/MapApp.jsx
try { (() => {
/* Estrela Potiguar — map app shell. Ties sidebar, map and detail together. */
const {
  ThemeToggle,
  Avatar
} = window.EstrelaPotiguarDesignSystem_69a35c;
function MapApp() {
  const [theme, setTheme] = React.useState('dark');
  const [query, setQuery] = React.useState('');
  const [activeCats, setActiveCats] = React.useState([]);
  const [selectedId, setSelectedId] = React.useState(null);
  const all = window.EP_ATTRACTIONS;
  const filtered = all.filter(a => {
    const okCat = activeCats.length === 0 || activeCats.includes(a.category);
    const q = query.trim().toLowerCase();
    const okQ = !q || a.name.toLowerCase().includes(q) || a.city.toLowerCase().includes(q) || a.cat.toLowerCase().includes(q);
    return okCat && okQ;
  });
  const selected = all.find(a => a.id === selectedId);
  const toggleCat = id => setActiveCats(cs => cs.includes(id) ? cs.filter(c => c !== id) : [...cs, id]);
  const {
    Sidebar,
    DetailPanel,
    MapCanvas,
    MapControls
  } = window;
  return /*#__PURE__*/React.createElement("div", {
    "data-theme": theme,
    style: {
      position: 'absolute',
      inset: 0,
      display: 'flex',
      background: 'var(--surface-canvas)',
      fontFamily: 'var(--font-body)'
    }
  }, selected ? /*#__PURE__*/React.createElement(DetailPanel, {
    item: selected,
    theme: theme,
    onBack: () => setSelectedId(null)
  }) : /*#__PURE__*/React.createElement(Sidebar, {
    attractions: filtered,
    query: query,
    onQuery: setQuery,
    activeCats: activeCats,
    onToggleCat: toggleCat,
    onSelect: setSelectedId,
    selectedId: selectedId
  }), /*#__PURE__*/React.createElement("main", {
    style: {
      position: 'relative',
      flex: 1,
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement(MapCanvas, {
    attractions: filtered,
    selectedId: selectedId,
    onSelect: setSelectedId,
    theme: theme
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 18,
      right: 18,
      zIndex: 55,
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      background: 'var(--glass-tint-dark)',
      WebkitBackdropFilter: 'var(--blur-glass)',
      backdropFilter: 'var(--blur-glass)',
      border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius-full)',
      boxShadow: 'var(--shadow-float)',
      padding: '7px 10px'
    }
  }, /*#__PURE__*/React.createElement(ThemeToggle, {
    theme: theme,
    onChange: setTheme
  }), /*#__PURE__*/React.createElement(Avatar, {
    name: "Ana Lima",
    size: 34,
    ring: true
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 20,
      left: 20,
      zIndex: 40,
      fontFamily: 'var(--font-display)',
      fontSize: 13,
      fontWeight: 600,
      letterSpacing: '0.16em',
      textTransform: 'uppercase',
      color: 'var(--text-secondary)',
      background: 'var(--surface-overlay)',
      padding: '6px 12px',
      borderRadius: 'var(--radius-full)',
      WebkitBackdropFilter: 'blur(8px)',
      backdropFilter: 'blur(8px)'
    }
  }, "Litoral \xB7 Natal"), /*#__PURE__*/React.createElement(MapControls, {
    onLocate: () => setSelectedId('forte')
  })));
}
window.MapApp = MapApp;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mapa/MapApp.jsx", error: String((e && e.message) || e) }); }

// ui_kits/mapa/MapCanvas.jsx
try { (() => {
/* The night-sky map canvas. Land, ocean, roads — and an attraction as a star. */
const {
  MapPin
} = window.EstrelaPotiguarDesignSystem_69a35c;
function MapCanvas({
  attractions,
  selectedId,
  onSelect,
  theme
}) {
  const dark = theme !== 'light';
  const catColor = id => (window.EP_CATEGORIES.find(c => c.id === id) || {}).color || 'var(--accent)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      overflow: 'hidden',
      background: 'var(--map-canvas)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: dark ? 'radial-gradient(120% 80% at 85% -10%, rgba(37,33,120,0.9), transparent 60%), radial-gradient(80% 70% at 10% 110%, rgba(25,23,96,0.6), transparent 60%)' : 'radial-gradient(120% 80% at 85% -10%, rgba(207,224,242,0.9), transparent 60%)'
    }
  }), dark && /*#__PURE__*/React.createElement("div", {
    className: "ep-starfield",
    style: {
      position: 'absolute',
      inset: 0,
      backgroundColor: 'transparent',
      opacity: 0.9
    }
  }), /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 100 100",
    preserveAspectRatio: "xMidYMid slice",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%'
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M58 -5 C66 12, 70 30, 80 44 C88 56, 86 72, 96 86 L120 86 L120 -10 Z",
    fill: "var(--map-water)",
    opacity: dark ? 0.85 : 1
  }), /*#__PURE__*/React.createElement("path", {
    d: "M58 -5 C66 12, 70 30, 80 44 C88 56, 86 72, 96 86",
    fill: "none",
    stroke: dark ? 'rgba(74,209,255,0.35)' : 'rgba(20,134,196,0.4)',
    strokeWidth: "0.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M-10 -10 L58 -5 C66 12, 70 30, 80 44 C88 56, 86 72, 96 86 L-10 110 Z",
    fill: "var(--map-land)",
    opacity: dark ? 0.6 : 1
  }), /*#__PURE__*/React.createElement("ellipse", {
    cx: "40",
    cy: "52",
    rx: "7",
    ry: "4",
    fill: "var(--map-water)",
    opacity: dark ? 0.7 : 0.9
  }), /*#__PURE__*/React.createElement("g", {
    stroke: "var(--map-road)",
    strokeWidth: "0.7",
    fill: "none",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M20 25 C40 30, 55 30, 78 30"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M30 70 C45 60, 60 55, 80 44"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M78 30 C76 45, 78 55, 76 60"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M52 6 C55 25, 50 45, 64 78"
  })), /*#__PURE__*/React.createElement("path", {
    d: "M30 40 C50 36, 66 34, 78 30",
    fill: "none",
    stroke: "var(--map-water)",
    strokeWidth: "1.1",
    opacity: "0.8"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: '79%',
      top: '34%',
      transform: 'translate(-50%,-50%)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 14,
      height: 14,
      borderRadius: '50%',
      background: 'var(--info)',
      border: '3px solid var(--surface-card)',
      boxShadow: '0 0 0 6px rgba(74,209,255,0.18)'
    }
  })), attractions.map(a => /*#__PURE__*/React.createElement("div", {
    key: a.id,
    style: {
      position: 'absolute',
      left: a.x + '%',
      top: a.y + '%',
      transform: 'translate(-50%,-50%)',
      zIndex: selectedId === a.id ? 30 : 20
    }
  }, /*#__PURE__*/React.createElement(MapPin, {
    color: catColor(a.category),
    selected: selectedId === a.id,
    twinkle: a.featured && selectedId !== a.id,
    label: selectedId === a.id ? a.name : undefined,
    onClick: () => onSelect(a.id)
  }))));
}
window.MapCanvas = MapCanvas;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mapa/MapCanvas.jsx", error: String((e && e.message) || e) }); }

// ui_kits/mapa/Sidebar.jsx
try { (() => {
/* Left results panel: brand + search, filters, sorted attraction list. */
const {
  Input,
  AttractionCard,
  Badge
} = window.EstrelaPotiguarDesignSystem_69a35c;
function Sidebar({
  attractions,
  query,
  onQuery,
  activeCats,
  onToggleCat,
  onSelect,
  selectedId
}) {
  const {
    Search
  } = window.EPIcons;
  const FilterChips = window.FilterChips;
  return /*#__PURE__*/React.createElement("aside", {
    style: {
      width: 'var(--sheet-width)',
      flexShrink: 0,
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      background: 'var(--surface-card)',
      borderRight: '1px solid var(--border-subtle)',
      zIndex: 40
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '18px 20px 12px',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo/estrela-mark.svg",
    alt: "",
    style: {
      width: 28,
      height: 28,
      filter: 'drop-shadow(var(--glow-sm))'
    }
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 18,
      lineHeight: 1,
      color: 'var(--text-primary)'
    }
  }, "Estrela Potiguar"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: 'var(--text-muted)',
      marginTop: 3
    }
  }, "Rio Grande do Norte \xB7 Brasil"))), /*#__PURE__*/React.createElement(Input, {
    value: query,
    onChange: e => onQuery(e.target.value),
    placeholder: "Buscar praias, fortes, dunas\u2026",
    leadingIcon: /*#__PURE__*/React.createElement(Search, {
      size: 18
    })
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 12
    }
  }, /*#__PURE__*/React.createElement(FilterChips, {
    active: activeCats,
    onToggle: onToggleCat
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: 'auto',
      padding: '14px 20px 24px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      justifyContent: 'space-between',
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "ep-eyebrow"
  }, "Perto de voc\xEA"), /*#__PURE__*/React.createElement(Badge, {
    tone: "star"
  }, attractions.length, " estrelas")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, attractions.map(a => /*#__PURE__*/React.createElement(AttractionCard, {
    key: a.id,
    name: a.name,
    category: a.cat,
    categoryColor: (window.EP_CATEGORIES.find(c => c.id === a.category) || {}).color,
    rating: a.rating,
    reviews: a.reviews,
    distance: a.distance,
    open: a.open,
    price: a.price,
    featured: a.featured,
    onClick: () => onSelect(a.id),
    style: selectedId === a.id ? {
      outline: '2px solid var(--accent)',
      outlineOffset: 1
    } : null
  })), attractions.length === 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      color: 'var(--text-muted)',
      padding: '40px 0',
      fontSize: 14
    }
  }, "Nenhuma estrela por aqui. Ajuste os filtros."))));
}
window.Sidebar = Sidebar;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mapa/Sidebar.jsx", error: String((e && e.message) || e) }); }

// ui_kits/mapa/data.js
try { (() => {
// Estrela Potiguar — sample attraction data (Rio Grande do Norte, Brazil)
// x/y are positions on the stylized map canvas (percent).
window.EP_CATEGORIES = [{
  id: 'praias',
  label: 'Praias',
  color: 'var(--info)'
}, {
  id: 'historicos',
  label: 'Históricos',
  color: 'var(--aurora)'
}, {
  id: 'dunas',
  label: 'Dunas',
  color: 'var(--accent)'
}, {
  id: 'natureza',
  label: 'Natureza',
  color: 'var(--mare)'
}, {
  id: 'gastronomia',
  label: 'Gastronomia',
  color: 'var(--danger)'
}];
window.EP_ATTRACTIONS = [{
  id: 'pipa',
  name: 'Praia da Pipa',
  category: 'praias',
  cat: 'Praia',
  x: 64,
  y: 78,
  rating: 4.9,
  reviews: 3120,
  open: true,
  distance: '82 km',
  price: 'Grátis',
  city: 'Tibau do Sul',
  featured: true,
  blurb: 'Falésias, golfinhos na baía e a vida noturna mais animada do litoral sul. O cartão-postal potiguar.'
}, {
  id: 'forte',
  name: 'Forte dos Reis Magos',
  category: 'historicos',
  cat: 'Histórico',
  x: 78,
  y: 30,
  rating: 4.6,
  reviews: 980,
  open: true,
  distance: '3,1 km',
  price: 'R$ 30',
  city: 'Natal',
  blurb: 'Fortaleza em forma de estrela de cinco pontas, erguida em 1598 na foz do Rio Potengi.'
}, {
  id: 'genipabu',
  name: 'Dunas de Genipabu',
  category: 'dunas',
  cat: 'Dunas',
  x: 70,
  y: 16,
  rating: 4.8,
  reviews: 2240,
  open: true,
  distance: '25 km',
  price: 'A partir de R$ 120',
  city: 'Extremoz',
  featured: true,
  blurb: 'Passeio de buggy “com ou sem emoção” entre dunas móveis, lagoas e dromedários à beira-mar.'
}, {
  id: 'careca',
  name: 'Morro do Careca',
  category: 'praias',
  cat: 'Praia',
  x: 80,
  y: 44,
  rating: 4.7,
  reviews: 1890,
  open: true,
  distance: '6,4 km',
  price: 'Grátis',
  city: 'Natal',
  blurb: 'A duna gigante que abraça Ponta Negra — símbolo de Natal, cercada de mar morno e quiosques.'
}, {
  id: 'maracajau',
  name: 'Parrachos de Maracajaú',
  category: 'natureza',
  cat: 'Recife',
  x: 66,
  y: 8,
  rating: 4.7,
  reviews: 760,
  open: true,
  distance: '55 km',
  price: 'A partir de R$ 90',
  city: 'Maxaranguape',
  blurb: 'Piscinas naturais de água cristalina a 7 km da costa — o “Caribe brasileiro” para mergulho.'
}, {
  id: 'gostoso',
  name: 'São Miguel do Gostoso',
  category: 'praias',
  cat: 'Praia',
  x: 52,
  y: 6,
  rating: 4.8,
  reviews: 1120,
  open: true,
  distance: '110 km',
  price: 'Grátis',
  city: 'São Miguel do Gostoso',
  blurb: 'Vila tranquila de pescadores, capital do vento — kitesurf, windsurf e pôr do sol sem fim.'
}, {
  id: 'pirangi',
  name: 'Cajueiro de Pirangi',
  category: 'natureza',
  cat: 'Natureza',
  x: 76,
  y: 60,
  rating: 4.4,
  reviews: 1340,
  open: true,
  distance: '22 km',
  price: 'R$ 5',
  city: 'Parnamirim',
  blurb: 'O maior cajueiro do mundo: uma única árvore que cobre 8.500 m² — vista de uma passarela suspensa.'
}, {
  id: 'dunas-parque',
  name: 'Parque das Dunas',
  category: 'natureza',
  cat: 'Parque',
  x: 82,
  y: 38,
  rating: 4.7,
  reviews: 2010,
  open: false,
  distance: '4,8 km',
  price: 'R$ 5',
  city: 'Natal',
  blurb: 'A segunda maior floresta urbana do país, trilhas na Mata Atlântica entre dunas e mirantes.'
}];
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mapa/data.js", error: String((e && e.message) || e) }); }

// ui_kits/mapa/icons.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Estrela Potiguar — Lucide-style inline icons (1.75px stroke, 24px grid).
   The product uses Lucide; these mirror that geometry for the kit. */
const I = paths => props => {
  const {
    size = 22,
    ...rest
  } = props || {};
  return /*#__PURE__*/React.createElement("svg", _extends({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.9",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), paths);
};
const Search = I(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
  cx: "11",
  cy: "11",
  r: "7"
}), /*#__PURE__*/React.createElement("path", {
  d: "M21 21l-4.3-4.3"
})));
const MapIcon = I(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
  d: "M9 3 3 5.5v15L9 18l6 3 6-2.5v-15L15 6 9 3z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M9 3v15M15 6v15"
})));
const Compass = I(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
  cx: "12",
  cy: "12",
  r: "9"
}), /*#__PURE__*/React.createElement("path", {
  d: "M16 8l-2 6-6 2 2-6 6-2z"
})));
const Heart = I(/*#__PURE__*/React.createElement("path", {
  d: "M12 20.5S4 16 4 9.8C4 7 6 5.2 8.4 5.2c1.7 0 3 .9 3.6 2.2.6-1.3 1.9-2.2 3.6-2.2C20 5.2 22 7 22 9.8c0 6.2-8 10.7-10 10.7z"
}));
const Star = I(/*#__PURE__*/React.createElement("path", {
  d: "M12 3l2.6 5.7 6.2.6-4.7 4.1 1.4 6.1L12 16.9 6.5 19.6l1.4-6.1L3.2 9.3l6.2-.6z"
}));
const Plus = I(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
  d: "M12 5v14M5 12h14"
})));
const Minus = I(/*#__PURE__*/React.createElement("path", {
  d: "M5 12h14"
}));
const Locate = I(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
  cx: "12",
  cy: "12",
  r: "3.2"
}), /*#__PURE__*/React.createElement("path", {
  d: "M12 2v3.2M12 18.8V22M2 12h3.2M18.8 12H22"
})));
const Layers = I(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
  d: "M12 3 3 8l9 5 9-5-9-5z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M3 13l9 5 9-5"
})));
const Clock = I(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
  cx: "12",
  cy: "12",
  r: "9"
}), /*#__PURE__*/React.createElement("path", {
  d: "M12 7v5l3.2 2"
})));
const Pin = I(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
  d: "M12 22s7-6.5 7-12a7 7 0 1 0-14 0c0 5.5 7 12 7 12z"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "12",
  cy: "10",
  r: "2.6"
})));
const Route = I(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
  cx: "6",
  cy: "19",
  r: "2.4"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "18",
  cy: "5",
  r: "2.4"
}), /*#__PURE__*/React.createElement("path", {
  d: "M8.4 19H14a4 4 0 0 0 0-8H9a4 4 0 0 1 0-8h2.4"
})));
const Share = I(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
  cx: "18",
  cy: "5",
  r: "2.6"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "6",
  cy: "12",
  r: "2.6"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "18",
  cy: "19",
  r: "2.6"
}), /*#__PURE__*/React.createElement("path", {
  d: "M8.3 13.3l7.4 4.4M15.7 6.3 8.3 10.7"
})));
const ChevDown = I(/*#__PURE__*/React.createElement("path", {
  d: "M6 9l6 6 6-6"
}));
const ChevLeft = I(/*#__PURE__*/React.createElement("path", {
  d: "M15 18l-6-6 6-6"
}));
const Sun = I(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
  cx: "12",
  cy: "12",
  r: "4.2"
}), /*#__PURE__*/React.createElement("path", {
  d: "M12 2v2.5M12 19.5V22M2 12h2.5M19.5 12H22M4.6 4.6l1.8 1.8M17.6 17.6l1.8 1.8M19.4 4.6l-1.8 1.8M6.4 17.6l-1.8 1.8"
})));
const Camera = I(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
  d: "M3 8.5A1.5 1.5 0 0 1 4.5 7H7l1.4-2h7.2L17 7h2.5A1.5 1.5 0 0 1 21 8.5V18a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 18V8.5z"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "12",
  cy: "12.5",
  r: "3.2"
})));
const Wind = I(/*#__PURE__*/React.createElement("path", {
  d: "M3 8h10a2.5 2.5 0 1 0-2.5-2.5M3 16h13a2.5 2.5 0 1 1-2.5 2.5M3 12h17a2.5 2.5 0 1 0-2.5-2.5"
}));
const Waves = I(/*#__PURE__*/React.createElement("path", {
  d: "M2 7c1.6 0 1.6-1.6 3.2-1.6S6.8 7 8.4 7 10 5.4 11.6 5.4 13.2 7 14.8 7 16.4 5.4 18 5.4 19.6 7 21.2 7M2 13c1.6 0 1.6-1.6 3.2-1.6S6.8 13 8.4 13 10 11.4 11.6 11.4 13.2 13 14.8 13 16.4 11.4 18 11.4 19.6 13 21.2 13M2 19c1.6 0 1.6-1.6 3.2-1.6S6.8 19 8.4 19 10 17.4 11.6 17.4 13.2 19 14.8 19 16.4 17.4 18 17.4 19.6 19 21.2 19"
}));
const Landmark = I(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
  d: "M3 21h18M5 21V10M9 21V10M15 21V10M19 21V10M12 3 21 8H3l9-5z"
})));
const Trees = I(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
  d: "M8 3l4 6H4l4-6z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M8 8l4 6H4l4-6z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M8 14v7"
}), /*#__PURE__*/React.createElement("path", {
  d: "M16 5l3 5h-6l3-5z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M16 9l3 5h-6l3-5z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M16 14v7"
})));
const Mountain = I(/*#__PURE__*/React.createElement("path", {
  d: "M3 20h18L14 7l-3.5 6L8 9 3 20z"
}));
window.EPIcons = {
  Search,
  MapIcon,
  Compass,
  Heart,
  Star,
  Plus,
  Minus,
  Locate,
  Layers,
  Clock,
  Pin,
  Route,
  Share,
  ChevDown,
  ChevLeft,
  Sun,
  Camera,
  Wind,
  Waves,
  Landmark,
  Trees,
  Mountain
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mapa/icons.jsx", error: String((e && e.message) || e) }); }

__ds_ns.AttractionCard = __ds_scope.AttractionCard;

__ds_ns.MapPin = __ds_scope.MapPin;

__ds_ns.ThemeToggle = __ds_scope.ThemeToggle;

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Rating = __ds_scope.Rating;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Tabs = __ds_scope.Tabs;

__ds_ns.Tag = __ds_scope.Tag;

})();
