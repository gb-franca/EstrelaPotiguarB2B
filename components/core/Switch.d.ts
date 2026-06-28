import React from 'react';

export interface SwitchProps {
  checked?: boolean;
  onChange?: (next: boolean) => void;
  disabled?: boolean;
  size?: 'sm' | 'md';
  /** Optional trailing label. */
  label?: React.ReactNode;
  style?: React.CSSProperties;
}

/** Toggle switch; track turns star-yellow when on. */
export function Switch(props: SwitchProps): JSX.Element;
