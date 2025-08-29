import Links from '../ui/Links';
import type { LinkItem } from '@/app/@types/linkItem';

export default function NavigationsLinks() {
  const mainLinks: LinkItem[] = [
    { name: 'Sorties', href: '/rides' },
    { name: 'Mes sorties', href: '/my-rides' },
    { name: 'Nouvelle sortie', href: '/create-ride' },
  ];

  return (
    <>
      <Links
        links={mainLinks}
        className="flex-col items-center gap-5 hidden md:flex"
      />
    </>
  );
}
