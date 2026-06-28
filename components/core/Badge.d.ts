import React from 'react';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  tone?: 'neutral' | 'star' | 'aurora' | 'mare' | 'success' | 'danger' | 'info';
  /** Filled instead of soft-tinted. */
  solid?: boolean;
  /** Show a leading status dot. */
  dot?: boolean;
  leadingIcon?: React.ReactNode;
  children?: React.ReactNode;
}

/** Small status / metadata pill. */
export function Badge(props: BadgeProps): JSX.Element;
