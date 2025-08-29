import NavigationsLinks from './NavigationsLinks';
import SupportLinks from './SupportLinks';
import LegalLinks from './LegalLinks';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="text-center text-white z-20 w-screen flex flex-col md:flex-row justify-between items-center bg-[rgba(12,30,62,0.95)] md:h-40 backdrop-blur-md gap-2">
      <nav
        aria-label="footer main title and mobile application link"
        className="md:ml-10 flex flex-col items-center justify-evenly h-full"
      >
        <div className="flex flex-col">
          <Link href="/">
            <em className="text-xl font-bold hover:text-shadow-[0_0_10px_rgba(255,255,255,0.7)] cursor-pointer">
              CycloBuddy
            </em>
          </Link>
          <span className="text-sm">© 2025 - CycloBuddy</span>
        </div>
        <Link
          href="/mobile-app"
          className="inline-block hover:translate-y-[-2px] transform transition-all duration-300 hover:text-shadow-[0_0_10px_rgba(255,255,255,0.7)]"
        >
          Applications Mobile
        </Link>
      </nav>
      <nav aria-label="footer navigations links">
        <NavigationsLinks />
      </nav>
      <nav aria-label="footer support links">
        <SupportLinks />
      </nav>
      <nav aria-label="footer legal links" className="lg:mr-60 md:mr-10">
        <LegalLinks />
      </nav>
    </footer>
  );
}
