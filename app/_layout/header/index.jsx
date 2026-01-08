'use client';

import { motion } from 'framer-motion';
import { MoveDownRight } from 'lucide-react';
import { CldImage } from 'next-cloudinary';

import { ParallaxSlider } from '@/components';

import { LocationBadge } from './components/location-badge';
import { slideUp } from './variants';

export function Header() {
  return (
    <motion.header
      className='relative h-screen overflow-hidden bg-secondary-foreground text-background'
      variants={slideUp}
      initial='initial'
      animate='enter'
    >
      <LocationBadge />

      <CldImage
        src='Portfolio/home/HeroSection'
        className='object-cover object-bottom md:object-contain md:object-center'
        fill={true}
        sizes='100vw'
        quality='auto'
        format='auto'
        priority={true}
        alt='Luis Vitoriano - Hero Section Portfolio'
      />

      <div className='relative flex h-full flex-col justify-end gap-2 md:flex-col-reverse md:justify-normal'>
        <div className='select-none'>
          <h1 className='text-[max(9em,15vw)]'>
            <ParallaxSlider repeat={4} baseVelocity={-2}>
              <span className='pe-12'>
                Luis Carlos
                <span className='spacer'>—</span>
              </span>
            </ParallaxSlider>
          </h1>
        </div>

        <div className='md:absolute md:right-36 md:top-[33%] md:ml-auto md:-translate-y-1/2'>
          <div className='m-6 sm:m-8 md:m-0'>
            <div className='mb-3 sm:mb-4 md:mb-8'>
              <MoveDownRight
                size={24}
                strokeWidth={1.25}
                className='sm:size-7 md:size-7'
              />
            </div>

            <h4 className='text-[clamp(1.25em,2.5vw,2.75em)]'>
              <span className='block'>Software Engineer</span>
              <span className='block'>UI/UX &amp; Development</span>
            </h4>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
