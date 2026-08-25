'use client';

import { CldImage } from 'next-cloudinary';

/**
 * @param {Object} props
 * @param {string} props.src
 * @param {string} props.alt
 */
export function AboutImage({ src, alt }) {
  return (
    <CldImage
      src={src}
      fill={true}
      sizes='100vw'
      quality='auto'
      format='auto'
      loading='lazy'
      className='object-cover'
      alt={alt}
    />
  );
}
