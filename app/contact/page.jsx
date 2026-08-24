import { socialMedias } from '@/data';
import { Contact, Navbar, Transition } from '@/layout';

/** @type {import('next').Metadata} */
export const metadata = {
  title: 'Contact | Luis C. Vitoriano • Mobile & Frontend Developer',
  description:
    "Get in touch with Luis Carlos for mobile and frontend development projects. Let's build something amazing together.",
};

export default function ContactPage() {
  return (
    <Transition>
      <Navbar />
      <main className='min-h-screen bg-background pt-32'>
        <div className='container mx-auto px-6 pb-32'>
          <header>
            <h1 className='text-[clamp(3rem,8vw,6rem)] font-medium leading-none'>
              Get in touch
            </h1>
            <p className='mt-6 max-w-xl text-lg text-muted-foreground'>
              Open to freelance projects, collaborations, and full-time
              opportunities. Reach out through any of the channels below.
            </p>
          </header>

          <section className='mt-16 grid gap-8 border-t border-foreground/20 pt-8 sm:grid-cols-2 lg:grid-cols-3'>
            <a
              href='mailto:luizcarlosvitorianoneto@gmail.com'
              className='group'
            >
              <span className='text-sm text-muted-foreground'>Email</span>
              <span className='mt-3 block text-lg transition-colors group-hover:text-muted-foreground'>
                luizcarlosvitorianoneto@gmail.com
              </span>
            </a>

            <a href='tel:+5535997080310' className='group'>
              <span className='text-sm text-muted-foreground'>Phone</span>
              <span className='mt-3 block text-lg transition-colors group-hover:text-muted-foreground'>
                +55 35 99708-0310
              </span>
            </a>

            <div>
              <span className='text-sm text-muted-foreground'>Socials</span>
              <ul className='mt-3 flex flex-wrap gap-x-5 gap-y-2'>
                {socialMedias.map(({ href, title }) => (
                  <li key={href}>
                    <a
                      href={href}
                      target='_blank'
                      rel='noreferrer'
                      className='text-lg transition-colors hover:text-muted-foreground'
                    >
                      {title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </div>
      </main>
      <Contact />
    </Transition>
  );
}
