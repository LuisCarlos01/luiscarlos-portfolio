'use client';

import { NavbarBrand } from './brand';
import { NavbarList } from './list';

export function Navbar({ tone = 'dark' }) {
  return (
    <nav className='absolute inset-x-0 top-0 z-10'>
      <div
        className={`flex items-center justify-between px-8 py-4 ${
          tone === 'light' ? 'text-foreground' : 'text-background'
        }`}
      >
        <NavbarBrand />
        <NavbarList />
      </div>
    </nav>
  );
}
