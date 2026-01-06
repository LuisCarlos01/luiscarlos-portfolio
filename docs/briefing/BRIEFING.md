# 📋 Briefing do Projeto

## Visão Geral

| Campo              | Valor                                                                                                  |
| ------------------ | ------------------------------------------------------------------------------------------------------ |
| **Projeto**        | Luis Carlos Portfolio                                                                                  |
| **Tipo**           | Portfolio Pessoal                                                                                      |
| **Origem**         | Fork do [Dennis Snellenberg Portfolio](https://github.com/AliBagheri2079/dennis-snellenberg-portfolio) |
| **Autor Original** | Ali Bagheri                                                                                            |
| **Adaptação**      | Luis Carlos                                                                                            |
| **Data de Início** | Novembro 2024                                                                                          |

---

## 🎯 Objetivo

Desenvolver um **portfolio pessoal moderno e interativo**, reutilizando a arquitetura, estilização e boas práticas do projeto original como base sólida. O foco é personalização de conteúdo e possíveis melhorias incrementais mantendo a qualidade técnica.

---

## 🏗️ Arquitetura Técnica

```
┌─────────────────────────────────────────────────────────────┐
│                     Framework Layer                          │
│                 Next.js 14 + React 18                        │
├─────────────────────────────────────────────────────────────┤
│                     Styling Layer                            │
│    Tailwind CSS + Styled Components + CVA + CSS Variables    │
├─────────────────────────────────────────────────────────────┤
│                    Animation Layer                           │
│           Framer Motion + GSAP + Lenis                       │
├─────────────────────────────────────────────────────────────┤
│                      Media Layer                             │
│                   Next-Cloudinary                            │
├─────────────────────────────────────────────────────────────┤
│                  Code Quality Layer                          │
│        ESLint + Stylelint + Prettier + Husky                 │
└─────────────────────────────────────────────────────────────┘
```

---

## 🔧 Stack Tecnológica

### Core

| Tecnologia  | Versão | Propósito                      |
| ----------- | ------ | ------------------------------ |
| **Next.js** | 14.x   | Framework React com App Router |
| **React**   | 18.x   | Biblioteca UI                  |
| **pnpm**    | -      | Package Manager                |

### Estilização

| Tecnologia                | Propósito                                   |
| ------------------------- | ------------------------------------------- |
| **Tailwind CSS**          | Utility-first CSS para layout e espaçamento |
| **Styled Components**     | CSS-in-JS para componentes dinâmicos        |
| **CVA**                   | Class Variance Authority para variantes     |
| **clsx + tailwind-merge** | Merge de classes utilitárias                |
| **CSS Variables**         | Design tokens centralizados                 |

### Animações

| Tecnologia        | Propósito                                                 |
| ----------------- | --------------------------------------------------------- |
| **Framer Motion** | Animações declarativas (transições, entrada/saída)        |
| **GSAP**          | Animações imperativas de alta performance (cursor follow) |
| **Lenis**         | Scroll suave e consistente                                |

### Mídia

| Tecnologia          | Propósito                              |
| ------------------- | -------------------------------------- |
| **Next-Cloudinary** | Otimização e entrega de imagens/vídeos |

### Qualidade de Código

| Ferramenta      | Propósito                  |
| --------------- | -------------------------- |
| **ESLint**      | Linting JavaScript/JSX     |
| **Stylelint**   | Linting CSS/SCSS           |
| **Prettier**    | Formatação de código       |
| **Husky**       | Git hooks                  |
| **lint-staged** | Linting em arquivos staged |

---

## 📁 Estrutura de Pastas

```
app/
├── _components/      # Componentes reutilizáveis
├── _hooks/           # Custom hooks
├── _layout/          # Componentes de layout
├── _providers/       # Context providers
├── _utils/           # Utilitários
├── about/            # Página About
├── contact/          # Página Contact
├── work/             # Página Work
├── layout.jsx        # Layout raiz
├── page.jsx          # Página inicial
└── not-found.jsx     # Página 404
```

> **Nota:** O prefixo `_` (underscore) indica pastas que não são rotas do Next.js

---

## 📄 Páginas do Portfolio

| Página      | Rota       | Descrição                             |
| ----------- | ---------- | ------------------------------------- |
| **Home**    | `/`        | Página principal com hero e destaques |
| **About**   | `/about`   | Informações pessoais e trajetória     |
| **Work**    | `/work`    | Projetos e trabalhos realizados       |
| **Contact** | `/contact` | Formulário e informações de contato   |
| **404**     | `*`        | Página de erro customizada            |

---

## ✨ Features Herdadas

- ✅ Renderização híbrida (SSR/SSG/ISR)
- ✅ Transições de página suaves
- ✅ Scroll suave com Lenis
- ✅ Cursor customizado com follow effect
- ✅ Animações de entrada/saída de componentes
- ✅ Design responsivo completo
- ✅ Otimização de imagens via Cloudinary
- ✅ SEO otimizado via Metadata API
- ✅ Pre-commit hooks com linting automático
- ✅ Tipagem via JSDoc (sem TypeScript)

---

## 🎨 Design Tokens

Os tokens de design são centralizados via **CSS Variables**, permitindo:

- Consistência visual entre Tailwind e Styled Components
- Fácil customização do tema
- Suporte a dark mode (se implementado)

---

## 📚 Documentação

| Documento               | Descrição                    |
| ----------------------- | ---------------------------- |
| `docs/adr/README.md`    | Índice de ADRs e arquitetura |
| `docs/adr/ADR-001-*.md` | Next.js 14 com App Router    |
| `docs/adr/ADR-002-*.md` | Estilização Híbrida          |
| `docs/adr/ADR-003-*.md` | Design Tokens                |
| `docs/adr/ADR-004-*.md` | Animações                    |
| `docs/adr/ADR-005-*.md` | Scroll Suave                 |
| `docs/adr/ADR-006-*.md` | Mídia (Cloudinary)           |
| `docs/adr/ADR-007-*.md` | Tipografia                   |
| `docs/adr/ADR-008-*.md` | Organização de Pastas        |
| `docs/adr/ADR-009-*.md` | Utilitário de Classes        |
| `docs/adr/ADR-010-*.md` | Tipagem JSDoc                |
| `docs/adr/ADR-011-*.md` | Qualidade de Código          |
| `docs/adr/ADR-012-*.md` | Package Manager              |

---

## 🚀 Como Iniciar

```bash
# Instalar dependências
pnpm install

# Iniciar desenvolvimento
pnpm dev

# Build de produção
pnpm build

# Executar produção local
pnpm start

# Linting
pnpm lint
```

---

## 📋 Roadmap Sugerido

### Fase 1: Personalização

- [ ] Atualizar informações pessoais
- [ ] Substituir projetos de exemplo
- [ ] Atualizar imagens/vídeos no Cloudinary
- [ ] Personalizar cores e tipografia

### Fase 2: Melhorias

- [ ] Adicionar novos projetos ao portfolio
- [ ] Implementar formulário de contato funcional
- [ ] Otimizar performance (Lighthouse)
- [ ] Configurar analytics

### Fase 3: Expansão

- [ ] Adicionar seção de blog (opcional)
- [ ] Implementar dark mode
- [ ] Adicionar internacionalização (i18n)

---

## ⚠️ Considerações Importantes

### Bundle Size

O projeto utiliza múltiplas bibliotecas de estilização e animação. Monitorar o bundle size é importante para manter boa performance.

### Licenciamento

- **GSAP**: Gratuito para uso, mas verificar licença para projetos comerciais
- **Fontes**: Verificar licenciamento das fontes customizadas

### Cloudinary

Requer configuração de conta e variáveis de ambiente para funcionamento correto das mídias.

---

## 🔗 Links Úteis

- [Documentação Next.js](https://nextjs.org/docs)
- [Framer Motion](https://www.framer.com/motion/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Styled Components](https://styled-components.com/)
- [GSAP](https://greensock.com/gsap/)
- [Lenis](https://lenis.studiofreight.com/)
- [Cloudinary](https://cloudinary.com/)

---

_Última atualização: Janeiro 2026_
