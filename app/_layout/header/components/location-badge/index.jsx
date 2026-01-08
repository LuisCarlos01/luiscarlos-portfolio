'use client';

import { motion } from 'framer-motion';
import { Globe } from 'lucide-react';

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

export function LocationBadge() {
  return (
    <motion.div
      className='absolute left-0 top-[30%] z-10 -translate-y-1/2'
      variants={containerVariants}
      initial='hidden'
      animate='visible'
      aria-label='Location: Brazil'
    >
      <div className='flex items-center gap-8 rounded-r-full bg-black/90 py-3 pl-8 pr-3 backdrop-blur-sm transition-all duration-300 hover:bg-black md:gap-16 md:py-4 md:pl-12 md:pr-4'>
        <span className='text-sm font-normal leading-tight text-white md:text-base'>
          Located
          <br />
          in the
          <br />
          Brasil
        </span>

        <div className='flex size-16 items-center justify-center rounded-full bg-secondary-foreground md:size-20'>
          <motion.div
            variants={globeVariants}
            animate='animate'
            style={{ willChange: 'transform' }}
          >
            <Globe
              size={32}
              strokeWidth={1.5}
              className='text-white md:size-10'
              aria-hidden='true'
            />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
