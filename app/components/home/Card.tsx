import Image from 'next/image';
import Link from 'next/link';

export default function Card({
  logo,
  title,
  description,
  href,
}: {
  logo: string;
  title: string;
  description: string;
  href: string;
}) {
  return (
    <Link href={href}>
      <div
        className="group relative w-70 h-50 rounded-xl border border-gray-200 
                   bg-gradient-to-br from-white to-blue-50/60
                   shadow-md 
                   transition-all duration-300 ease-out 
                   hover:-translate-y-1 flex flex-col p-5 overflow-hidden
                   hover:shadow-[0_20px_25px_-5px_rgba(0,0,0,0.2),0_10px_10px_-5px_rgba(0,0,0,0.2),inset_0_0_20px_rgba(59,130,246,0.25)]
                   cursor-pointer"
      >
        <header className="flex items-center gap-3 mb-3">
          <div className="flex items-center justify-center relative w-12 h-12 rounded-full overflow-hidden ring-2 ring-gray-100 group-hover:ring-blue-400 transition-all">
            <Image
              src={logo}
              alt={title}
              width={40}
              height={40}
              className="object-cover"
            />
          </div>
          <h2 className="font-semibold text-lg group-hover:text-blue-600 transition-colors">
            {title}
          </h2>
        </header>

        <p className="text-gray-600 text-sm flex-1 leading-relaxed">
          {description}
        </p>

        <div
          className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-blue-400 to-purple-500
                        group-hover:w-full transition-all duration-250"
        />
      </div>
    </Link>
  );
}
