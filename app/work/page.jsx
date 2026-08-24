import { Contact, Navbar, Transition } from '@/layout';

import { WorkGrid } from './_components/work-grid';

/** @type {import('next').Metadata} */
export const metadata = {
  title: 'Work | Luis C. Vitoriano • Mobile & Frontend Developer',
  description:
    'Portfolio of projects including dashboards, PWAs, landing pages, and mobile applications built with React, TypeScript, and React Native. © Code by Luis',
};

export default function Work() {
  return (
    <Transition>
      <Navbar tone='light' />
      <main className='min-h-screen bg-background pt-40'>
        <div className='container mx-auto px-6 pb-40'>
          <header className='mb-24 max-w-5xl'>
            <p className='mb-5 text-sm text-muted-foreground'>• Work</p>
            <h1 className='text-[clamp(3.5rem,9vw,9rem)] leading-[0.9] tracking-[-0.06em]'>
              Creating next level
              <br />
              digital products
            </h1>
          </header>

          <WorkGrid />
        </div>
      </main>
      <Contact />
    </Transition>
  );
}
