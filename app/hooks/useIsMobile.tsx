'use client';

import { useState, useEffect } from 'react';

const MOBILE_BREAKPOINT = 786;

export function useIsMobile() {
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const checkScreenSize = () =>
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    checkScreenSize();

    window.addEventListener('resize', checkScreenSize);

    //we remove the listener to avoid memory leaks
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  return isMobile;
}
