'use client';

import { useState } from 'react';

import { AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';

import { useLenis, useTimeOut } from '@/hooks';

import { Preloader } from './preloader';

/** @param {import('react').PropsWithChildren<unknown>} */
export function Transition({ children }) {
  const [isLoading, setLoading] = useState(true);
  const pathname = usePathname();
  const pageName = pathname === '/' ? null : pathname.slice(1).split('/')[0];

  useLenis();
  useTimeOut({
    callback: () => {
      setLoading(false);
      window.scrollTo(0, 0);
    },
    duration: 2000,
    deps: [],
  });

  return (
    <div key={pathname} className='overflow-hidden'>
      <AnimatePresence mode='wait'>
        {isLoading ? (
          <Preloader
            word={
              pageName ? pageName[0].toUpperCase() + pageName.slice(1) : null
            }
          />
        ) : null}
      </AnimatePresence>
      {children}
    </div>
  );
}
