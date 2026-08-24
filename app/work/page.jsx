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
      <Navbar />
      <main className='min-h-screen bg-background pt-32'>
        <div className='container mx-auto px-6 pb-32'>
          <header className='mb-16'>
            <h1 className='text-[clamp(3rem,8vw,6rem)] font-medium leading-none'>
              Selected Work
            </h1>
            <p className='mt-6 max-w-xl text-lg text-muted-foreground'>
              A selection of dashboards, PWAs, and mobile applications built
              with React, TypeScript, and React Native.
            </p>
          </header>

          <WorkGrid />
        </div>
      </main>
      <Contact />
    </Transition>
  );
}
