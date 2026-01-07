---
name: GitHub CI/CD Setup
overview: Criar estrutura completa de CI/CD com GitHub Actions para projeto Next.js 14, incluindo workflows separados de validação e deploy no Vercel, templates de PR/Issues, Dependabot e documentação de boas práticas.
todos:
  - id: workflows
    content: Criar workflows ci.yml e cd.yml com validação e deploy
    status: completed
  - id: issue-templates
    content: Criar templates de issues (bug, feature, chore)
    status: completed
  - id: pr-template
    content: Criar template de pull request com checklist
    status: completed
  - id: dependabot
    content: Configurar dependabot.yml para updates automáticos
    status: completed
  - id: env-example
    content: Criar .env.example com variáveis necessárias
    status: completed
  - id: docs-update
    content: Atualizar README com badges e instruções de CI/CD
    status: completed
  - id: config-files
    content: Criar .nvmrc, .vercelignore e CODEOWNERS
    status: completed
---

# Estrutura Completa de CI/CD para Portfolio Next.js 14

## Visão Geral da Estratégia

Este projeto Next.js 14 receberá uma estrutura enterprise-grade de CI/CD com:

- **Workflows separados**: `ci.yml` para validação de qualidade e `cd.yml` para deploy no Vercel
- **Branch protection**: PRs obrigatórios para main com aprovação de CI
- **Deploy controlado**: GitHub Actions gerencia todo ciclo de deploy via Vercel CLI
- **Qualidade automatizada**: Lint, build, e validações antes de qualquer merge
- **Manutenção proativa**: Dependabot para updates de segurança

## Decisões Arquiteturais

### 1. Workflows Separados (ci.yml + cd.yml)

**Rationale**: Separar responsabilidades permite:

- CI roda em TODOS os PRs/pushes para validar qualidade
- CD roda APENAS em branches específicas (main + PRs) para deploy
- Facilita manutenção e troubleshooting
- Permite execução paralela quando aplicável

### 2. Vercel CLI via GitHub Actions

**Rationale**: Controle total do processo de deploy:

- Preview deploy automático em PRs
- Production deploy em merges para main
- Controle de quando e como o deploy acontece
- Logs centralizados no GitHub Actions

### 3. PNPM como Package Manager

**Rationale**: Mantém consistência com o projeto:

- Mais rápido que npm/yarn
- Cache eficiente no CI
- Lock file (`pnpm-lock.yaml`) já existe

### 4. Sem TypeScript Checking

**Rationale**: Projeto usa JavaScript + JSDoc:

- Não há script `typecheck` disponível
- Validação de tipos via ESLint é suficiente

## Estrutura de Arquivos a Criar

```
.github/
├── workflows/
│   ├── ci.yml                 # Pipeline de validação
│   └── cd.yml                 # Pipeline de deploy
├── ISSUE_TEMPLATE/
│   ├── bug_report.yml         # Template para bugs
│   ├── feature_request.yml    # Template para features
│   └── chore.yml              # Template para tarefas
├── pull_request_template.md   # Template padrão de PR
├── dependabot.yml             # Updates automáticos
└── CODEOWNERS                 # Code review assignments
```

## Workflow de CI (`.github/workflows/ci.yml`)

### Triggers

- Push em qualquer branch
- Pull requests para `main` e `develop`

### Jobs

#### 1. Quality Checks

```yaml
- Setup PNPM
- Restaurar cache de node_modules
- Instalar dependências (pnpm install --frozen-lockfile)
- Rodar ESLint (pnpm run lint)
- Rodar Stylelint (via pnpm)
- Verificar formatação Prettier
```

#### 2. Build Validation

```yaml
- Setup PNPM
- Restaurar cache
- Build produção (pnpm run build)
- Verificar se .next foi gerado corretamente
```

### Features Importantes

- **Fail-fast**: Qualquer erro para o pipeline
- **Cache agressivo**: `pnpm store` + `node_modules`
- **Matriz de Node**: Testar em Node 18.x e 20.x
- **Status checks**: Requeridos para merge

## Workflow de CD (`.github/workflows/cd.yml`)

### Triggers

- Push em `main` → Production Deploy
- Pull requests para `main` → Preview Deploy

### Jobs

#### 1. Deploy Preview (em PRs)

```yaml
- Rodar após CI passar
- Usar Vercel CLI com flag --preview
- Comentar URL de preview no PR
- Adicionar status check
```

#### 2. Deploy Production (em main)

```yaml
- Rodar após CI passar
- Usar Vercel CLI com flag --prod
- Comentar URL de produção
- Criar release tag (opcional)
```

### Secrets Necessários

- `VERCEL_TOKEN`: Token de autenticação
- `VERCEL_ORG_ID`: ID da organização/usuário
- `VERCEL_PROJECT_ID`: ID do projeto

### Features Importantes

- **Dependência de CI**: CD só roda se CI passar
- **Preview automático**: Todo PR gera preview
- **URLs nos comentários**: Bot comenta URLs no PR
- **Rollback fácil**: Git revert + novo push

## Templates de Issues

### Bug Report (`bug_report.yml`)

Campos:

- Descrição do bug
- Passos para reproduzir
- Comportamento esperado vs atual
- Screenshots/GIFs (opcional)
- Ambiente (browser, OS)
- Logs relevantes

### Feature Request (`feature_request.yml`)

Campos:

- Descrição da feature
- Problema que resolve
- Solução proposta
- Alternativas consideradas
- Impacto no usuário

### Chore (`chore.yml`)

Campos:

- Tipo (deps, docs, refactor, config)
- Descrição da tarefa
- Motivação
- Checklist de subtarefas

## Template de Pull Request

### Seções Obrigatórias

```markdown
## Tipo de Mudança

- [ ] Bug fix
- [ ] Nova feature
- [ ] Breaking change
- [ ] Documentação

## Descrição

[Resumo claro das mudanças]

## Motivação e Contexto

[Por que essa mudança é necessária?]

## Como Testar

1. Clone a branch
2. Execute pnpm install
3. Execute pnpm dev
4. ...

## Checklist

- [ ] Código segue style guide do projeto
- [ ] Comentei código complexo
- [ ] Atualizei documentação
- [ ] Testei localmente
- [ ] Build passa (pnpm run build)
```

## Dependabot Configuration

### Package Ecosystems

```yaml
- npm (package.json)
- github-actions (workflows)
```

### Estratégia de Updates

- **Dependências**: Weekly, segunda-feira 9h
- **Actions**: Weekly, segunda-feira 9h
- **Limite**: 5 PRs abertos simultaneamente
- **Auto-merge**: Patches de segurança (via GitHub settings)

### Labels Automáticas

- `dependencies` para package updates
- `github-actions` para workflow updates
- `security` para patches de segurança

## Arquivo CODEOWNERS

Opcional mas recomendado para times:

```
* @seu-usuario
/.github/ @seu-usuario
/docs/ @seu-usuario
```

## Branch Protection Rules

Configurações recomendadas no GitHub (via Settings > Branches):

### Para branch `main`

```
✓ Require pull request before merging
  ✓ Require approvals: 1
  ✓ Dismiss stale approvals

✓ Require status checks to pass
  ✓ Require branches to be up to date
  ✓ Status checks:
    - quality-checks (CI)
    - build-validation (CI)

✓ Require conversation resolution before merging

✓ Require linear history

✓ Do not allow bypassing (even admins)
```

## Variáveis de Ambiente

### Criar `.env.example`

```env
# Next.js
NEXT_PUBLIC_SITE_URL=

# Cloudinary (se usado)
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=

# Analytics (se usado)
NEXT_PUBLIC_GA_ID=
```

### No Vercel (Project Settings)

```
Production:
- NEXT_PUBLIC_SITE_URL=https://seu-site.com

Preview:
- NEXT_PUBLIC_SITE_URL=auto
```

### No GitHub (Repository Secrets)

```
VERCEL_TOKEN=xxx          # Get from Vercel Settings
VERCEL_ORG_ID=xxx         # Get from .vercel/project.json
VERCEL_PROJECT_ID=xxx     # Get from .vercel/project.json
```

## Fluxo de Trabalho Recomendado

### Para Novas Features

```bash
# 1. Criar branch
git checkout -b feature/nova-funcionalidade

# 2. Desenvolver
# ... fazer mudanças ...

# 3. Commit (Husky vai rodar lint-staged)
git add .
git commit -m "feat: adicionar nova funcionalidade"

# 4. Push
git push origin feature/nova-funcionalidade

# 5. Abrir PR no GitHub
# CI vai rodar automaticamente
# CD vai criar preview deploy

# 6. Review + Aprovação
# Alguém revisa e aprova

# 7. Merge para main
# CD vai fazer deploy em produção
```

### Conventional Commits

Usar prefixos semânticos:

- `feat:` Nova feature
- `fix:` Bug fix
- `docs:` Documentação
- `style:` Formatação
- `refactor:` Refatoração
- `perf:` Performance
- `test:` Testes
- `chore:` Manutenção

## Arquivos de Configuração Adicionais

### `.nvmrc`

```
20.11.0
```

Define versão do Node para o time.

### `.vercelignore`

```
.cursor/
docs/
*.md
!README.md
```

Otimiza tamanho do deploy.

## Monitoramento e Logs

### GitHub Actions

- Todos os logs em Actions tab
- Notificações por email em falhas
- Status badges no README

### Vercel

- Deploy logs no Vercel Dashboard
- Runtime logs em Vercel Analytics
- Automatic HTTPS e CDN

## Checklist Final para Produção

### Antes do Primeiro Deploy

- [ ] `.github/` estrutura criada
- [ ] Workflows testados em branch teste
- [ ] Secrets configurados no GitHub
- [ ] Projeto linkado no Vercel
- [ ] Branch protection configurada
- [ ] `.env.example` criado
- [ ] README atualizado com badges

### Durante Primeiro Deploy

- [ ] PR de teste criado
- [ ] CI passou em verde
- [ ] Preview deploy funcionou
- [ ] Merge para main
- [ ] Production deploy executado
- [ ] Site acessível em produção

### Pós-Deploy

- [ ] DNS configurado (se domínio customizado)
- [ ] Analytics configurado (se aplicável)
- [ ] Team members adicionados
- [ ] Monitoring configurado
- [ ] Documentação atualizada

## Próximos Passos (Opcional)

Após estrutura básica:

1. **Testes**: Adicionar Jest + React Testing Library
2. **E2E**: Adicionar Playwright para testes E2E
3. **Performance**: Lighthouse CI no pipeline
4. **Security**: Snyk ou Dependabot security scanning
5. **Release automation**: semantic-release para changelogs

## Referências e Links Úteis

- [Next.js Deployment](https://nextjs.org/docs/deployment)
- [Vercel CLI Docs](https://vercel.com/docs/cli)
- [GitHub Actions Docs](https://docs.github.com/actions)
- [PNPM in CI](https://pnpm.io/continuous-integration)
- [Conventional Commits](https://www.conventionalcommits.org/)
