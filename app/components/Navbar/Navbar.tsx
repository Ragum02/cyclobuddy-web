'use client';

import BurgerMenu from './Burgermenu';
import NavigationsLinks from './NavigationsLinks';
import { useIsMobile } from '@/app/hooks/useIsMobile';
import Link from 'next/link';

export default function Navbar() {
  const isMobile = useIsMobile();

  return (
    <nav className="text-white fixed top-0 z-20 w-screen flex justify-between items-center bg-[rgba(12,30,62,0.95)] px-4 py-6 backdrop-blur-md">
      <Link href="/" className="text-2xl font-bold">
        CycloBuddy
      </Link>

      {isMobile ? <BurgerMenu /> : <NavigationsLinks />}
    </nav>
  );
}
