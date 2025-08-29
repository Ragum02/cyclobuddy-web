'use client';

import BurgerMenu from './Burgermenu';
import NavigationsLinks from './NavigationsLinks';
import { useIsMobile } from '@/app/hooks/useIsMobile';
import Link from 'next/link';

export default function Navbar() {
  const isMobile = useIsMobile();

  return (
    <nav
      role="navigation"
      aria-label="main navigation"
      className="text-white fixed top-0 z-20 w-screen flex justify-between items-center bg-[rgba(12,30,62,0.95)] px-4 py-6 backdrop-blur-md"
    >
      <Link href="/">
        <em className="text-2xl relative z-[20] font-bold hover:text-shadow-[0_0_10px_rgba(255,255,255,0.7)] cursor-pointer">
          CycloBuddy
        </em>
      </Link>

      {isMobile ? <BurgerMenu /> : <NavigationsLinks />}
    </nav>
  );
}
