import React from 'react';

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  size?: 'sm' | 'md' | 'lg';
  leadingIcon?: React.ReactNode;
  trailingIcon?: React.ReactNode;
  invalid?: boolean;
  fullWidth?: boolean;
}

/** Inset text input with optional leading/trailing icons; star-yellow focus ring. */
export function Input(props: InputProps): JSX.Element;
