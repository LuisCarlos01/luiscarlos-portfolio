'use client';

import { memo } from 'react';

import { motion } from 'framer-motion';

import { DigitalGlobe } from '@/components';

// Variants definidas fora do componente para evitar recriação
const containerVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, delay: 0.8 },
  },
};

// Memo para evitar re-renders desnecessários
export const LocationBadge = memo(function LocationBadge() {
  return (
    <motion.div
      className='absolute bottom-6 right-6 top-auto z-10 md:bottom-auto md:left-0 md:right-auto md:top-[calc(50%_-_3.25rem)]'
      variants={containerVariants}
      initial='hidden'
      animate='visible'
      aria-label='Location: Brazil'
    >
      <div className='location-badge flex items-center gap-0 rounded-full bg-transparent p-0 backdrop-blur-0 transition-all duration-300 hover:bg-transparent md:rounded-l-none md:rounded-r-full md:bg-black/90 md:backdrop-blur-sm md:hover:bg-black'>
        <span className='hidden text-xs font-normal leading-tight text-white md:block'>
          Located
          <br />
          in the
          <br />
          Brasil
        </span>

        <div className='location-globe flex items-center justify-center rounded-full bg-secondary-foreground'>
          <DigitalGlobe className='location-globe__icon' />
        </div>
      </div>
    </motion.div>
  );
});
