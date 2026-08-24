'use client';

import { useRef } from 'react';

import { motion } from 'framer-motion';

import { MagneticButton } from '@/components';
import { useContactSlider } from '@/hooks';

export function ContactSendButton() {
  /** @type {import('react').MutableRefObject<HTMLElement>} */
  const containerRef = useRef(null);
  const { transformX } = useContactSlider(containerRef);

  return (
    <motion.div ref={containerRef} style={{ x: transformX }}>
      <MagneticButton
        variant='primary'
        size='default'
        className='size-52 p-0 text-lg'
        type='button'
      >
        Send it!
      </MagneticButton>
    </motion.div>
  );
}
