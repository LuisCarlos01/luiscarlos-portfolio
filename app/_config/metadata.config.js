/** @type {import('next').Metadata} */
export const rootMetadata = {
  // TODO: Atualizar metadataBase quando tiver domínio próprio
  metadataBase: new URL('https://luiscarlos-portfolio.vercel.app/'),
  title: {
    template: '%s | Luis Carlos',
    default: 'Luis Carlos • Mobile & Frontend Developer',
  },
  description:
    'Crafting seamless mobile experiences and modern web interfaces. Passionate about clean code, intuitive design, and bringing ideas to life through React, React Native, and Next.js.',
  generator: 'Luis Carlos Vitoriano Neto',
  applicationName: 'Luis Carlos Portfolio',
  referrer: 'origin-when-cross-origin',
  keywords: ['Mobile Developer', 'Frontend Developer', 'React', 'React Native', 'Next.js', 'JavaScript', 'TypeScript'],
  authors: [
    { name: 'Luis Carlos Vitoriano Neto', url: 'https://github.com/luiscarlos' }, // TODO: Atualizar com seu GitHub real
  ],
  creator: 'Luis Carlos Vitoriano Neto',
  publisher: 'Luis Carlos Vitoriano Neto',
  twitter: {
    card: 'summary_large_image',
    title: 'Luis Carlos • Mobile & Frontend Developer',
    description:
      'Crafting seamless mobile experiences and modern web interfaces. Passionate about clean code, intuitive design, and bringing ideas to life.',
    // TODO: Atualizar com suas credenciais do Twitter/X quando disponível
    // siteId: 'SEU_SITE_ID',
    // creator: '@seutwitter',
    // creatorId: 'SEU_CREATOR_ID',
    images: {
      url: 'https://luiscarlos-portfolio.vercel.app/screenshot.png', // TODO: Atualizar com screenshot real
      alt: 'Luis Carlos Portfolio Screenshot',
    },
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};
