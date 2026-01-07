import { InProgress } from '@/components';
import { Transition } from '@/layout';

/** @type {import('next').Metadata} */
export const metadata = {
  title: 'Work | Luis Vitoriano',
  description:
    'Portfolio of projects including dashboards, PWAs, landing pages, and mobile applications built with React, TypeScript, and React Native. © Code by Luis',
};

export default function Work() {
  return (
    <Transition>
      <InProgress>Work Page</InProgress>
    </Transition>
  );
}
