import { ArrowDownRight, ArrowUpRight, Star } from 'lucide-react';
import Link from 'next/link';

import { AboutImage } from '@/app/about/components/about-image';
import { DigitalGlobe, ParallaxFade, ParallaxReveal } from '@/components';
import { Contact, Navbar, Transition } from '@/layout';

/** @type {import('next').Metadata} */
export const metadata = {
  title: 'About | Luis C. Vitoriano • Mobile & Frontend Developer',
  description:
    'Front-End and Mobile Developer focused on modern, scalable, and well-structured applications with React, TypeScript, and React Native.',
};

const capabilities = [
  {
    number: '01',
    title: 'Frontend',
    description:
      'I build clear, responsive interfaces with React, TypeScript, Next.js, and Tailwind CSS, balancing visual quality with maintainable code.',
  },
  {
    number: '02',
    title: 'Mobile',
    description:
      'I create practical mobile experiences with React Native and Expo, from the first screen to API integration and release-ready flows.',
  },
  {
    number: '03',
    title: 'The full product',
    description:
      'I connect design, implementation, and delivery into a coherent product, using documentation, clean architecture, and thoughtful technical decisions.',
  },
];

function ImageField({ label, className, src, alt }) {
  return (
    <ParallaxFade>
      <div
        className={`relative overflow-hidden border border-border bg-secondary ${className}`}
        aria-label={src ? undefined : `${label} image placeholder`}
      >
        {src ? (
          <AboutImage src={src} alt={alt} />
        ) : (
          <div className='absolute inset-0 flex items-end justify-between p-5 text-sm text-muted-foreground'>
            <span>{label}</span>
            <span>Cloudinary image</span>
          </div>
        )}
      </div>
    </ParallaxFade>
  );
}

function DigitalBall() {
  return (
    <div className='about-digital-ball' aria-hidden='true'>
      <div className='about-digital-ball__overlay' />
      <DigitalGlobe />
    </div>
  );
}

export default function About() {
  return (
    <Transition>
      <Navbar tone='light' />
      <main className='overflow-hidden bg-background pt-32'>
        <section className='pb-0 pt-[clamp(5rem,18vh,12rem)]'>
          <div className='mx-auto max-w-[1596px] px-6'>
            <h1 className='max-w-[1292px] text-[clamp(3.75rem,10vw,10rem)] font-normal leading-[0.92] tracking-[-0.06em]'>
              Building useful
              <br />
              digital experiences
            </h1>
          </div>

          <div className='relative mx-auto mt-24 w-[calc(100%-3rem)] max-w-[1292px] border-t border-border lg:mt-36 lg:w-[68%]'>
            <DigitalBall />
          </div>

          <div className='mx-auto max-w-[1920px]'>
            <div className='mx-auto grid max-w-[1596px] gap-y-16 pt-24 lg:grid-cols-[35%_65%] lg:gap-y-0 lg:pt-[9.45rem]'>
              <div className='flex flex-col justify-start gap-8 lg:pr-24'>
                <ArrowDownRight
                  size={30}
                  strokeWidth={1.25}
                  aria-hidden='true'
                />
                <p className='max-w-[21rem] text-lg leading-[1.45] text-muted-foreground lg:text-xl'>
                  <ParallaxReveal paragraph='I help people and businesses turn ideas into modern interfaces and reliable digital products, always putting clarity and quality first.' />
                </p>
                <p className='text-lg text-muted-foreground/50'>
                  Always learning<span className='animate-pulse'>...</span>
                </p>
              </div>

              <ImageField
                label='About image · 3:4'
                className='aspect-[3/4] w-full'
                src='about_h82ayo'
                alt='Luis Carlos walking on Avenida Paulista in São Paulo'
              />
            </div>
          </div>
        </section>

        <section className='bg-secondary px-6 py-24 lg:px-0 lg:pb-[12.56rem] lg:pt-[9.45rem]'>
          <div className='mx-auto max-w-[1596px]'>
            <h2 className='text-[clamp(2.75rem,5vw,4.25rem)] leading-none tracking-[-0.05em]'>
              I can help you with
              <span className='animate-pulse'>...</span>
            </h2>
          </div>

          <div className='mx-auto max-w-[1596px]'>
            <div className='mt-16 grid gap-y-12 lg:ml-[-6.3rem] lg:mt-[6.3rem] lg:w-[calc(100%+6.3rem)] lg:grid-cols-3 lg:gap-y-0'>
              {capabilities.map(({ number, title, description }) => (
                <article
                  key={number}
                  className='lg:min-h-[19.625rem] lg:pl-[6.3rem]'
                >
                  <p className='border-b border-foreground/30 pb-4 text-sm'>
                    {number}
                  </p>
                  <div className='mb-6 mt-8 flex min-h-16 items-center gap-4'>
                    {number === '03' && (
                      <Star
                        size={62}
                        strokeWidth={1}
                        fill='currentColor'
                        aria-hidden='true'
                      />
                    )}
                    <h3 className='text-[clamp(2rem,4vw,4rem)] leading-none tracking-[-0.04em]'>
                      {title}
                    </h3>
                  </div>
                  <p className='max-w-md text-base leading-relaxed text-muted-foreground lg:text-lg'>
                    {description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className='relative z-10 bg-background py-24 lg:py-[12.56rem]'>
          <div className='mx-auto grid max-w-[1292px] gap-16 px-6 lg:grid-cols-2 lg:gap-0 lg:px-0'>
            <ImageField
              label='Profile image · 4:5'
              className='aspect-[570/713] w-full max-w-[570px]'
            />

            <div className='max-w-[570px] self-start lg:ml-[4.75rem] lg:mt-[5.8rem] lg:pb-3.5'>
              <div className='mb-10 flex size-[7.125rem] items-center justify-center rounded-full border border-border text-muted-foreground'>
                <DigitalGlobe className='about-profile-globe' />
              </div>
              <h2 className='max-w-lg text-[clamp(3rem,5vw,4.25rem)] leading-none tracking-[-0.06em]'>
                Growing through
                <br />
                every project.
              </h2>
              <p className='mt-10 max-w-lg text-lg leading-relaxed text-muted-foreground'>
                I am Luis Carlos, a Mobile and Frontend Developer from Brazil.
                My background combines hands-on projects with continuous study
                of software fundamentals, clean architecture, accessibility, and
                thoughtful interaction design.
              </p>
              <Link
                href='/work'
                className='mt-8 inline-flex items-center gap-3 border-b border-foreground pb-2 text-base transition-opacity hover:opacity-60'
              >
                See selected work
                <ArrowUpRight size={18} strokeWidth={1.25} aria-hidden='true' />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Contact roundedReveal={true} />
    </Transition>
  );
}
