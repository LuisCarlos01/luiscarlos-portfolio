'use client';

import { motion } from 'framer-motion';
import { ArrowDownLeft } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import { MagneticButton } from '@/components';

import { Container, ImageWrapper, MainTitle, Row } from './index.styled';

/**
 * @param {Object} props
 * @param {import('framer-motion').MotionValue<number>} props.transformX
 */
export function UserDetails({ transformX }) {
  return (
    <Container>
      <Row>
        <div className='flex items-center gap-8'>
          <ImageWrapper>
            <Image
              src='/profile.jpeg'
              className='rounded-full object-cover'
              fill={true}
              quality={75}
              loading='lazy'
              alt='Luis Vitoriano Profile Picture'
            />
          </ImageWrapper>
          <MainTitle>Let’s work</MainTitle>
        </div>
        <div className='flex items-center justify-between'>
          <MainTitle>together</MainTitle>
          <div>
            <ArrowDownLeft size={28} strokeWidth={1.25} />
          </div>
        </div>
      </Row>

      <Row>
        <div className='relative w-full'>
          <div className='h-px bg-muted-foreground' />
          <div className='absolute right-0 top-0 z-20 -translate-x-1/2 -translate-y-1/2'>
            <motion.div style={{ x: transformX }}>
              <Link href='/contact' passHref>
                <MagneticButton variant='primary' size='lg'>
                  Get in touch
                </MagneticButton>
              </Link>
            </motion.div>
          </div>
        </div>
      </Row>

      <Row>
        <div className='flex w-full flex-col gap-4 lg:flex-row'>
          <div className='min-w-0 flex-1'>
            <a
              href='mailto:luizcarlosvitorianoneto@gmail.com'
              className='block'
            >
              <MagneticButton
                variant='outline'
                size='md'
                className='w-full border-muted-foreground'
              >
                luizcarlosvitorianoneto@gmail.com
              </MagneticButton>
            </a>
          </div>
          <div className='min-w-0 flex-1'>
            <a href='tel:+5535997080310' className='block'>
              <MagneticButton
                variant='outline'
                size='md'
                className='w-full border-muted-foreground'
              >
                +55 35 99708-0310
              </MagneticButton>
            </a>
          </div>
        </div>
      </Row>
    </Container>
  );
}
