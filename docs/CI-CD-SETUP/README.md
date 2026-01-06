# CI/CD Documentation

Documentação completa sobre Integração Contínua e Deploy Contínuo deste projeto.

## 📚 Documentos Disponíveis

### [CI-CD-SETUP.md](./CI-CD-SETUP.md)
**Guia completo de configuração do CI/CD**

- Pré-requisitos e instalação
- Configuração de secrets no GitHub
- Setup do Vercel
- Fluxo de trabalho detalhado
- Troubleshooting completo
- Otimizações e boas práticas

**Quando usar**: Primeira vez configurando o projeto ou fazendo troubleshooting.

---

### [PRODUCTION-CHECKLIST.md](./PRODUCTION-CHECKLIST.md)
**Checklist passo a passo para ir para produção**

- ✅ Pré-deploy checks
- ⚙️ Configuração GitHub e Vercel
- 🧪 Primeiro deploy de teste
- 📊 Monitoramento pós-deploy
- 🔐 Segurança
- 📝 Documentação

**Quando usar**: Antes de fazer o primeiro deploy ou para auditar o setup.

---

### [ENVIRONMENT-VARIABLES.md](./ENVIRONMENT-VARIABLES.md)
**Guia completo de variáveis de ambiente**

- Diferença entre `.env.example` e `.env.local`
- Setup local e em produção
- Lista de todas as variáveis
- Práticas de segurança
- Configuração no Vercel
- Troubleshooting

**Quando usar**: Configurando o ambiente local ou adicionando novas variáveis.

---

## 🚀 Quick Start

### Para Novos Desenvolvedores

1. **Clone o repositório**
   ```bash
   git clone <repo-url>
   cd dennis-snellenberg-portfolio
   ```

2. **Configure o ambiente**
   ```bash
   # Copie o template de variáveis
   cp .env.example .env.local
   
   # Edite com seus valores
   # Veja ENVIRONMENT-VARIABLES.md para detalhes
   ```

3. **Instale dependências**
   ```bash
   pnpm install
   ```

4. **Execute o projeto**
   ```bash
   pnpm dev
   ```

### Para Configurar CI/CD

Siga o guia completo: **[CI-CD-SETUP.md](./CI-CD-SETUP.md)**

Resumo rápido:
1. Configure secrets no GitHub (VERCEL_TOKEN, VERCEL_ORG_ID, VERCEL_PROJECT_ID)
2. Configure branch protection na branch `main`
3. Abra um PR de teste para validar

### Para Deploy em Produção

Use o checklist: **[PRODUCTION-CHECKLIST.md](./PRODUCTION-CHECKLIST.md)**

## 🔄 Fluxo de Trabalho

```
┌─────────────────────────────────────────────────────────┐
│ 1. Desenvolvedor cria branch feature/xyz               │
└────────────────────────┬────────────────────────────────┘
                         │
                         ▼
┌─────────────────────────────────────────────────────────┐
│ 2. Faz commits com Conventional Commits                │
│    feat: adiciona nova funcionalidade                   │
└────────────────────────┬────────────────────────────────┘
                         │
                         ▼
┌─────────────────────────────────────────────────────────┐
│ 3. Push e abre Pull Request para main                  │
└────────────────────────┬────────────────────────────────┘
                         │
                         ▼
┌─────────────────────────────────────────────────────────┐
│ 4. CI roda automaticamente                             │
│    ✓ Quality Checks (lint, format)                     │
│    ✓ Build Validation                                  │
└────────────────────────┬────────────────────────────────┘
                         │
                         ▼
┌─────────────────────────────────────────────────────────┐
│ 5. CD cria Preview Deploy                              │
│    URL comentada automaticamente no PR                 │
└────────────────────────┬────────────────────────────────┘
                         │
                         ▼
┌─────────────────────────────────────────────────────────┐
│ 6. Code Review e aprovação                             │
└────────────────────────┬────────────────────────────────┘
                         │
                         ▼
┌─────────────────────────────────────────────────────────┐
│ 7. Merge para main                                      │
└────────────────────────┬────────────────────────────────┘
                         │
                         ▼
┌─────────────────────────────────────────────────────────┐
│ 8. CD faz deploy em PRODUÇÃO automaticamente          │
└─────────────────────────────────────────────────────────┘
```

## 📖 Estrutura de Arquivos

```
.github/
├── workflows/
│   ├── ci.yml          # Pipeline de validação
│   └── cd.yml          # Pipeline de deploy
├── ISSUE_TEMPLATE/     # Templates de issues
├── pull_request_template.md
├── dependabot.yml
└── CODEOWNERS

docs/CI-CD-SETUP/
├── CI-CD-SETUP.md              # Este guia
├── PRODUCTION-CHECKLIST.md     # Checklist
├── ENVIRONMENT-VARIABLES.md    # Variáveis de ambiente
└── README.md                   # Você está aqui
```

## 🔗 Links Úteis

### Documentação do Projeto
- [README Principal](../../README.md)
- [Arquitetura](../arquitetura/ARCHITECTURE.md)
- [ADRs](../adr/README.md)
- [Personalização](../PERSONALIZACAO.md)

### Recursos Externos
- [GitHub Actions Docs](https://docs.github.com/actions)
- [Vercel Docs](https://vercel.com/docs)
- [Next.js Deployment](https://nextjs.org/docs/deployment)
- [PNPM in CI](https://pnpm.io/continuous-integration)
- [Conventional Commits](https://www.conventionalcommits.org/)

## 🆘 Precisa de Ajuda?

1. **Problema com CI/CD**: Veja [CI-CD-SETUP.md](./CI-CD-SETUP.md) → Seção Troubleshooting
2. **Problema com variáveis**: Veja [ENVIRONMENT-VARIABLES.md](./ENVIRONMENT-VARIABLES.md) → Seção Troubleshooting
3. **Primeiro deploy**: Use [PRODUCTION-CHECKLIST.md](./PRODUCTION-CHECKLIST.md)
4. **Outros problemas**: Abra uma issue no repositório

## 📊 Status dos Workflows

Você pode ver o status atual dos workflows em:

```
https://github.com/seu-usuario/dennis-snellenberg-portfolio/actions
```

Badges no README principal mostram o status:
- 🟢 Verde: Tudo funcionando
- 🔴 Vermelho: Algum problema
- 🟡 Amarelo: Em execução

---

**Mantido por**: Luis Carlos Vitoriano Neto  
**Última atualização**: Janeiro 2026
