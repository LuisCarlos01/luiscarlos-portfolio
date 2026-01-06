# GitHub Secrets Setup

Este guia explica como configurar secrets no GitHub para os workflows de CI/CD funcionarem corretamente.

## 🔐 O que são GitHub Secrets?

GitHub Secrets são variáveis de ambiente criptografadas que você pode usar em seus workflows do GitHub Actions. Elas são ideais para armazenar:

- API Keys
- Tokens de acesso
- Credenciais
- Valores sensíveis

**⚠️ Importante:** Secrets são **criptografados** e **nunca** expostos nos logs.

## 📋 Secrets Necessários

### Obrigatórios para CI

| Secret                              | Descrição                 | Onde obter                        |
| ----------------------------------- | ------------------------- | --------------------------------- |
| `NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME` | Cloud name do Cloudinary  | https://cloudinary.com/console    |
| `VERCEL_TOKEN`                      | Token de acesso da Vercel | https://vercel.com/account/tokens |
| `VERCEL_ORG_ID`                     | ID da organização Vercel  | Vercel Project Settings → General |
| `VERCEL_PROJECT_ID`                 | ID do projeto Vercel      | Vercel Project Settings → General |

### Opcionais

| Secret                 | Descrição           | Uso              |
| ---------------------- | ------------------- | ---------------- |
| `NEXT_PUBLIC_SITE_URL` | URL do site         | Build e metadata |
| `NEXT_PUBLIC_GA_ID`    | Google Analytics ID | Analytics        |
| `SENTRY_DSN`           | Sentry DSN          | Error tracking   |

## 🚀 Como Configurar

### 1. Acessar GitHub Secrets

```
https://github.com/SEU_USUARIO/SEU_REPO/settings/secrets/actions
```

Ou navegue:

1. Vá para o seu repositório no GitHub
2. Clique em **Settings**
3. No menu lateral, clique em **Secrets and variables** → **Actions**
4. Clique em **New repository secret**

### 2. Adicionar Secret

Para cada secret necessário:

1. Clique em **"New repository secret"**
2. Preencha:
   - **Name**: Nome exato do secret (ex: `NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME`)
   - **Secret**: Valor do secret
3. Clique em **"Add secret"**

### 3. Exemplo: Cloudinary Cloud Name

**Name:**

```
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME
```

**Secret:**

```
seu-cloud-name-aqui
```

> 💡 **Dica:** O cloud name está disponível no dashboard do Cloudinary, normalmente no canto superior direito.

### 4. Exemplo: Vercel Token

**Name:**

```
VERCEL_TOKEN
```

**Secret:**

```
seu-token-vercel-aqui
```

**Como obter:**

1. Acesse https://vercel.com/account/tokens
2. Clique em "Create Token"
3. Dê um nome (ex: "GitHub Actions")
4. Selecione o escopo (Full Account ou specific project)
5. Copie o token (você só verá uma vez!)
6. Cole no GitHub Secret

### 5. Exemplo: IDs da Vercel

**Para obter `VERCEL_ORG_ID` e `VERCEL_PROJECT_ID`:**

**Método 1: Dashboard Vercel**

1. Acesse seu projeto na Vercel
2. Vá em Settings → General
3. Role até "Project ID" e "Organization ID"
4. Copie os valores

**Método 2: CLI da Vercel**

```bash
# Na raiz do projeto
vercel link

# Os IDs serão salvos em .vercel/project.json
cat .vercel/project.json
```

```json
{
  "orgId": "seu-org-id-aqui",
  "projectId": "seu-project-id-aqui"
}
```

Copie esses valores para os secrets do GitHub.

## ✅ Verificação

### Secrets Configurados

Após adicionar todos os secrets, você deve ver algo assim na página de Secrets:

```
✓ NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME     Updated X minutes ago
✓ NEXT_PUBLIC_SITE_URL                  Updated X minutes ago
✓ VERCEL_TOKEN                          Updated X minutes ago
✓ VERCEL_ORG_ID                         Updated X minutes ago
✓ VERCEL_PROJECT_ID                     Updated X minutes ago
```

### Testar Workflows

1. Faça um commit e push:

   ```bash
   git commit --allow-empty -m "chore: test ci with secrets"
   git push
   ```

2. Vá para a aba **Actions** no GitHub
3. Verifique se o workflow está rodando
4. O build deve passar agora! ✅

## 🔍 Como os Secrets são Usados

### No Workflow CI

```yaml
# .github/workflows/ci.yml
- name: Build project
  run: pnpm run build
  env:
    NODE_ENV: production
    # Secrets são acessados via ${{ secrets.NOME }}
    NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME: ${{ secrets.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME }}
    NEXT_PUBLIC_SITE_URL: ${{ secrets.NEXT_PUBLIC_SITE_URL }}
```

### No Workflow CD

```yaml
# .github/workflows/cd.yml
- name: Deploy to Vercel
  env:
    VERCEL_TOKEN: ${{ secrets.VERCEL_TOKEN }}
    VERCEL_ORG_ID: ${{ secrets.VERCEL_ORG_ID }}
    VERCEL_PROJECT_ID: ${{ secrets.VERCEL_PROJECT_ID }}
```

## 🔒 Segurança

### ✅ Boas Práticas

1. **Nunca exponha secrets nos logs**

   ```yaml
   # ❌ Errado
   - run: echo ${{ secrets.API_KEY }}

   # ✅ Correto
   - run: echo "API Key is set"
   ```

2. **Use secrets mínimos necessários**
   - Não adicione secrets desnecessários
   - Delete secrets não utilizados

3. **Rotacione tokens periodicamente**
   - Especialmente `VERCEL_TOKEN`
   - Atualize no GitHub quando rotacionar

4. **Separe ambientes**
   - Use secrets diferentes para staging e production
   - Considere usar GitHub Environments

### ❌ Evitar

```yaml
# ❌ Não colocar valores sensíveis direto no workflow
env:
  API_KEY: abc123  # Visível no código!

# ✅ Use secrets
env:
  API_KEY: ${{ secrets.API_KEY }}
```

## 🌍 Environments (Opcional)

Para projetos maiores, considere usar **GitHub Environments**:

### Criar Environments

1. Settings → Environments → New environment
2. Crie: `production`, `staging`, `preview`
3. Adicione secrets específicos por ambiente
4. Configure proteções (ex: require reviewers)

### Usar no Workflow

```yaml
jobs:
  deploy:
    runs-on: ubuntu-latest
    environment: production # Usa secrets do environment "production"
    steps:
      - name: Deploy
        env:
          API_KEY: ${{ secrets.API_KEY }} # Pega do environment "production"
```

**Benefícios:**

- Secrets diferentes por ambiente
- Proteções e approvals
- Logs separados

## 🛠️ Troubleshooting

### Secret não está funcionando

**1. Verificar nome exato**

```yaml
# ❌ Nome errado
${{ secrets.cloudinary_cloud_name }}

# ✅ Nome correto (case-sensitive!)
${{ secrets.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME }}
```

**2. Secret foi adicionado recentemente?**

- Faça um novo push para acionar o workflow novamente
- Secrets são aplicados apenas em novos runs

**3. Verificar nos logs**

```yaml
# Adicione um step de debug (sem expor o valor!)
- name: Check if secret exists
  run: |
    if [ -z "$SECRET_VAR" ]; then
      echo "Secret is NOT set"
      exit 1
    else
      echo "Secret is set"
    fi
  env:
    SECRET_VAR: ${{ secrets.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME }}
```

### Build ainda falha

**1. Verificar todas as variáveis necessárias**

```bash
# Ver quais variáveis o app precisa
cat .env.example
```

**2. Adicionar fallback no workflow**

```yaml
env:
  NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME: ${{ secrets.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || 'demo-cloud' }}
```

**3. Verificar logs do workflow**

- Vá para Actions → Workflow run
- Expanda os steps
- Procure por erros de variáveis de ambiente

## 📚 Referências

### Documentação Oficial

- [GitHub Actions Secrets](https://docs.github.com/en/actions/security-guides/encrypted-secrets)
- [Using secrets in workflows](https://docs.github.com/en/actions/security-guides/using-secrets-in-github-actions)
- [Vercel CLI Environment Variables](https://vercel.com/docs/cli#commands/env)

### Artigos Úteis

- [Best practices for GitHub Secrets](https://docs.github.com/en/actions/security-guides/security-hardening-for-github-actions)
- [Managing secrets at scale](https://github.blog/2020-05-06-new-from-satellite-2020-github-codespaces-github-discussions-securing-code-in-private-repositories-and-more/#securing-secrets)

## ✅ Checklist

Antes de rodar workflows:

- [ ] `NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME` configurado
- [ ] `VERCEL_TOKEN` configurado (se usando CD)
- [ ] `VERCEL_ORG_ID` configurado (se usando CD)
- [ ] `VERCEL_PROJECT_ID` configurado (se usando CD)
- [ ] Todos os nomes estão corretos (case-sensitive)
- [ ] Secrets não estão expostos nos logs

Depois de configurar:

- [ ] Push para testar workflows
- [ ] Verificar que CI passa
- [ ] Verificar que CD funciona (se configurado)
- [ ] Documentar secrets adicionais no time

## 🆘 Suporte

Se você precisar de ajuda:

1. Verifique os [logs do workflow](https://github.com/SEU_USUARIO/SEU_REPO/actions)
2. Consulte a [documentação de Environment Variables](./ENVIRONMENT-VARIABLES.md)
3. Veja o [guia de troubleshooting de CI/CD](./CI-CD-SETUP.md#-troubleshooting)
4. Abra uma issue se encontrar problemas

---

**⚠️ LEMBRE-SE:** Secrets são criptografados mas devem ser tratados com cuidado. Nunca os exponha em logs ou código!

