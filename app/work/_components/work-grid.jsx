'use client';

import Link from 'next/link';
import { CldImage } from 'next-cloudinary';

import { thumbnailOptions } from '@/data';

export function WorkGrid() {
  return (
    <div className='grid gap-x-8 gap-y-16 sm:grid-cols-2'>
      {thumbnailOptions.map(({ href, title, image }) => (
        <Link
          key={href}
          href={href}
          target='_blank'
          rel='noopener noreferrer'
          className='group block'
        >
          <div className='relative aspect-[4/3] overflow-hidden rounded bg-secondary-foreground'>
            <CldImage
              src={image}
              fill={true}
              quality='auto'
              format='auto'
              loading='lazy'
              className='object-cover transition-transform duration-500 ease-out group-hover:scale-105'
              alt={`${title} thumbnail image`}
            />
          </div>
          <div className='mt-4 flex items-center justify-between'>
            <h3 className='text-2xl font-medium'>{title}</h3>
            <span className='text-sm text-muted-foreground'>
              Design &amp; Development
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
}
