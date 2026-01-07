import { Contact, Navbar, Transition } from '@/layout';

/** @type {import('next').Metadata} */
export const metadata = {
  title: 'About | Luis Vitoriano',
  description:
    'Front-End and Mobile Developer with a strong focus on building modern, scalable, and well-structured applications. React, TypeScript, Tailwind CSS, React Native. © Code by Luis',
};

const bioContent = [
  'I am a Front-End and Mobile Developer with a strong focus on building modern, scalable, and well-structured applications. I work primarily with React, TypeScript, Vite, Tailwind CSS, and React Native, always aiming for clean code, good architectural decisions, and high-quality user experiences.',
  'My background combines practical development with a constant study of software fundamentals such as algorithms, data structures, design patterns, and clean architecture. I enjoy transforming complex problems into simple, intuitive interfaces, balancing performance, accessibility, and visual consistency.',
  'Currently, I work on real-world projects involving dashboards, PWAs, landing pages, and automation tools, often integrating APIs, state management, and CI/CD pipelines. I value documentation, maintainability, and thoughtful technical decisions, using tools like ADRs to keep projects clear and scalable over time.',
  'I am deeply motivated by continuous improvement, experimenting with new technologies, and refining both my technical and design skills. My goal is to grow as a well-rounded developer who builds reliable products, learns fast, and delivers real value through technology.',
];

export default function About() {
  return (
    <Transition>
      <Navbar />
      <main className='min-h-screen bg-background pt-32'>
        <article className='container mx-auto px-6 pb-32'>
          <header className='mb-16'>
            <h1 className='text-[clamp(3rem,8vw,6rem)] font-medium leading-none'>
              About Me
            </h1>
          </header>

          <div className='grid gap-8 lg:grid-cols-2 lg:gap-16'>
            <div className='space-y-6'>
              {bioContent.slice(0, 2).map((paragraph, index) => (
                <p
                  key={index}
                  className='text-lg leading-relaxed text-muted-foreground'
                >
                  {paragraph}
                </p>
              ))}
            </div>

            <div className='space-y-6'>
              {bioContent.slice(2).map((paragraph, index) => (
                <p
                  key={index + 2}
                  className='text-lg leading-relaxed text-muted-foreground'
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          <section className='mt-20'>
            <h2 className='mb-8 text-2xl font-medium'>Skills & Technologies</h2>
            <div className='flex flex-wrap gap-3'>
              {[
                'React',
                'TypeScript',
                'Next.js',
                'React Native',
                'Vite',
                'Tailwind CSS',
                'Framer Motion',
                'Node.js',
                'Git',
                'CI/CD',
                'REST APIs',
                'Clean Architecture',
              ].map(skill => (
                <span
                  key={skill}
                  className='rounded-full border border-foreground/20 px-4 py-2 text-sm'
                >
                  {skill}
                </span>
              ))}
            </div>
          </section>
        </article>
      </main>
      <Contact />
    </Transition>
  );
}
