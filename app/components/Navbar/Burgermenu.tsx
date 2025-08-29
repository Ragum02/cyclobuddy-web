'use client';

import { useState } from 'react';
import clsx from 'clsx';
import NavigationsLinks from './NavigationsLinks';

export default function BurgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const style = {
    burgerButton:
      'bg-white block h-0.5 w-5 rounded-sm transition-all duration-300',
    isOpenHeader: 'w-screen flex justify-between h-10 p-2 pr-10',
    isClosedHeader: 'flex justify-between p-2 pr-10 h-10',
    contentTransition:
      'from-[rgba(12,30,62,0.95)] to-[rgba(0,70,120,0.95)] backdrop-blur-md bg-gradient-to-b py-5 h-full scale-100 duration-500 ease-in-out transition-all block flex flex-col items-center mt-5',
  };

  return (
    <div className="fixed top-5 right-0 z-10 flex flex-col">
      <header
        className={clsx('flex justify-between items-center', {
          [style.isOpenHeader]: isOpen,
          [style.isClosedHeader]: !isOpen,
        })}
      >
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex flex-col justify-center items-center absolute right-5"
        >
          <span
            className={clsx(style.burgerButton, {
              'rotate-45 translate-y-0.5': isOpen,
              '-translate-y-0.5': !isOpen,
            })}
          ></span>
          <span
            className={clsx(style.burgerButton, 'my-[1px]', {
              'opacity-0': isOpen,
              'opacity-100': !isOpen,
            })}
          ></span>
          <span
            className={clsx(style.burgerButton, {
              '-rotate-45 -translate-y-1': isOpen,
              'translate-y-0.5': !isOpen,
            })}
          ></span>
        </button>
      </header>

      {isOpen && (
        <div className={style.contentTransition}>
          <NavigationsLinks closeMenu={() => setIsOpen(false)} />
        </div>
      )}
    </div>
  );
}
