'use client';

import Link from 'next/link';
import clsx from 'clsx';
import type { LinkItem } from '@/app/@types/linkItem';

interface LinksProps {
  links: LinkItem[];
  className?: string;
  itemClassName?: string;
}

export default function Links({ links, className, itemClassName }: LinksProps) {
  const linkHover =
    'inline-block hover:translate-y-[-2px] transform transition-all duration-300 hover:text-shadow-[0_0_10px_rgba(255,255,255,0.7)]';

  return (
    <ul className={clsx('flex flex-col gap-2', className)} role="list">
      {links.map((link) => (
        <li key={link.href} className={clsx(itemClassName)}>
          <Link href={link.href} onClick={link.onClick} className={linkHover}>
            {link.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}
