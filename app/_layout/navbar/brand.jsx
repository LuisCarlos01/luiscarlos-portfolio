'use client';

import { useState } from 'react';

export function NavbarBrand() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleReload = () => {
    window.location.reload();
  };

  const handleMouseMove = e => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 20;
    setMousePosition({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePosition({ x: 0, y: 0 });
  };

  return (
    <div
      className='group flex cursor-pointer items-center pb-5'
      onClick={handleReload}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
        transition: 'transform 0.2s ease-out',
      }}
    >
      <span className='font-space_grotesk text-sm font-medium transition-transform duration-500 ease-in-expo group-hover:rotate-[360deg]'>
        ©
      </span>

      <div className='relative ms-1 flex overflow-hidden whitespace-nowrap transition-all duration-500 ease-in-expo group-hover:pe-8'>
        <span className='font-space_grotesk text-base font-normal transition-transform duration-500 ease-in-expo group-hover:-translate-x-full'>
          Code by
        </span>
        <span className='ps-1 font-space_grotesk text-base font-normal transition-transform duration-500 ease-in-expo group-hover:-translate-x-14'>
          Luis
        </span>
        <span className='absolute left-24 ps-1 font-space_grotesk text-base font-normal transition-transform duration-500 ease-in-expo group-hover:-translate-x-16'>
          C. Vitoriano
        </span>
      </div>
    </div>
  );
}
