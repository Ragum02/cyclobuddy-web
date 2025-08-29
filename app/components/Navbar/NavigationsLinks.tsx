'use client';

import clsx from 'clsx';
import { useIsMobile } from '@/app/hooks/useIsMobile';
import Button from '../ui/Button';
import Links from '../ui/Links';
import Link from 'next/link';
import type { LinkItem } from '@/app/@types/linkItem';

interface NavLinksProps {
  closeMenu?: () => void;
}

export default function NavigationsLinks({ closeMenu }: NavLinksProps) {
  const isMobile = useIsMobile();

  const handleClick = () => {
    if (closeMenu) closeMenu();
  };

  const mainLinks: LinkItem[] = [
    { name: 'Sorties', href: '/rides', onClick: handleClick },
    { name: 'Mes sorties', href: '/my-rides', onClick: handleClick },
    { name: 'Nouvelle sortie', href: '/create-ride', onClick: handleClick },
  ];

  return (
    <>
      <Links
        links={mainLinks}
        className={
          isMobile
            ? 'flex-col gap-10 items-center'
            : 'flex-row gap-20 items-center'
        }
      />

      <div
        role="group"
        aria-label="account actions"
        className={clsx(
          'flex items-center',
          isMobile ? 'flex-col gap-10 items-center mt-10' : 'flex-row gap-10',
        )}
      >
        <Link
          href="/login"
          onClick={handleClick}
          className="hover:translate-y-[-2px] transform transition-all duration-300 hover:text-shadow-[0_0_10px_rgba(255,255,255,0.7)]"
        >
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
