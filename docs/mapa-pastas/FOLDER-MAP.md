# Mapa de Pastas do Projeto

Estrutura completa de diretórios do portfolio.

---

## Raiz do Projeto

```
/
├── app/                    # Código fonte (Next.js App Router)
├── docs/                   # Documentação
├── public/                 # Assets estáticos
├── .husky/                 # Git hooks
├── jsconfig.json           # Path aliases
├── next.config.js          # Configuração Next.js
├── package.json            # Dependências
├── pnpm-lock.yaml          # Lock file
├── postcss.config.js       # Configuração PostCSS
├── tailwind.config.js      # Configuração Tailwind
├── .eslintrc.json          # Regras ESLint
├── .prettierrc.json        # Regras Prettier
├── .stylelintrc.json       # Regras Stylelint
└── README.md               # Documentação principal
```

---

## Pasta app/

```
app/
├── _components/            # Componentes reutilizáveis
│   ├── common/             # UI genéricos (button, magnetic)
│   ├── in-progress/        # Placeholder para páginas WIP
│   ├── parallax/           # Efeitos parallax (fade, reveal, slider)
│   ├── stack/              # Layout utilities (center, overlay)
│   └── svg/                # Ícones SVG
│
├── _config/                # Configurações da aplicação
│   └── metadata.config.js  # Metadata para SEO
│
├── _data/                  # Dados estáticos
│   ├── nav-items.js        # Links de navegação
│   ├── preloader-words.js  # Palavras do preloader
│   ├── project-options.js  # Opções de projetos
│   ├── social-medias.js    # Redes sociais
│   └── thumbnail-options.js# Opções de thumbnails
│
├── _fonts/                 # Fontes locais
│   └── neue-montreal/      # Fonte Neue Montreal
│
├── _hooks/                 # Custom hooks
│   ├── use-contact-slider.js
│   ├── use-dimensions.js
│   ├── use-follow-pointer.js
│   ├── use-lenis.js
│   ├── use-magnetic.js
│   ├── use-offcanvas-toggle.js
│   ├── use-parallax-slider.js
│   ├── use-project-slider.js
│   └── use-time-out.js
│
├── _layout/                # Componentes de layout
│   ├── contact/            # Seção de contato
│   ├── description/        # Seção de descrição
│   ├── header/             # Cabeçalho
│   ├── navbar/             # Navegação (brand, list)
│   ├── offcanvas/          # Menu mobile
│   ├── project/            # Seção de projetos
│   ├── thumbnail/          # Grid de thumbnails
│   └── transition/         # Transições de página
│
├── _lib/                   # Bibliotecas e plugins
│   └── plugins/            # Plugins customizados (tailwind)
│
├── _providers/             # Context providers
│   ├── balancer/           # Balanceamento de texto
│   └── styled-components/  # Registry SSR
│
├── _utils/                 # Funções utilitárias
│   └── helpers/            # Helpers (class-name, random-id)
│
├── (in-progress)/          # Páginas em desenvolvimento
│   ├── about/              # /about
│   ├── contact/            # /contact
│   └── work/               # /work
│
├── layout.jsx              # Layout raiz
├── page.jsx                # Home (/)
├── not-found.jsx           # Página 404
├── globals.css             # Estilos globais
└── favicon.ico             # Favicon
```

---

## Pasta docs/

```
docs/
├── adr/                    # Architecture Decision Records
│   ├── ADR-001-nextjs-14-app-router.md
│   ├── ADR-002-estilizacao-hibrida.md
│   ├── ADR-003-design-tokens-css-variables.md
│   ├── ADR-004-animacoes-framer-motion-gsap.md
│   ├── ADR-005-scroll-suave-lenis.md
│   ├── ADR-006-midia-cloudinary.md
│   ├── ADR-007-tipografia-font-local.md
│   ├── ADR-008-organizacao-pastas-underscore.md
│   ├── ADR-009-utilitario-classes-cva.md
│   ├── ADR-010-tipagem-jsdoc.md
│   ├── ADR-011-qualidade-codigo-linting.md
│   ├── ADR-012-package-manager-pnpm.md
│   └── README.md
│
├── arquitetura/            # Documentação de arquitetura
│   └── ARCHITECTURE.md
│
└── briefing/               # Briefing do projeto
    └── BRIEFING.md
```

---

## Pasta public/

```
public/
├── screen-record.gif       # GIF de demonstração
└── screenshot.png          # Screenshot do projeto
```

---

## Legenda

| Prefixo | Significado                               |
| ------- | ----------------------------------------- |
| `_`     | Pasta privada (não é rota do Next.js)     |
| `()`    | Route group (agrupa rotas sem afetar URL) |
| `.`     | Arquivo/pasta de configuração oculta      |

---

_Última atualização: Janeiro 2026_
