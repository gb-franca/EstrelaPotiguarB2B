import React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual style. `primary` = star yellow (glows), `aurora` = magenta featured. */
  variant?: 'primary' | 'aurora' | 'secondary' | 'ghost' | 'subtle';
  size?: 'sm' | 'md' | 'lg';
  /** Icon node rendered before the label. */
  leadingIcon?: React.ReactNode;
  /** Icon node rendered after the label. */
  trailingIcon?: React.ReactNode;
  fullWidth?: boolean;
  disabled?: boolean;
  /** Shows a spinner and blocks interaction. */
  loading?: boolean;
  children?: React.ReactNode;
}

/**
 * Primary call-to-action for Estrela Potiguar. Pill-shaped; the primary and
 * aurora variants light up with a warm glow on hover.
 * @startingPoint section="Core" subtitle="Pill buttons — primary, aurora, secondary, ghost" viewport="700x200"
 */
export function Button(props: ButtonProps): JSX.Element;
