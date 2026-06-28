import React, { useState } from 'react';

/**
 * Text input with optional leading icon — search, forms, filters.
 */
export function Input({
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
  const heights = { sm: 'var(--control-sm)', md: 'var(--control-md)', lg: 'var(--control-lg)' };

  const wrap = {
    display: 'inline-flex', alignItems: 'center', gap: '10px',
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
    ...style,
  };

  const input = {
    flex: 1, minWidth: 0, border: 'none', outline: 'none', background: 'transparent',
    color: 'var(--text-primary)', fontFamily: 'var(--font-body)',
    fontSize: size === 'sm' ? 'var(--text-sm)' : 'var(--text-base)',
  };

  const iconStyle = { display: 'inline-flex', color: 'var(--text-muted)', fontSize: '18px', flexShrink: 0 };

  return (
    <label style={wrap}>
      {leadingIcon && <span style={iconStyle}>{leadingIcon}</span>}
      <input
        type={type}
        value={value}
        defaultValue={defaultValue}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        style={input}
        {...rest}
      />
      {trailingIcon && <span style={iconStyle}>{trailingIcon}</span>}
    </label>
  );
}
