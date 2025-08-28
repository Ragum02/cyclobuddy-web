import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="flex gap-4">
      <Link href="/" className="text-blue-500">
        Accueil
      </Link>
      <Link href="/rides" className="text-blue-500">
        Sorties
      </Link>
    </nav>
  );
}
