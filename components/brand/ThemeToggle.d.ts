import React from 'react';

export interface ThemeToggleProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'onChange'> {
  /** Controlled value. Omit to let the toggle manage `data-theme` itself. */
  theme?: 'dark' | 'light';
  onChange?: (next: 'dark' | 'light') => void;
  /** Element to set `data-theme` on in uncontrolled mode. Defaults to <html>. */
  target?: HTMLElement | null;
}

/** Day/night theme toggle with a sliding sun/moon knob. */
export function ThemeToggle(props: ThemeToggleProps): JSX.Element;
