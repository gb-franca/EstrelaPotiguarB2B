import React from 'react';

export interface RatingProps {
  /** 0–max; rounded for fill. */
  value?: number;
  max?: number;
  /** Star pixel size. */
  size?: number;
  /** Number of reviews shown in parentheses. */
  count?: number;
  /** Show the numeric value (e.g. 4.8). */
  showValue?: boolean;
  /** Pass to make stars clickable. */
  onChange?: (value: number) => void;
  style?: React.CSSProperties;
}

/** Five-star rating, read-only or interactive — star-yellow fill. */
export function Rating(props: RatingProps): JSX.Element;
