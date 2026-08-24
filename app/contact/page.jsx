import { ArrowDownRight } from 'lucide-react';
import Image from 'next/image';

import { socialMedias } from '@/data';
import { Contact, Navbar, Transition } from '@/layout';

import { ContactSendButton } from './components/send-button';

/** @type {import('next').Metadata} */
export const metadata = {
  title: 'Contact | Luis C. Vitoriano • Mobile & Frontend Developer',
  description:
    "Get in touch with Luis Carlos for mobile and frontend development projects. Let's build something amazing together.",
};

export default function ContactPage() {
  return (
    <Transition>
      <Navbar tone='dark' />
      <main className='min-h-screen bg-foreground pt-32 text-background'>
        <div className='container mx-auto px-6 pb-32 md:px-12'>
          <header className='grid min-h-[58vh] items-center gap-12 md:grid-cols-[minmax(0,1.3fr)_minmax(14rem,0.7fr)]'>
            <h1 className='max-w-4xl text-[clamp(3.75rem,7vw,7rem)] font-medium leading-[0.95] tracking-[-0.06em]'>
              <span className='block'>Let&apos;s start a</span>
              <span className='block'>project together</span>
            </h1>

            <div className='flex items-end gap-8 md:flex-col md:items-start md:justify-self-center'>
              <Image
                src='/profile.jpeg'
                width={128}
                height={128}
                className='size-24 rounded-full object-cover md:size-32'
                alt='Luis Vitoriano'
              />
              <ArrowDownRight size={36} strokeWidth={1} />
            </div>
          </header>

          <section className='grid gap-16 pt-8 lg:grid-cols-[minmax(0,2.49fr)_minmax(16rem,1fr)] lg:gap-16 xl:grid-cols-[minmax(0,867px)_minmax(0,349px)] xl:gap-[4.75rem]'>
            <form className='space-y-0 border-t border-background/25'>
              <ContactField
                number='01'
                label="What's your name?"
                placeholder='Your name *'
                required={true}
              />
              <ContactField
                number='02'
                label="What's your email?"
                placeholder='you@example.com *'
                type='email'
                required={true}
              />
              <ContactField
                number='03'
                label="What's the name of your organization?"
                placeholder='Your organization'
              />
              <ContactField
                number='04'
                label='What services are you looking for?'
                placeholder='Web development, mobile apps ...'
              />
              <ContactField
                number='05'
                label='Your message'
                placeholder='Tell me a little about your project ... *'
                required={true}
                textarea={true}
              />
              <div className='relative z-10 -mt-24 flex justify-end'>
                <ContactSendButton />
              </div>
            </form>

            <aside className='space-y-12 text-base lg:pl-[4.75rem]'>
              <ContactGroup title='Contact details'>
                <a
                  href='mailto:luizcarlosvitorianoneto@gmail.com'
                  className='block transition-colors hover:text-background/60'
                >
                  luizcarlosvitorianoneto@gmail.com
                </a>
                <a
                  href='tel:+5535997080310'
                  className='mt-3 block transition-colors hover:text-background/60'
                >
                  +55 35 99708-0310
                </a>
              </ContactGroup>

              <ContactGroup title='Business details'>
                <p>Luis Carlos Vitoriano</p>
                <p>Software Engineer</p>
                <p>Location: Brazil</p>
              </ContactGroup>

              <ContactGroup title='Socials'>
                <ul className='space-y-2'>
                  {socialMedias.map(({ href, title }) => (
                    <li key={href}>
                      <a
                        href={href}
                        target='_blank'
                        rel='noreferrer'
                        className='transition-colors hover:text-background/60'
                      >
                        {title}
                      </a>
                    </li>
                  ))}
                </ul>
              </ContactGroup>
            </aside>
          </section>
        </div>
      </main>
      <Contact footerOnly={true} />
    </Transition>
  );
}

function ContactGroup({ children, title }) {
  return (
    <div>
      <h2 className='mb-5 text-xs uppercase text-background/50'>{title}</h2>
      {children}
    </div>
  );
}

function ContactField({
  label,
  number,
  placeholder,
  required = false,
  textarea = false,
  type = 'text',
}) {
  const Field = textarea ? 'textarea' : 'input';

  return (
    <div
      className={`grid min-h-[11.375rem] gap-4 border-b border-background/25 pr-0 md:grid-cols-[3.5rem_minmax(0,1fr)] md:gap-6 lg:pr-[4.375rem] ${textarea ? 'min-h-[29.637rem]' : ''}`}
    >
      <span className='text-sm text-background/50'>{number}</span>
      <label className='flex flex-col gap-2 pt-10 text-xl md:text-2xl'>
        {label}
        <Field
          className='w-full bg-transparent pb-12 text-lg text-background outline-none placeholder:text-background/50 focus:placeholder:text-background/40 md:text-xl'
          name={number}
          placeholder={placeholder}
          required={required}
          type={textarea ? undefined : type}
          rows={textarea ? 4 : undefined}
        />
      </label>
    </div>
  );
}
