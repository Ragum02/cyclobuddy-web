'use client';

import clsx from 'clsx';
import { useIsMobile } from '@/app/hooks/useIsMobile';
import Button from '../ui/Button';
import Links from '../ui/Links';
import Link from 'next/link';
import type { LinkItem } from '@/app/@types/linkItem';

export default function NavigationsLinks() {
  const isMobile = useIsMobile();

  const mainLinks: LinkItem[] = [
    { name: 'Sorties', href: '/rides' },
    { name: 'Groupes', href: '/groups' },
    { name: 'Nouvelle sortie', href: '/create-ride' },
  ];

  return (
    <>
      <Links
        links={mainLinks}
        className={
          isMobile
            ? 'flex-col gap-10 items-center'
            : 'flex-col gap-20 items-center'
        }
      />
    </>
  );
}
