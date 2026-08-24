'use client';

import { useRef } from 'react';

import { motion } from 'framer-motion';

import { useContactSlider } from '@/hooks';

import { SocialInfo, UserDetails } from './components';

export function Contact({ footerOnly = false }) {
  /** @type {import('react').MutableRefObject<HTMLElement>} */
  const containerRef = useRef(null);
  const { transformX, transformY } = useContactSlider(containerRef);

  return (
    <motion.footer
      ref={containerRef}
      className='relative bg-foreground text-background'
      style={footerOnly ? undefined : { y: transformY }}
    >
      <div
        style={{
          paddingBlock: footerOnly ? 'clamp(3em, 8vh, 6em)' : 'clamp(5em, 21vh, 12em)',
        }}
      >
        {!footerOnly && <UserDetails transformX={transformX} />}
        <SocialInfo />
      </div>
    </motion.footer>
  );
}
