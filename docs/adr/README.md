# Architecture Decision Records (ADR)

## Sobre este Projeto

**Projeto:** Luis Carlos Portfolio  
**Autor:** Luis Carlos  
**Data de Criação:** Novembro 2024  
**Origem:** Fork do [Dennis Snellenberg Portfolio](https://github.com/AliBagheri2079/dennis-snellenberg-portfolio)

Este projeto é um fork do portfolio Dennis Snellenberg, criado com o objetivo de reutilizar a arquitetura, estilização e boas práticas do projeto original como base para um novo portfolio pessoal.

---

## O que são ADRs?

Architecture Decision Records (ADRs) são documentos curtos que capturam decisões arquiteturais importantes feitas durante o desenvolvimento de um projeto. Eles servem para:

- Documentar o contexto e as razões por trás de cada decisão
- Facilitar o onboarding de novos desenvolvedores
- Manter um histórico das evoluções do projeto
- Apoiar decisões futuras sem precisar reanalisar todo o código

---

## Índice de ADRs

### Decisões Herdadas (Novembro 2024)

| ADR | Título | Status |
|-----|--------|--------|
| [ADR-001](ADR-001-nextjs-14-app-router.md) | Next.js 14 com App Router | Aceito |
| [ADR-002](ADR-002-estilizacao-hibrida.md) | Estilização Híbrida: Tailwind CSS + Styled Components | Aceito |
| [ADR-003](ADR-003-design-tokens-css-variables.md) | Design Tokens via CSS Variables | Aceito |
| [ADR-004](ADR-004-animacoes-framer-motion-gsap.md) | Animações: Framer Motion + GSAP | Aceito |
| [ADR-005](ADR-005-scroll-suave-lenis.md) | Scroll Suave via Lenis | Aceito |
| [ADR-006](ADR-006-midia-cloudinary.md) | Gerenciamento de Mídia via Cloudinary | Aceito |
| [ADR-007](ADR-007-tipografia-font-local.md) | Tipografia: Font Local Customizada | Aceito |
| [ADR-008](ADR-008-organizacao-pastas-underscore.md) | Organização de Pastas com Prefixo Underscore | Aceito |
| [ADR-009](ADR-009-utilitario-classes-cva.md) | Utilitário de Classes: CVA + clsx + tailwind-merge | Aceito |
| [ADR-010](ADR-010-tipagem-jsdoc.md) | Tipagem via JSDoc | Aceito |
| [ADR-011](ADR-011-qualidade-codigo-linting.md) | Qualidade de Código: ESLint + Stylelint + Prettier + Husky | Aceito |
| [ADR-012](ADR-012-package-manager-pnpm.md) | Package Manager: pnpm | Aceito |

### Decisões Futuras

*Novos ADRs serão adicionados aqui conforme o projeto evolui.*

---

## Como Criar um Novo ADR

1. Copie o template abaixo
2. Crie um arquivo com o padrão `ADR-XXX-titulo-em-kebab-case.md`
3. Preencha todas as seções
4. Adicione o link na tabela acima

### Template

```markdown
# ADR-XXX — Título da Decisão

- **Autor:** [Seu Nome]
- **Status:** Proposto | Aceito | Deprecado | Substituído
- **Data:** [YYYY-MM-DD]
- **Origem:** Nova decisão | Herdado de [fonte]

## Contexto

Descreva o problema ou necessidade que motivou esta decisão.

## Decisão

Descreva objetivamente a decisão tomada.

## Alternativas Consideradas

Liste as alternativas avaliadas e por que não foram escolhidas.

## Consequências

### Positivas
- Item 1
- Item 2

### Negativas / Limitações
- Item 1
- Item 2

### Quando Revisar
- Condição 1
- Condição 2
```

---

## Arquitetura Geral

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
