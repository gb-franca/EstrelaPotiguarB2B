import React from 'react';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  padding?: 'none' | 'sm' | 'md' | 'lg';
  /** Lifts and brightens on hover. */
  interactive?: boolean;
  /** Use the warm star glow instead of a shadow on hover. */
  glow?: boolean;
  children?: React.ReactNode;
}

/** Elevated surface container for the night canvas. */
export function Card(props: CardProps): JSX.Element;
