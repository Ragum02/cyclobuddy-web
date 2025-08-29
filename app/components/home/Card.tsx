import Image from 'next/image';
import Button from '../ui/Button';

export default function Card({
  logo,
  title,
  description,
  buttonText,
}: {
  logo: string;
  title: string;
  description: string;
  buttonText: string;
}) {
  return (
    <div
      className="group w-64 h-64 rounded-2xl border border-gray-200 
                 bg-white shadow-md hover:shadow-2xl 
                 transition-all duration-300 ease-out 
                 hover:-translate-y-1 cursor-pointer flex flex-col p-5"
    >
      <header className="flex items-center gap-3 mb-3">
        <div className="relative w-12 h-12">
          <Image
            src={logo}
            alt={title}
            fill
            className="rounded-full object-cover ring-2 ring-gray-100 group-hover:ring-blue-400 transition-all"
          />
        </div>
        <h2 className="font-semibold text-lg group-hover:text-blue-600 transition-colors">
          {title}
        </h2>
      </header>

      <p className="text-gray-600 text-sm flex-1 leading-relaxed">
        {description}
      </p>

      <Button
        as="a"
        href="/register"
        variant="accent"
        className="text-center py-2 w-1/2 self-center"
      >
        {buttonText}
      </Button>
    </div>
  );
}
