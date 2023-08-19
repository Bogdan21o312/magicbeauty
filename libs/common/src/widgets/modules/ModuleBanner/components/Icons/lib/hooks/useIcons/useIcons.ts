'use client'
import { useParallaxMouseEffect } from "../../../../../../../../shared"

export function useIcons() {
  const parallaxRef01 = useParallaxMouseEffect({
    strength: 0.01,
    horizontal: true,
    vertical: true,
    reverse: false,
  });
  const parallaxRef02 = useParallaxMouseEffect({
    strength: 0.015,
    horizontal: true,
    vertical: true,
    reverse: true,
  });
  const parallaxRef03 = useParallaxMouseEffect({
    strength: 0.019,
    horizontal: true,
    vertical: true,
    reverse: false,
  });
  const parallaxRef04 = useParallaxMouseEffect({
    strength: 0.017,
    horizontal: true,
    vertical: true,
    reverse: true,
  });
  const parallaxRef05 = useParallaxMouseEffect({
    strength: 0.013,
    horizontal: true,
    vertical: true,
    reverse: false,
  });
  const parallaxRef06 = useParallaxMouseEffect({
    strength: 0.012,
    horizontal: true,
    vertical: true,
    reverse: true,
  });

  return { parallaxRef01, parallaxRef02, parallaxRef03, parallaxRef04, parallaxRef05, parallaxRef06 }
}
