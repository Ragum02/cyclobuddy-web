import Links from '../ui/Links';
import type { LinkItem } from '@/app/@types/linkItem';

export default function LegalLinks() {
  const mainLinks: LinkItem[] = [
    { name: 'À propos', href: '/about' },
    { name: 'Mentions légales', href: '/legal' },
    { name: 'Politique de confidentialité', href: '/privacy-policy' },
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
