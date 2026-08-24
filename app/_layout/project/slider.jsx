'use client';

import { CldImage, CldVideoPlayer } from 'next-cloudinary';

import { Center } from '@/components';

/**
 * @param {Object} props
 * @param {'image' | 'video'} props.type
 * @param {string} props.source
 * @param {string} [props.cloudName]
 */
export function ProjectSlider({ type, source, cloudName }) {
  const config = cloudName ? { cloud: { cloudName } } : undefined;
  const videoSource = source.startsWith('http')
    ? source
    : cloudName
      ? `https://res.cloudinary.com/${cloudName}/video/upload/q_auto,f_auto/${source}.mp4`
      : null;
  const image =
    type === 'image' ? (
      <CldImage
        src={source}
        config={config}
        className='object-cover'
        fill={true}
        quality='auto'
        format='auto'
        loading='lazy'
        alt='project items'
      />
    ) : null;
  const video =
    type === 'video' ? (
      videoSource ? (
        <video
          src={videoSource}
          loop={true}
          muted={true}
          autoPlay={true}
          playsInline={true}
          className='size-full object-cover'
        />
      ) : (
        <CldVideoPlayer
          src={source}
          loop={true}
          controls={false}
          muted={true}
          autoPlay='always'
          width='100%'
          height='100%'
          className='!static !aspect-auto !h-full !w-full !bg-transparent [&_.vjs-tech]:!object-cover'
        />
      )
    ) : null;

  return (
    <Center
      className='relative aspect-[4/3] w-1/4 bg-[#949899] p-6'
      style={{
        minWidth: '150px',
      }}
    >
      <div className='relative size-full overflow-hidden [&>div]:!aspect-auto [&>div]:!h-full [&>div]:!w-full'>
        {image}
        {video}
      </div>
    </Center>
  );
}
