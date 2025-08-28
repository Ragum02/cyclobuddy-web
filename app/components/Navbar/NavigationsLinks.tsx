'use client';

import Link from 'next/link';
import clsx from 'clsx';
import Button from '../ui/Button';
import { useIsMobile } from '@/app/hooks/useIsMobile';

interface NavLinksProps {
  closeMenu?: () => void;
}

export default function NavLinks({ closeMenu }: NavLinksProps) {
  const isMobile = useIsMobile();

  const handleClick = () => {
    if (closeMenu) closeMenu();
  };

  const linkHover =
    'hover:translate-y-[-2px] transform transition-all duration-300 hover:text-shadow-[0_0_10px_rgba(255,255,255,0.7)]';

  return (
    <>
      <ul
        className={clsx(
          'flex',
          isMobile
            ? 'flex-col gap-10 items-center'
            : 'flex-row gap-20 items-center',
        )}
        role="list"
      >
        <li onClick={handleClick} className={linkHover}>
          <Link href="/rides">Sorties</Link>
        </li>
        <li onClick={handleClick} className={linkHover}>
          <Link href="/groups">Groupes</Link>
        </li>
        <li onClick={handleClick} className={linkHover}>
          <Link href="/create-ride">Nouvelle sortie</Link>
        </li>
      </ul>
      <div
        role="group"
        aria-label="account actions"
        className={clsx(
          'flex items-center',
          isMobile ? 'flex-col gap-10 items-center mt-10' : 'flex-row gap-20',
        )}
      >
        <Link href="/login" onClick={handleClick} className={linkHover}>
          Se connecter
        </Link>

        <Button
          onClick={handleClick}
          as="a"
          href="/register"
          className="px-4 py-2"
        >
          S&apos;inscrire
        </Button>
      </div>
    </>
  );
}
