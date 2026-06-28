import React from 'react';

export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Accessible label (also the tooltip title). */
  label: string;
  size?: 'sm' | 'md' | 'lg';
  /** `floating` carries a shadow for use over the map. */
  variant?: 'solid' | 'ghost' | 'floating' | 'accent';
  /** Toggled-on state (soft yellow). */
  active?: boolean;
  disabled?: boolean;
  children?: React.ReactNode;
}

/** Circular icon-only button for toolbars and map controls. */
export function IconButton(props: IconButtonProps): JSX.Element;
