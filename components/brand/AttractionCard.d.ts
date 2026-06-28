import React from 'react';

export interface AttractionCardProps extends React.HTMLAttributes<HTMLDivElement> {
  name: string;
  category?: string;
  /** Category accent dot color. */
  categoryColor?: string;
  /** Cover image URL; falls back to a starfield gradient. */
  image?: string;
  rating?: number;
  reviews?: number;
  /** e.g. "2,4 km" */
  distance?: string;
  /** Open-now status. */
  open?: boolean;
  /** Magenta featured treatment. */
  featured?: boolean;
  /** e.g. "Grátis", "R$ 30". */
  price?: string;
  favorite?: boolean;
  onFavorite?: (next: boolean) => void;
}

/**
 * Attraction summary card — the primary content unit (lists, search results, sheets).
 * @startingPoint section="Brand" subtitle="Attraction cards with rating, status & favorite" viewport="380x320"
 */
export function AttractionCard(props: AttractionCardProps): JSX.Element;
