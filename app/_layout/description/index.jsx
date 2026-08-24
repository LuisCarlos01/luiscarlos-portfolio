'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Balancer from 'react-wrap-balancer';

import { MagneticButton, ParallaxFade, ParallaxReveal } from '@/components';

import { Title, Wrapper } from './index.styled';

const phrase =
  'Front-End & Mobile Developer focused on building modern, scalable, and user-centric applications. Clean architecture, performance, and continuous learning.';

export function Description() {
  return (
    <article className='container relative'>
      <Wrapper>
        <div className='basis-full lg:basis-9/12'>
          <Title>
            <ParallaxReveal paragraph={phrase} />
          </Title>
        </div>

        <div className='basis-7/12 lg:basis-3/12'>
          <ParallaxFade>
            <Balancer as='p' className='mt-2 text-base lg:text-lg'>
              Experienced with React, TypeScript, Vite, Tailwind CSS, and mobile
              solutions using React Native. Passionate about UI/UX and
              real-world projects.
            </Balancer>
          </ParallaxFade>
        </div>

        <motion.div
          className='flex w-full justify-end lg:absolute lg:right-0 lg:top-full lg:me-10 lg:w-auto'
          whileInView={{ y: '-15%' }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
          }}
        >
          <div className='mt-8 lg:mt-0'>
            <Link href='/about' passHref>
              <MagneticButton variant='ghost' size='xl'>
                About me
              </MagneticButton>
            </Link>
          </div>
        </motion.div>
      </Wrapper>
    </article>
  );
}
