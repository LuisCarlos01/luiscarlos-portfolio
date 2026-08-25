<div align="center">

# Luis Carlos Portfolio

Personal portfolio focused on motion, interaction, and clean visual storytelling.

[Live site](https://luiscarlos-portfolio.vercel.app) · [GitHub](https://github.com/LuisCarlos01/luiscarlos-portfolio)

![CI/CD](https://img.shields.io/github/actions/workflow/status/LuisCarlos01/luiscarlos-portfolio/ci.yml?branch=main&label=CI%2FCD&logo=github)

<img
  src="./public/screen-record.gif"
  width="800"
  loading="lazy"
  alt="Portfolio demo"
/>

</div>

## Overview

This portfolio is built with Next.js and combines responsive layouts, smooth scrolling,
custom transitions, animated globes, and Cloudinary-powered media.

## Stack

- Next.js 14 and React 18
- JavaScript with JSDoc
- Tailwind CSS, Styled Components, and CSS variables
- Framer Motion, GSAP, and Lenis
- Cloudinary for optimized media
- pnpm, ESLint, Prettier, and Husky

## Pages

| Route      | Description                           |
| ---------- | ------------------------------------- |
| `/`        | Hero, introduction, and featured work |
| `/about`   | Profile, experience, and skills       |
| `/work`    | Selected projects                     |
| `/contact` | Contact details and form              |

## Getting started

Requirements: Node.js 20 and pnpm 9.

```bash
git clone https://github.com/LuisCarlos01/luiscarlos-portfolio.git
cd luiscarlos-portfolio
pnpm install
cp .env.example .env.local
pnpm dev
```

Open [http://localhost:4000](http://localhost:4000).

### Environment variables

Set these values in `.env.local`:

```env
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your_cloud_name
NEXT_PUBLIC_SITE_URL=http://localhost:4000
NEXT_PUBLIC_SITE_NAME="Luis Carlos Portfolio"
```

The Cloudinary cloud name is required for media components. Never commit `.env.local`.

## Commands

| Command             | Description                  |
| ------------------- | ---------------------------- |
| `pnpm dev`          | Start the development server |
| `pnpm lint`         | Run ESLint                   |
| `pnpm format:check` | Check Prettier formatting    |
| `pnpm build`        | Create the production build  |
| `pnpm start`        | Start the production server  |

## CI/CD

`.github/workflows/ci.yml` runs ESLint, Prettier, and the production build on pushes and
pull requests. A push to `main` deploys to Vercel only after all checks pass.

The deployment job requires these GitHub Actions secrets:

- `VERCEL_TOKEN`
- `VERCEL_ORG_ID`
- `VERCEL_PROJECT_ID`

## Documentation

Detailed architecture, Cloudinary, CI/CD, UI/UX, and ADR documentation is available in
[`docs/`](docs/).

## Credits

Inspired by [Dennis Snellenberg](https://dennissnellenberg.com/) and based on the original
template by [Ali Bagheri](https://github.com/AliBagheri2079/dennis-snellenberg-portfolio).

## License

MIT
