import React from 'react';

export interface AvatarProps extends React.HTMLAttributes<HTMLSpanElement> {
  src?: string;
  /** Used for the initials fallback and alt text. */
  name?: string;
  size?: number;
  /** Star-yellow glow ring. */
  ring?: boolean;
}

/** Round avatar with image or initials fallback. */
export function Avatar(props: AvatarProps): JSX.Element;
