'use client';

import { useRef } from 'react';

import { motion, useScroll, useTransform } from 'framer-motion';

import { useContactSlider } from '@/hooks';

import { SocialInfo, UserDetails } from './components';

function FooterCurve() {
  /** @type {import('react').MutableRefObject<HTMLDivElement>} */
  const curveRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: curveRef,
    offset: ['start end', 'start start'],
  });
  const height = useTransform(scrollYProgress, [0, 1], ['5vw', '0vw']);

  return (
    <div
      ref={curveRef}
      className='pointer-events-none relative z-20 h-0'
      aria-hidden='true'
    >
      <motion.div
        className='relative -top-px overflow-hidden'
        style={{ height }}
      >
        <div className='absolute bottom-0 left-1/2 h-[750%] w-[150%] -translate-x-1/2 rounded-[50%] bg-background' />
      </motion.div>
    </div>
  );
}

export function Contact({ footerOnly = false, roundedReveal = false }) {
  /** @type {import('react').MutableRefObject<HTMLElement>} */
  const containerRef = useRef(null);
  const { revealTransformY, transformX, transformY } =
    useContactSlider(containerRef);

  return (
    <>
      {roundedReveal && <FooterCurve />}
      <motion.footer
        ref={containerRef}
        className='relative bg-foreground text-background'
        style={
          footerOnly
            ? undefined
            : { y: roundedReveal ? revealTransformY : transformY }
        }
      >
        <div
          style={{
            paddingBlock: footerOnly
              ? 'clamp(3em, 8vh, 6em)'
              : 'clamp(5em, 21vh, 12em)',
          }}
        >
          {!footerOnly && <UserDetails transformX={transformX} />}
          <SocialInfo />
        </div>
      </motion.footer>
    </>
  );
}
