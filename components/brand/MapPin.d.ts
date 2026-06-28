import React from 'react';

export interface MapPinProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Fill color — usually the category accent. Defaults to star yellow. */
  color?: string;
  /** Enlarges the pin and turns on the glow. */
  selected?: boolean;
  size?: number;
  /** Optional pill label shown beneath the star. */
  label?: string;
  /** Gentle twinkle animation. */
  twinkle?: boolean;
}

/**
 * The signature star map pin. Each attraction is a star in the sky.
 * @startingPoint section="Brand" subtitle="Star map pins — the wayfinding mark" viewport="700x220"
 */
export function MapPin(props: MapPinProps): JSX.Element;
