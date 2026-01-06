# CI/CD Setup Guide

Este documento fornece instruções detalhadas para configurar e utilizar o sistema de CI/CD deste projeto.

## Visão Geral

Este projeto utiliza GitHub Actions para CI/CD com deploy automático no Vercel:

- **CI (Continuous Integration)**: Valida qualidade de código e build
- **CD (Continuous Deployment)**: Deploy automático em preview e produção

## Arquitetura de Workflows

```
┌─────────────────────────────────────────────────────────┐
│                    Push/Pull Request                    │
└────────────────────┬────────────────────────────────────┘
                     │
        ┌────────────┴────────────┐
        │                         │
        ▼                         ▼
┌───────────────┐         ┌──────────────┐
│  CI Workflow  │         │ CD Workflow  │
│               │         │              │
│ ✓ Lint        │         │ (waits for   │
│ ✓ Format      │────────▶│  CI to pass) │
│ ✓ Build       │         │              │
└───────────────┘         └──────┬───────┘
                                 │
                    ┌────────────┴───────────┐
                    │                        │
                    ▼                        ▼
            ┌───────────────┐      ┌─────────────────┐
            │ Preview       │      │ Production      │
            │ Deploy (PRs)  │      │ Deploy (main)   │
            └───────────────┘      └─────────────────┘
```

## Pré-requisitos

### 1. Conta Vercel

1. Acesse [vercel.com](https://vercel.com) e faça login
2. Certifique-se de ter um projeto criado

### 2. Vercel CLI

```bash
pnpm add -g vercel@latest
```

## Configuração Inicial

### Passo 1: Link do Projeto Vercel

```bash
# No diretório do projeto
vercel link
```

Siga as instruções:
- Confirme o escopo (seu usuário/organização)
- Selecione ou crie um projeto
- Confirme o diretório

Isso criará o arquivo `.vercel/project.json` com:

```json
{
  "orgId": "your-org-id",
  "projectId": "your-project-id"
}
```

⚠️ **Importante**: Adicione `.vercel/` ao `.gitignore` (já configurado)

### Passo 2: Obter Token de Acesso

1. Acesse [Vercel Account Settings → Tokens](https://vercel.com/account/tokens)
2. Clique em "Create Token"
3. Nome sugerido: "GitHub Actions CI/CD"
4. Escopo: Full Account
5. Copie o token gerado (só será mostrado uma vez!)

### Passo 3: Configurar Secrets no GitHub

1. Acesse seu repositório no GitHub
2. Vá em **Settings** → **Secrets and variables** → **Actions**
3. Clique em "New repository secret"
4. Adicione os seguintes secrets:

#### VERCEL_TOKEN
```
Valor: <token copiado do passo 2>
```

#### VERCEL_ORG_ID
```
Valor: <orgId do .vercel/project.json>
```

#### VERCEL_PROJECT_ID
```
Valor: <projectId do .vercel/project.json>
```

### Passo 4: Configurar Branch Protection

1. Vá em **Settings** → **Branches**
2. Clique em "Add rule"
3. Configurações para a branch `main`:

```
Branch name pattern: main

✓ Require a pull request before merging
  ✓ Require approvals: 1
  ✓ Dismiss stale pull request approvals when new commits are pushed
  
✓ Require status checks to pass before merging
  ✓ Require branches to be up to date before merging
  Status checks required:
    - Quality Checks
    - Build Validation
    
✓ Require conversation resolution before merging

✓ Require linear history

✓ Do not allow bypassing the above settings
```

## Fluxo de Trabalho

### Desenvolvimento de Feature

```bash
# 1. Criar branch a partir de main
git checkout main
git pull origin main
git checkout -b feature/nova-funcionalidade

# 2. Fazer alterações
# ... código ...

# 3. Commit (Husky vai rodar lint-staged automaticamente)
git add .
git commit -m "feat: adicionar nova funcionalidade"

# 4. Push para GitHub
git push origin feature/nova-funcionalidade
```

### O que acontece automaticamente:

1. **CI Pipeline inicia**:
   - Roda em paralelo: Node 18.x e 20.x
   - Quality Checks: ESLint, Stylelint, Prettier
   - Build Validation: `pnpm build`

2. **Se você abrir um PR**:
   - CI continua rodando
   - CD aguarda CI passar
   - Preview deploy é criado
   - URL de preview é comentada no PR automaticamente

3. **Após aprovação e merge para main**:
   - CI roda novamente
   - CD faz deploy em produção
   - Site atualizado automaticamente

## Workflows Detalhados

### CI Workflow (`.github/workflows/ci.yml`)

#### Triggers
```yaml
on:
  push:
    branches: ['**']  # Todas as branches
  pull_request:
    branches: [main, develop]
```

#### Jobs

**1. Quality Checks**
- Setup PNPM e Node.js (matriz: 18.x, 20.x)
- Instalar dependências com cache
- Rodar ESLint
- Rodar Stylelint
- Verificar formatação Prettier

**2. Build Validation**
- Depende de Quality Checks
- Setup PNPM e Node.js (matriz: 18.x, 20.x)
- Build de produção
- Verificar artefatos gerados
- Upload de build artifacts (Node 20.x)

#### Tempo estimado
- ~2-3 minutos em branches com cache
- ~4-5 minutos no primeiro run

### CD Workflow (`.github/workflows/cd.yml`)

#### Triggers
```yaml
on:
  push:
    branches: [main]
  pull_request:
    branches: [main]
```

#### Jobs

**1. Wait for CI**
- Aguarda CI passar completamente
- Usa `lewagon/wait-on-check-action`

**2. Deploy Preview (apenas PRs)**
- Setup ambiente
- Pull configurações do Vercel (preview)
- Build com Vercel CLI
- Deploy preview
- Comenta URL no PR

**3. Deploy Production (apenas main)**
- Setup ambiente
- Pull configurações do Vercel (production)
- Build com Vercel CLI
- Deploy produção com flag `--prod`
- Cria summary do deployment

#### Tempo estimado
- Preview: ~3-4 minutos
- Production: ~3-4 minutos

## Dependabot

### Configuração (`.github/dependabot.yml`)

O Dependabot verifica atualizações:

- **npm dependencies**: Toda segunda-feira às 9h
- **GitHub Actions**: Toda segunda-feira às 9h

### Estratégia de Updates

**Agrupamento inteligente:**
- Minor e patch updates são agrupados em um único PR
- Major updates geram PRs separados

**Ignorados (requerem revisão manual):**
- Next.js major versions
- React major versions
- React-DOM major versions

### Como lidar com PRs do Dependabot

```bash
# 1. Revisar as mudanças no PR
# 2. Verificar changelog das dependências
# 3. Testar localmente se necessário:

git fetch origin
git checkout dependabot/npm_and_yarn/dependencies-xyz

pnpm install
pnpm dev
pnpm build

# 4. Se tudo estiver ok, aprovar e mergear
```

## Troubleshooting

### CI Falha - ESLint Errors

```bash
# Local
pnpm run lint

# Fix automático
pnpm run lint -- --fix
```

### CI Falha - Build Errors

```bash
# Testar build localmente
pnpm run build

# Limpar cache e reinstalar
rm -rf .next node_modules
pnpm install
pnpm run build
```

### CD Falha - Secrets Inválidos

1. Verificar se todos os 3 secrets estão configurados
2. Recriar token do Vercel se expirou
3. Re-linkar projeto: `vercel link`
4. Atualizar secrets no GitHub

### Deploy Preview não aparece

1. Verificar se o workflow CD está habilitado
2. Verificar logs do GitHub Actions
3. Confirmar que CI passou antes
4. Verificar permissões do token Vercel

### Branch Protection bloqueia merge

1. Garantir que todos os status checks passaram:
   - ✓ Quality Checks
   - ✓ Build Validation
2. Resolver todas as conversações pendentes
3. Ter pelo menos 1 aprovação (se configurado)

## Monitoramento

### GitHub Actions

Acessar: `https://github.com/seu-usuario/seu-repo/actions`

- Ver histórico de workflows
- Logs detalhados de cada step
- Re-rodar workflows falhados
- Notificações por email em falhas

### Vercel Dashboard

Acessar: [vercel.com/dashboard](https://vercel.com/dashboard)

- Ver todos os deployments
- Logs de runtime
- Analytics
- Domains e SSL

## Otimizações

### Cache de Dependências

O cache do PNPM está configurado para economizar tempo:

```yaml
- uses: pnpm/action-setup@v2
  with:
    version: 8

- uses: actions/setup-node@v4
  with:
    node-version: ${{ matrix.node-version }}
    cache: 'pnpm'  # ← Cache automático
```

### Build Artifacts

Build artifacts são salvos entre jobs:

```yaml
- uses: actions/upload-artifact@v4
  with:
    name: next-build
    path: .next
    retention-days: 1
```

### Concurrency

Workflows cancelam runs anteriores na mesma branch:

```yaml
concurrency:
  group: ${{ github.workflow }}-${{ github.ref }}
  cancel-in-progress: true
```

## Boas Práticas

### 1. Commits Semânticos

Sempre use [Conventional Commits](https://www.conventionalcommits.org/):

```bash
feat: adiciona nova seção de projetos
fix: corrige bug no menu mobile
docs: atualiza README com instruções
style: ajusta espaçamento do header
refactor: simplifica lógica de animação
perf: otimiza carregamento de imagens
test: adiciona testes para formulário
chore: atualiza dependências
```

### 2. Pull Requests

- Use o template fornecido (`.github/pull_request_template.md`)
- Preencha todas as seções relevantes
- Adicione screenshots para mudanças visuais
- Linke issues relacionadas
- Marque todos os checkboxes do checklist

### 3. Code Review

- Revisar código antes de aprovar
- Testar preview deploy
- Verificar performance
- Checar acessibilidade
- Confirmar responsividade

### 4. Deployment

- Sempre fazer deploy via PR → merge para main
- Nunca forçar push direto em main
- Verificar preview antes de mergear
- Monitorar produção após deploy

## Variáveis de Ambiente

⚠️ **Importante**: Este projeto usa dois arquivos de ambiente:

- **`.env.example`** (✅ commitado) - Template com placeholders
- **`.env.local`** (❌ NUNCA commitar) - Arquivo real com seus valores

### Desenvolvimento

**1. Criar `.env.local`** (arquivo real, não commitado):

```bash
# Copiar template
cp .env.example .env.local

# Editar com valores reais
# NUNCA commite este arquivo!
```

**2. Exemplo de `.env.local`**:

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=seu-cloud-name-real
```

### Vercel

Configurar em **Project Settings** → **Environment Variables**:

**Production:**
```
NEXT_PUBLIC_SITE_URL=https://seu-dominio.com
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your_cloud_name
```

**Preview:**
```
NEXT_PUBLIC_SITE_URL=auto  # Vercel detecta automaticamente
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your_cloud_name
```

📖 **Guia Completo**: Veja [ENVIRONMENT-VARIABLES.md](./ENVIRONMENT-VARIABLES.md) para detalhes completos

## Próximos Passos

Após configurar CI/CD básico, considere:

1. **Testes Automatizados**
   - Jest + React Testing Library
   - Playwright para E2E
   - Adicionar job de testes no CI

2. **Lighthouse CI**
   - Auditoria de performance automatizada
   - Falhar CI se performance cair

3. **Security Scanning**
   - Snyk ou GitHub Advanced Security
   - Scan de vulnerabilidades

4. **Release Automation**
   - semantic-release
   - Changelogs automáticos
   - Git tags e GitHub Releases

5. **Preview Comments**
   - Lighthouse scores no PR
   - Bundle size comparison
   - Visual regression testing

## Suporte

- 📖 [Next.js Docs](https://nextjs.org/docs)
- 🚀 [Vercel Docs](https://vercel.com/docs)
- ⚡ [GitHub Actions Docs](https://docs.github.com/actions)
- 📦 [PNPM Docs](https://pnpm.io)

Para problemas específicos, abra uma issue no repositório.
