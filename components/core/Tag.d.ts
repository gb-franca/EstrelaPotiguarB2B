import React from 'react';

export interface TagProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: React.ReactNode;
  /** Selected (filled with accent). */
  selected?: boolean;
  /** Override the accent color (e.g. category color). */
  color?: string;
  children?: React.ReactNode;
}

/** Selectable category / filter chip for the map filter bar. */
export function Tag(props: TagProps): JSX.Element;
