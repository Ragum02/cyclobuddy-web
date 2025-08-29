import React from 'react';
import clsx from 'clsx';

type ButtonProps<T extends React.ElementType = 'button'> = {
  as?: T;
  variant?: 'primary' | 'destructive' | 'accent';
  children: React.ReactNode;
  className?: string;
} & Omit<React.ComponentPropsWithoutRef<T>, 'as' | 'children' | 'className'>;

export default function CTAButton<T extends React.ElementType = 'button'>({
  variant = 'primary',
  children,
  className,
  as,
  ...props
}: ButtonProps<T>) {
  const baseStyles =
    'inline-block relative overflow-hidden rounded-3xl transition-all duration-300 border-2 group';

  const variants = {
    primary:
      'bg-gradient-to-br from-green-600 to-green-500 border-green-400 text-white hover:from-green-500 hover:to-green-600 hover:translate-y-[-3px] hover:shadow-[0_2px_40px_rgba(5,150,105,0.6)]',
    destructive:
      'bg-gradient-to-br from-red-600 to-red-500 border-red-400 text-white hover:from-red-500 hover:to-red-600 hover:translate-y-[-3px] hover:shadow-[0_2px_40px_rgba(220,38,38,0.6)]',
    accent:
      'bg-gradient-to-br from-blue-600 to-blue-500 border-blue-400 text-white hover:from-blue-500 hover:to-blue-600 hover:translate-y-[-3px] hover:shadow-[0_2px_20px_rgba(0,50,150,0.6)]',
  };

  const Component = as || 'button';

  return (
    <Component
      className={clsx(baseStyles, variants[variant], className)}
      {...props}
    >
      {children}
      <span className="absolute top-0 left-[-100%] w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-[left] duration-500 pointer-events-none group-hover:left-[100%]"></span>
    </Component>
  );
}
