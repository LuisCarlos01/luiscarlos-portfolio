# Documentação do Projeto

Bem-vindo à documentação completa do Luis Carlos Portfolio.

## 📂 Estrutura de Documentação

### 🏗️ [Arquitetura](./arquitetura/ARCHITECTURE.md)

Visão geral da arquitetura do projeto, decisões técnicas e estrutura de pastas.

### 🧠 [Análise Arquitetural](./analise-archsoftware/analise-arquitetural.md)

Análise completa dos princípios arquiteturais aplicados, boas práticas, anti-patterns e recomendações para evolução do projeto.

### 📝 [ADRs (Architecture Decision Records)](./adr/README.md)

Registro de todas as decisões arquiteturais importantes do projeto:

- [ADR-001: Next.js 14 App Router](./adr/ADR-001-nextjs-14-app-router.md)
- [ADR-002: Estilização Híbrida](./adr/ADR-002-estilizacao-hibrida.md)
- [ADR-003: Design Tokens CSS Variables](./adr/ADR-003-design-tokens-css-variables.md)
- [ADR-004: Animações Framer Motion + GSAP](./adr/ADR-004-animacoes-framer-motion-gsap.md)
- [ADR-005: Scroll Suave com Lenis](./adr/ADR-005-scroll-suave-lenis.md)
- [ADR-006: Mídia com Cloudinary](./adr/ADR-006-midia-cloudinary.md)
- [ADR-007: Tipografia Font Local](./adr/ADR-007-tipografia-font-local.md)
- [ADR-008: Organização Pastas Underscore](./adr/ADR-008-organizacao-pastas-underscore.md)
- [ADR-009: Utilitário Classes CVA](./adr/ADR-009-utilitario-classes-cva.md)
- [ADR-010: Tipagem JSDoc](./adr/ADR-010-tipagem-jsdoc.md)
- [ADR-011: Qualidade Código Linting](./adr/ADR-011-qualidade-codigo-linting.md)
- [ADR-012: Package Manager PNPM](./adr/ADR-012-package-manager-pnpm.md)

### 🚀 [CI/CD Setup](./CI-CD-SETUP/README.md)

Documentação completa sobre Integração e Deploy Contínuos:

- [Guia de Setup](./CI-CD-SETUP/CI-CD-SETUP.md)
- [Checklist de Produção](./CI-CD-SETUP/PRODUCTION-CHECKLIST.md)
- [Variáveis de Ambiente](./CI-CD-SETUP/ENVIRONMENT-VARIABLES.md)

### 🎨 [UI/UX](./UI-UX/UI-UX.md)

Guia de design, componentes e padrões visuais do projeto.

### 🗺️ [Mapa de Pastas](./mapa-pastas/FOLDER-MAP.md)

Estrutura detalhada de diretórios e organização dos arquivos.

### 📋 [Briefing](./briefing/BRIEFING.md)

Informações sobre o projeto, objetivos e contexto.

### ⚙️ [Personalização](./PERSONALIZACAO.md)

Guia para personalizar o portfolio com suas informações.

## 🚀 Quick Links

### Para Desenvolvedores

- **Começando**: [README Principal](../README.md)
- **Setup Local**: [CI/CD Setup](./CI-CD-SETUP/CI-CD-SETUP.md)
- **Variáveis**: [Environment Variables](./CI-CD-SETUP/ENVIRONMENT-VARIABLES.md)
- **Personalizar**: [Guia de Personalização](./PERSONALIZACAO.md)

### Para Manutenção

- **CI/CD**: [Workflows](./CI-CD-SETUP/README.md)
- **Deploy**: [Production Checklist](./CI-CD-SETUP/PRODUCTION-CHECKLIST.md)
- **Arquitetura**: [Architecture Overview](./arquitetura/ARCHITECTURE.md)
- **Análise**: [Análise Arquitetural](./analise-archsoftware/analise-arquitetural.md)
- **Decisões**: [ADRs](./adr/README.md)

## 📖 Ordem de Leitura Recomendada

### 1️⃣ Para Novos Desenvolvedores

1. [README Principal](../README.md) - Visão geral
2. [Arquitetura](./arquitetura/ARCHITECTURE.md) - Entender a estrutura
3. [Análise Arquitetural](./analise-archsoftware/analise-arquitetural.md) - Princípios e boas práticas
4. [Mapa de Pastas](./mapa-pastas/FOLDER-MAP.md) - Onde está cada coisa
5. [UI/UX](./UI-UX/UI-UX.md) - Padrões visuais
6. [CI/CD Setup](./CI-CD-SETUP/CI-CD-SETUP.md) - Configurar ambiente

### 2️⃣ Para Personalizar

1. [Personalização](./PERSONALIZACAO.md) - Guia completo
2. [Environment Variables](./CI-CD-SETUP/ENVIRONMENT-VARIABLES.md) - Configurar vars
3. [Briefing](./briefing/BRIEFING.md) - Contexto do projeto

### 3️⃣ Para Deploy

1. [Environment Variables](./CI-CD-SETUP/ENVIRONMENT-VARIABLES.md) - Setup vars
2. [Production Checklist](./CI-CD-SETUP/PRODUCTION-CHECKLIST.md) - Checklist completo
3. [CI/CD Setup](./CI-CD-SETUP/CI-CD-SETUP.md) - Configurar pipelines

## 🏗️ Estrutura do Projeto

```
docs/
├── adr/                      # Architecture Decision Records
│   ├── ADR-001-*.md
│   ├── ADR-002-*.md
│   └── README.md
├── arquitetura/              # Documentação de arquitetura
│   └── ARCHITECTURE.md
├── analise-archsoftware/     # Análise arquitetural
│   └── analise-arquitetural.md
├── briefing/                 # Briefing do projeto
│   └── BRIEFING.md
├── CI-CD-SETUP/             # Documentação CI/CD
│   ├── CI-CD-SETUP.md
│   ├── PRODUCTION-CHECKLIST.md
│   ├── ENVIRONMENT-VARIABLES.md
│   └── README.md
├── mapa-pastas/             # Mapa da estrutura
│   └── FOLDER-MAP.md
├── UI-UX/                   # Design e UX
│   └── UI-UX.md
├── PERSONALIZACAO.md        # Guia de personalização
└── README.md                # Você está aqui
```

## 🔍 Busca Rápida

### Stack Tecnológica

- **Framework**: Next.js 14 ([ADR-001](./adr/ADR-001-nextjs-14-app-router.md))
- **Linguagem**: JavaScript + JSDoc ([ADR-010](./adr/ADR-010-tipagem-jsdoc.md))
- **Styling**: TailwindCSS + Styled Components ([ADR-002](./adr/ADR-002-estilizacao-hibrida.md))
- **Animações**: Framer Motion + GSAP ([ADR-004](./adr/ADR-004-animacoes-framer-motion-gsap.md))
- **Scroll**: Lenis ([ADR-005](./adr/ADR-005-scroll-suave-lenis.md))
- **Package Manager**: PNPM ([ADR-012](./adr/ADR-012-package-manager-pnpm.md))

### Comandos Úteis

```bash
# Desenvolvimento
pnpm dev

# Build
pnpm build

# Linting
pnpm lint

# Produção local
pnpm start
```

### Workflows

- **CI**: `.github/workflows/ci.yml` - Validação
- **CD**: `.github/workflows/cd.yml` - Deploy

## 📞 Contato e Suporte

- **Repositório**: [GitHub](https://github.com/luiscarlosvn/dennis-snellenberg-portfolio)
- **Issues**: [Abrir Issue](https://github.com/luiscarlosvn/dennis-snellenberg-portfolio/issues)
- **Maintainer**: [@luiscarlosvn](https://github.com/luiscarlosvn)

## 📄 License

Este projeto é open source sob a licença MIT.

---

**Última atualização**: Janeiro 2026  
**Versão da Documentação**: 1.0.0
