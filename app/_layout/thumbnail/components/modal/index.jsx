'use client';

import { forwardRef } from 'react';

import { motion } from 'framer-motion';
import { CldImage } from 'next-cloudinary';

import { Center } from '@/components';
import { thumbnailOptions } from '@/data';
import { randomId } from '@/utils';

const MotionComponent = motion(Center);

export const ThumbnailModal = forwardRef(
  /**
   * @param {import('react').HTMLAttributes<HTMLElement> & { variants: import('framer-motion').Variants; active: boolean; index: number;}} props
   * @param {import('react').ForwardedRef<HTMLElement>} ref
   */
  function ThumbnailModal(
    {
      variants,
      active,
      index,
      imageClassName = 'object-cover',
      className = 'pointer-events-none fixed left-1/2 top-1/2 aspect-[2/1] w-[min(80vw,40rem)] overflow-hidden rounded bg-[#949899] p-6',
      ...props
    },
    ref,
  ) {
    const items = thumbnailOptions.map(({ title, image, cloudName }) => {
      const id = randomId();
      const config = cloudName ? { cloud: { cloudName } } : undefined;
      return (
        <Center key={id} className='relative size-full shrink-0'>
          <CldImage
            src={image}
            config={config}
            fill={true}
            quality='auto'
            format='auto'
            loading='lazy'
            className={imageClassName}
            alt={`${title} thumbnail image`}
          />
        </Center>
      );
    });

    return (
      <MotionComponent
        ref={ref}
        className={className}
        variants={variants}
        initial='initial'
        animate={active ? 'enter' : 'closed'}
        {...props}
      >
        <div className='relative size-full overflow-hidden'>
          <div
            className='relative flex size-full flex-col'
            style={{
              top: `${index * -100}%`,
              transition: 'top 0.5s cubic-bezier(0.76, 0, 0.24, 1)',
            }}
          >
            {items}
          </div>
        </div>
      </MotionComponent>
    );
  },
);
