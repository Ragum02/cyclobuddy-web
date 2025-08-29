import Links from '../ui/Links';
import type { LinkItem } from '@/app/@types/linkItem';

export default function SuppportLinks() {
  const mainLinks: LinkItem[] = [
    { name: 'Contact', href: '/contact' },
    { name: "Conditions d'utilisation", href: '/terms-of-use' },
    { name: 'Charte de bonne conduite', href: '/code-of-good-conduct' },
  ];

  return (
    <>
      <Links
        links={mainLinks}
        className="flex flex-col items-center gap-2 md:gap-5"
      />
    </>
  );
}
