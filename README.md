<div id='top' align="center">

An Portfolio site template, implemented with [Next.js](https://nextjs.org/) and [Framer Motion](https://www.framer.com/motion/). Styled with [Tailwind CSS](https://tailwindcss.com/). This is one of my portfolios, but I would be pleased if these codes helped others, so I published it as an open-source project. feel free to explore it, and if you need help, ask me. I would respond as soon as possible.

<p>
  To support me, please create
  <strong>Pull request</strong>
  and give <strong>star⭐</strong>
  to this repository.
  <br/>
  I appreciate your support in advance. ❤
</p>

<p>

![GitHub top language](https://img.shields.io/github/languages/top/luiscarlosvn/dennis-snellenberg-portfolio)&nbsp;
![GitHub last commit](https://img.shields.io/github/last-commit/luiscarlosvn/dennis-snellenberg-portfolio)&nbsp;
![CI Status](https://img.shields.io/github/actions/workflow/status/luiscarlosvn/dennis-snellenberg-portfolio/ci.yml?label=CI&logo=github)&nbsp;
![CD Status](https://img.shields.io/github/actions/workflow/status/luiscarlosvn/dennis-snellenberg-portfolio/cd.yml?label=Deploy&logo=vercel)&nbsp;
![GitHub Repo stars](https://img.shields.io/github/stars/luiscarlosvn/dennis-snellenberg-portfolio?color=yellow)&nbsp;
![GitHub forks](https://img.shields.io/github/forks/luiscarlosvn/dennis-snellenberg-portfolio)

</p>

<p>

[Technologies](#-technologies) •
[Demo](#-demo) •
[Features](#-features) •
[Getting Started](#-getting-started) •
[CI/CD](#-cicd) •
[Contributing](#-contributing) •
[Links](#-links)

</p>

<img
  src="./public/screen-record.gif"
  loading="lazy"
  alt="home page screenshot"
/>

</div>

## 🔧 Technologies

![Next.js](https://img.shields.io/badge/-Next.js-05122A?style=for-the-badge&logo=next.js)&nbsp;
![JavaScript](https://img.shields.io/badge/-JavaScript-05122A?style=for-the-badge&logo=javascript)&nbsp;
![Framer Motion](https://img.shields.io/badge/-FramerMotion-05122A?style=for-the-badge&logo=framer)&nbsp;
![Tailwind CSS](https://img.shields.io/badge/-TailwindCSS-05122A?style=for-the-badge&logo=tailwindCSS&logoColor=06B6D4)

## ✨ Demo

You can visit and explore the portfolio at [Luis Carlos Portfolio](https://luiscarlosvn-portfolio.vercel.app/).

## 🔥 Features

- Using Next.js Cloudinary
- Using Framer Motion
- Using Gsap with Lenis
- Using React Wrap Balancer
- Using Styled Component
- Using Tailwindcss with Custom Plugin
- Using Postcss with Plugins
- Using Clsx with twMerge
- Fully responsive
- Page Transition with Smooth Scrolling
- Linting with Eslint and Stylelint
- Format with Prettier
- Husky and Lint-staged for Pre-committing
- Pnpm Package Manager
- GitHub Actions CI/CD
- Automated Deployment to Vercel
- Dependabot for Dependency Updates

## 📃 Pages

- Main (index)
- About
- Contact
- Work
- Custom Not Found Page

<p align="right">(<a href="#top">BACK TO TOP 🔝</a>)</p>

## 🚀 Getting Started

### Prerequisites

- Node.js 18.x or 20.x (recommended: 20.11.0)
- PNPM 8.x
- Git

### Installation

1. Clone the repository

```bash
git clone https://github.com/luiscarlosvn/dennis-snellenberg-portfolio.git
cd dennis-snellenberg-portfolio
```

2. Install dependencies

```bash
pnpm install
```

3. Set up environment variables

```bash
# Copy the example file to create your local environment file
cp .env.example .env.local

# Edit .env.local with your actual values
# Note: .env.local is gitignored and contains your secrets
# Never commit .env.local to the repository!
```

4. Run the development server

```bash
pnpm dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
pnpm build
pnpm start
```

### Linting and Formatting

```bash
# Run ESLint
pnpm lint

# Run Prettier
pnpm exec prettier --check "**/*.{js,jsx,json,css,md}"

# Run Stylelint
pnpm exec stylelint "**/*.css"
```

<p align="right">(<a href="#top">BACK TO TOP 🔝</a>)</p>

## 🔄 CI/CD

This project uses GitHub Actions for continuous integration and deployment.

### Workflows

#### CI Pipeline (`.github/workflows/ci.yml`)

Runs on every push and pull request:

- **Quality Checks**: ESLint, Stylelint, Prettier
- **Build Validation**: Production build test
- **Multi-version Testing**: Node 18.x and 20.x

#### CD Pipeline (`.github/workflows/cd.yml`)

- **Preview Deployments**: Automatic preview for PRs
- **Production Deployment**: Automatic deploy on merge to `main`
- **Vercel Integration**: Uses Vercel CLI for deployments

### Setting Up CI/CD

#### 1. Configure GitHub Secrets

Go to your repository settings → Secrets and variables → Actions, and add:

```
VERCEL_TOKEN         # Get from Vercel Account Settings
VERCEL_ORG_ID        # Get from .vercel/project.json after linking
VERCEL_PROJECT_ID    # Get from .vercel/project.json after linking
```

#### 2. Link Vercel Project

```bash
# Install Vercel CLI
pnpm add -g vercel

# Link your project
vercel link

# The IDs will be in .vercel/project.json
```

#### 3. Configure Branch Protection

Go to repository Settings → Branches → Add rule for `main`:

- ✅ Require pull request before merging
- ✅ Require status checks to pass (select: Quality Checks, Build Validation)
- ✅ Require conversation resolution before merging
- ✅ Require linear history

### Dependabot

Automated dependency updates run weekly:

- **npm dependencies**: Monday 9 AM
- **GitHub Actions**: Monday 9 AM
- Auto-grouped minor and patch updates
- Manual review required for major versions

### Workflow for Contributors

```bash
# 1. Create a feature branch
git checkout -b feature/your-feature

# 2. Make your changes and commit
git commit -m "feat: add new feature"

# 3. Push to GitHub
git push origin feature/your-feature

# 4. Open a Pull Request
# CI will automatically run and create a preview deployment

# 5. After approval and CI passes, merge to main
# CD will automatically deploy to production
```

<p align="right">(<a href="#top">BACK TO TOP 🔝</a>)</p>

## 🤝 Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes using [Conventional Commits](https://www.conventionalcommits.org/) (`git commit -m 'feat: add some amazing feature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request (use the provided PR template)
6. Wait for CI checks to pass
7. Request review from maintainers

### Commit Message Convention

This project follows [Conventional Commits](https://www.conventionalcommits.org/):

- `feat:` New feature
- `fix:` Bug fix
- `docs:` Documentation changes
- `style:` Code style changes (formatting, etc.)
- `refactor:` Code refactoring
- `perf:` Performance improvements
- `test:` Adding or updating tests
- `chore:` Maintenance tasks

## 🔗 Links

<p>
  <a href="https://github.com/luiscarlosvn">
    <img src="https://img.shields.io/badge/Github-000?style=flat&logo=github&logoColor=white"/>
  </a>
  <a href="https://www.linkedin.com/in/luiscarlosvn">
    <img src="https://img.shields.io/badge/linkedin-0A66C2?style=flat&logo=linkedin&logoColor=white"/>
  </a>
</p>

## 📄 License

This project is open source and available under the MIT License.

## 🙏 Acknowledgments

This portfolio is based on the amazing work by [Dennis Snellenberg](https://dennissnellenberg.com/). Original template by [Ali Bagheri](https://github.com/AliBagheri2079/dennis-snellenberg-portfolio).

<p align="right">(<a href="#top">BACK TO TOP 🔝</a>)</p>
