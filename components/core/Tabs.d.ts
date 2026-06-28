import React from 'react';

export interface TabItem {
  value: string;
  label: React.ReactNode;
  icon?: React.ReactNode;
  count?: number;
}

export interface TabsProps {
  /** Strings or {value,label,icon,count} objects. */
  items: (TabItem | string)[];
  value: string;
  onChange?: (value: string) => void;
  style?: React.CSSProperties;
}

/** Underline tab bar with a star-yellow active indicator. */
export function Tabs(props: TabsProps): JSX.Element;
