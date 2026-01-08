'use client';

import { memo } from 'react';

import { motion } from 'framer-motion';
import { Globe } from 'lucide-react';

// Variants definidas fora do componente para evitar recriação
const containerVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, delay: 0.8 },
  },
};

const globeVariants = {
  animate: {
    rotate: 360,
    transition: {
      duration: 20,
      repeat: Infinity,
      ease: 'linear',
    },
  },
};

// Memo para evitar re-renders desnecessários
export const LocationBadge = memo(function LocationBadge() {
  return (
    <motion.div
      className='absolute left-0 top-[35%] z-10 sm:top-[35%] md:top-[30%]'
      variants={containerVariants}
      initial='hidden'
      animate='visible'
      aria-label='Location: Brazil'
    >
      <div className='flex items-center gap-4 rounded-r-full bg-black/90 py-2 pl-6 pr-2 backdrop-blur-sm transition-all duration-300 hover:bg-black sm:gap-6 sm:py-3 sm:pl-8 sm:pr-3 md:gap-16 md:py-4 md:pl-12 md:pr-4'>
        <span className='text-xs font-normal leading-tight text-white sm:text-sm md:text-base'>
          Located
          <br />
          in the
          <br />
          Brasil
        </span>

        <div className='flex size-12 items-center justify-center rounded-full bg-secondary-foreground sm:size-14 md:size-20'>
          <motion.div
            variants={globeVariants}
            animate='animate'
            style={{ willChange: 'transform' }}
          >
            <Globe
              size={24}
              strokeWidth={1.5}
              className='text-white sm:size-7 md:size-10'
              aria-hidden='true'
            />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
});
