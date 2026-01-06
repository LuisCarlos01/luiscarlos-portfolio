# Production Deployment Checklist

Use este checklist para garantir que tudo está configurado corretamente antes de ir para produção.

## ✅ Pré-Deploy

### Configuração do Projeto

- [ ] `.env.example` criado e documentado (template commitado)
- [ ] `.env.local` criado localmente com valores reais (NUNCA commitar!)
- [ ] Todas as variáveis de ambiente necessárias identificadas
- [ ] `.gitignore` inclui `.env*.local` para proteger secrets
- [ ] `.vercelignore` configurado para otimizar deploy
- [ ] Documentação de variáveis atualizada (ver `docs/ENVIRONMENT-VARIABLES.md`)

### Código e Qualidade

- [ ] Código passa em `pnpm run lint` sem erros
- [ ] Formatação verificada com Prettier
- [ ] Stylelint passa sem erros
- [ ] Build de produção funciona: `pnpm run build`
- [ ] Aplicação roda corretamente: `pnpm start`
- [ ] Testado em múltiplos navegadores (Chrome, Firefox, Safari, Edge)
- [ ] Testado em dispositivos mobile
- [ ] Acessibilidade básica verificada

### Git e Versionamento

- [ ] Repositório no GitHub criado
- [ ] Branch `main` configurada
- [ ] `.github/` estrutura completa commitada
- [ ] Histórico de commits limpo
- [ ] Conventional Commits sendo seguidos
- [ ] Sem secrets ou tokens no código

## ⚙️ Configuração GitHub

### Secrets

Ir em: `Settings → Secrets and variables → Actions`

- [ ] `VERCEL_TOKEN` configurado
- [ ] `VERCEL_ORG_ID` configurado
- [ ] `VERCEL_PROJECT_ID` configurado
- [ ] Secrets testados (rodar workflow manualmente)

### Branch Protection

Ir em: `Settings → Branches → Add rule`

- [ ] Branch `main` protegida
- [ ] Pull requests obrigatórios
- [ ] Mínimo 1 aprovação configurada
- [ ] Status checks obrigatórios:
  - [ ] Quality Checks
  - [ ] Build Validation
- [ ] Conversações devem ser resolvidas
- [ ] Histórico linear ativado
- [ ] Bypass desabilitado (mesmo para admins)

### Workflows

- [ ] `.github/workflows/ci.yml` presente
- [ ] `.github/workflows/cd.yml` presente
- [ ] Workflows habilitados no repositório
- [ ] Permissões de workflow configuradas

### Templates

- [ ] Pull Request template funcional
- [ ] Issue templates (bug, feature, chore) criados
- [ ] Dependabot configurado e ativo

## 🚀 Configuração Vercel

### Projeto

- [ ] Projeto criado ou importado no Vercel
- [ ] Projeto linkado localmente (`vercel link`)
- [ ] `.vercel/project.json` gerado (não commitado)
- [ ] Nome do projeto apropriado

### Build Settings

Verificar em: `Project Settings → General`

- [ ] **Framework Preset**: Next.js
- [ ] **Build Command**: `pnpm build` (ou automático)
- [ ] **Output Directory**: `.next` (ou automático)
- [ ] **Install Command**: `pnpm install` (ou automático)
- [ ] **Node Version**: 20.x

### Environment Variables

Ir em: `Project Settings → Environment Variables`

#### Production

- [ ] `NEXT_PUBLIC_SITE_URL` = URL de produção
- [ ] `NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME` configurado
- [ ] Outras variáveis necessárias adicionadas

#### Preview

- [ ] `NEXT_PUBLIC_SITE_URL` = `auto` (ou vazio)
- [ ] Mesmas variáveis de produção (se aplicável)

### Domínio

- [ ] Domínio customizado configurado (se aplicável)
- [ ] DNS configurado corretamente
- [ ] SSL/HTTPS ativo e funcionando
- [ ] Redirects configurados (www → non-www ou vice-versa)

## 🧪 Primeiro Deploy de Teste

### Branch de Teste

```bash
# Criar branch de teste
git checkout -b test/ci-cd-validation

# Fazer pequena mudança
echo "# CI/CD Test" >> TEST.md
git add TEST.md
git commit -m "test: validate CI/CD pipeline"

# Push
git push origin test/ci-cd-validation
```

### Validações

- [ ] CI workflow iniciou automaticamente
- [ ] Quality Checks passou
- [ ] Build Validation passou
- [ ] Tempo de execução aceitável (< 5 min)

### Pull Request de Teste

```bash
# Abrir PR para main
```

- [ ] PR template carregou corretamente
- [ ] CI checks aparecem no PR
- [ ] CD workflow aguarda CI
- [ ] Preview deploy foi criado
- [ ] URL de preview comentada no PR
- [ ] Preview deploy funciona corretamente
- [ ] Status checks são obrigatórios para merge

### Merge e Deploy Produção

- [ ] Aprovação do PR funcionou
- [ ] Merge para main executado
- [ ] Production deploy iniciou
- [ ] Deploy completou com sucesso
- [ ] Site de produção atualizado
- [ ] Tempo de deploy aceitável (< 5 min)

### Limpeza

```bash
# Deletar branch de teste
git branch -d test/ci-cd-validation
git push origin --delete test/ci-cd-validation

# Remover arquivo de teste
git checkout main
git pull origin main
git rm TEST.md
git commit -m "chore: remove test file"
git push origin main
```

## 📊 Monitoramento Pós-Deploy

### GitHub Actions

- [ ] Workflows aparecem na aba Actions
- [ ] Badges de status no README funcionam
- [ ] Notificações de falha configuradas
- [ ] Logs acessíveis e compreensíveis

### Vercel Dashboard

- [ ] Deployments listados corretamente
- [ ] Production vs Preview diferenciados
- [ ] Logs de runtime disponíveis
- [ ] Analytics configurado (se desejado)

### Site em Produção

- [ ] URL principal acessível
- [ ] Todas as páginas carregam corretamente
- [ ] Imagens e assets carregam
- [ ] Animações funcionam
- [ ] Performance aceitável (Lighthouse > 90)
- [ ] SEO básico verificado
- [ ] Meta tags corretas
- [ ] Open Graph funcionando

## 🔐 Segurança

### Code Security

- [ ] Nenhum secret hardcoded no código
- [ ] `.env.local` no `.gitignore`
- [ ] Token Vercel seguro e não exposto
- [ ] Dependências sem vulnerabilidades conhecidas
- [ ] Dependabot ativo para updates de segurança

### Vercel Security

- [ ] HTTPS/SSL ativo
- [ ] Headers de segurança configurados (se necessário)
- [ ] CORS configurado apropriadamente (se aplicável)
- [ ] Rate limiting considerado (se necessário)

## 📝 Documentação

- [ ] README atualizado com:
  - [ ] Badges de CI/CD
  - [ ] Link para produção
  - [ ] Instruções de setup
  - [ ] Workflow de contribuição
- [ ] `docs/CI-CD-SETUP.md` presente
- [ ] `docs/PRODUCTION-CHECKLIST.md` presente (este arquivo)
- [ ] Conventional Commits documentado
- [ ] `.env.example` atualizado

## 👥 Time e Colaboradores

- [ ] Colaboradores adicionados ao repositório
- [ ] Permissões corretas configuradas
- [ ] CODEOWNERS configurado (se aplicável)
- [ ] Canal de comunicação definido (Issues, Discord, etc.)
- [ ] Processo de review estabelecido

## 📈 Performance

- [ ] Lighthouse Score (Desktop):
  - [ ] Performance > 90
  - [ ] Accessibility > 90
  - [ ] Best Practices > 90
  - [ ] SEO > 90
- [ ] Lighthouse Score (Mobile):
  - [ ] Performance > 85
  - [ ] Accessibility > 90
  - [ ] Best Practices > 90
  - [ ] SEO > 90
- [ ] First Contentful Paint < 1.5s
- [ ] Largest Contentful Paint < 2.5s
- [ ] Time to Interactive < 3.5s
- [ ] Total Blocking Time < 300ms
- [ ] Cumulative Layout Shift < 0.1

## 🔄 Processos Contínuos

### Desenvolvimento

- [ ] Fluxo de feature branches estabelecido
- [ ] Convention de nomenclatura de branches definida
- [ ] Code review obrigatório
- [ ] CI/CD validando todo código

### Manutenção

- [ ] Dependabot fazendo PRs semanais
- [ ] Updates de segurança aplicados rapidamente
- [ ] Monitoramento de erros configurado (se aplicável)
- [ ] Backup/rollback strategy definida

### Comunicação

- [ ] Issues configuradas com templates
- [ ] PRs usando template
- [ ] Labels organizadas
- [ ] Milestones definidas (se aplicável)

## ⚠️ Troubleshooting

### Se CI Falhar

1. [ ] Verificar logs no GitHub Actions
2. [ ] Rodar comandos localmente
3. [ ] Verificar cache do workflow
4. [ ] Re-rodar workflow se erro temporário

### Se CD Falhar

1. [ ] Verificar secrets do GitHub
2. [ ] Verificar token do Vercel
3. [ ] Verificar logs do Vercel
4. [ ] Tentar deploy manual: `vercel --prod`

### Se Deploy Tiver Problemas

1. [ ] Rollback no Vercel Dashboard
2. [ ] Revert commit problemático
3. [ ] Abrir issue para investigação
4. [ ] Comunicar ao time

## 🎉 Launch Final

Quando tudo estiver verde:

- [ ] Anunciar launch
- [ ] Compartilhar URL de produção
- [ ] Monitorar primeiras horas
- [ ] Coletar feedback
- [ ] Celebrar! 🎊

---

## Comandos Úteis

```bash
# Verificar status local
pnpm run lint
pnpm run build
pnpm start

# Vercel CLI
vercel --prod              # Deploy manual em produção
vercel logs                # Ver logs
vercel domains             # Gerenciar domínios
vercel env ls              # Listar variáveis de ambiente

# Git
git status
git log --oneline -10
git branch -a

# GitHub CLI (opcional)
gh pr list
gh pr status
gh workflow list
gh run list
```

## Links Rápidos

- 📊 [GitHub Actions](https://github.com/luiscarlosvn/dennis-snellenberg-portfolio/actions)
- 🚀 [Vercel Dashboard](https://vercel.com/dashboard)
- 📖 [CI/CD Setup Guide](./CI-CD-SETUP.md)
- 📝 [README](../README.md)

---

**Última atualização**: Janeiro 2026  
**Versão**: 1.0.0
