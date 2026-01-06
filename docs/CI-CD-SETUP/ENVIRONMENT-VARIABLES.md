# Environment Variables Guide

Este guia explica como configurar e gerenciar variáveis de ambiente no projeto.

## 📁 Arquivos de Ambiente

### `.env.example` (✅ COMMITADO NO REPO)

**Propósito**: Template documentado das variáveis necessárias

- ✅ **DEVE** ser commitado no repositório
- ✅ Contém todas as variáveis necessárias
- ✅ Valores são placeholders/exemplos
- ✅ Serve como documentação
- ❌ **NÃO** contém valores reais/secrets

**Localização**: Raiz do projeto

```bash
.env.example
```

### `.env.local` (❌ NUNCA COMMITAR)

**Propósito**: Arquivo real com valores sensíveis

- ✅ Valores reais e secrets
- ✅ Específico para cada desenvolvedor
- ✅ Usado pelo Next.js em desenvolvimento
- ❌ **NUNCA** deve ser commitado
- ❌ Já está no `.gitignore`

**Localização**: Raiz do projeto (criar manualmente)

```bash
.env.local  # Este arquivo não existe no repo!
```

## 🚀 Setup Inicial

### 1. Criar seu arquivo local

```bash
# Na raiz do projeto
cp .env.example .env.local
```

### 2. Editar com valores reais

Abra `.env.local` e substitua os placeholders:

```env
# ❌ Antes (do .env.example)
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your_cloud_name_here

# ✅ Depois (no .env.local)
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=seu-cloud-name-real
```

### 3. Verificar se está funcionando

```bash
# Rodar o projeto
pnpm dev

# Se as variáveis estiverem corretas, tudo deve funcionar
```

## 📋 Variáveis Disponíveis

### Site Configuration

```env
# URL base do site
NEXT_PUBLIC_SITE_URL=http://localhost:3000
# Produção: https://seu-dominio.com

# Nome do site (opcional)
NEXT_PUBLIC_SITE_NAME="Luis Carlos Portfolio"
```

### Cloudinary (Mídia)

```env
# Cloud name do Cloudinary
# Obter em: https://cloudinary.com/console
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your_cloud_name_here

# Opcional: Credenciais para operações server-side
# CLOUDINARY_API_KEY=your_api_key
# CLOUDINARY_API_SECRET=your_api_secret
```

### Analytics (Opcional)

```env
# Google Analytics
# Obter em: https://analytics.google.com/
# NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Google Tag Manager
# NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX
```

### Contact Form (Opcional)

```env
# Se implementar formulário de contato
# EMAIL_SERVICE_API_KEY=your_email_service_key
# EMAIL_TO=your.email@example.com
```

### Monitoring (Opcional)

```env
# Sentry para tracking de erros
# NEXT_PUBLIC_SENTRY_DSN=https://xxx@xxx.ingest.sentry.io/xxx
```

### Development

```env
# Debug mode
# DEBUG=false

# Desabilitar telemetria do Next.js
# NEXT_TELEMETRY_DISABLED=1
```

## 🔐 Segurança

### ✅ Boas Práticas

1. **NUNCA commitar `.env.local`**

   ```bash
   # Verificar se está no .gitignore
   cat .gitignore | grep ".env*.local"
   ```

2. **Usar prefixo `NEXT_PUBLIC_` para variáveis do cliente**

   ```env
   # ✅ Exposta no browser (OK para valores públicos)
   NEXT_PUBLIC_SITE_URL=https://example.com

   # ❌ NÃO exposta (use para secrets)
   API_SECRET_KEY=secret123
   ```

3. **Documentar no `.env.example`**
   - Adicione comentários explicativos
   - Use valores de exemplo claros
   - Indique onde obter os valores

4. **Rodar valores diferentes por ambiente**
   - Development: `.env.local`
   - Production: Vercel Environment Variables
   - Preview: Vercel Environment Variables

### ❌ Evitar

```env
# ❌ Não colocar secrets com NEXT_PUBLIC_
NEXT_PUBLIC_API_SECRET=abc123  # Será exposto no browser!

# ❌ Não colocar tokens reais no .env.example
VERCEL_TOKEN=v1_abc123...  # Use placeholder!

# ❌ Não commitar arquivos .env*
# Exceto: .env.example
```

## 🌍 Ambientes

### Development (Local)

**Arquivo**: `.env.local`

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=dev-cloud-name
DEBUG=true
```

```bash
# Rodar em dev
pnpm dev
```

### Preview (Vercel)

**Configurar em**: Vercel Dashboard → Project Settings → Environment Variables

Selecionar: **Preview**

```
NEXT_PUBLIC_SITE_URL=auto  # Vercel detecta automaticamente
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=prod-cloud-name
```

- Deploy automático em PRs
- Usa variáveis do ambiente Preview

### Production (Vercel)

**Configurar em**: Vercel Dashboard → Project Settings → Environment Variables

Selecionar: **Production**

```
NEXT_PUBLIC_SITE_URL=https://seu-dominio.com
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=prod-cloud-name
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

- Deploy em merges para `main`
- Usa variáveis do ambiente Production

## 🛠️ Vercel Setup

### 1. Acessar Dashboard

```
https://vercel.com/seu-usuario/seu-projeto/settings/environment-variables
```

### 2. Adicionar Variável

1. Clique em "Add New"
2. Preencha:
   - **Key**: Nome da variável
   - **Value**: Valor (será criptografado)
   - **Environment**: Production / Preview / Development
3. Clique em "Save"

### 3. Redeploy

Após adicionar variáveis:

- Preview: Abra novo PR ou force push
- Production: Novo deploy ou redeploy manual

## 🔍 Troubleshooting

### Variável não está definida

```bash
# Verificar se .env.local existe
ls -la .env.local

# Verificar se Next.js está carregando
pnpm dev
# Deve mostrar: "Loaded env from .env.local"

# Testar no código
console.log(process.env.NEXT_PUBLIC_SITE_URL)
```

### Variável está undefined no browser

```javascript
// ❌ Errado: sem NEXT_PUBLIC_
const url = process.env.SITE_URL; // undefined no browser

// ✅ Correto: com NEXT_PUBLIC_
const url = process.env.NEXT_PUBLIC_SITE_URL; // funciona!
```

### Mudanças não aparecem

```bash
# 1. Parar o servidor (Ctrl+C)
# 2. Limpar cache
rm -rf .next

# 3. Reiniciar
pnpm dev
```

### Vercel não vê as variáveis

1. Verificar se estão em Environment Variables
2. Verificar ambiente correto (Preview/Production)
3. Redeploy após adicionar variáveis
4. Verificar logs do deployment

## 📚 Referências

### Next.js Environment Variables

- [Documentação Oficial](https://nextjs.org/docs/basic-features/environment-variables)
- Ordem de prioridade:
  1. `.env.local` (local override)
  2. `.env.production` ou `.env.development`
  3. `.env`

### Vercel Environment Variables

- [Documentação Vercel](https://vercel.com/docs/concepts/projects/environment-variables)
- Variáveis podem ser:
  - Specific to environments
  - Encrypted automaticamente
  - Synced entre deployments

## ✅ Checklist

Antes de commitar:

- [ ] `.env.local` está no `.gitignore`
- [ ] Não há secrets no código
- [ ] `.env.example` está atualizado
- [ ] Valores sensíveis estão apenas no `.env.local`
- [ ] Variáveis públicas usam `NEXT_PUBLIC_`

Antes de deploy:

- [ ] Variáveis configuradas no Vercel
- [ ] Ambientes corretos (Preview vs Production)
- [ ] Valores de produção diferentes de dev
- [ ] Build passa localmente

## 🆘 Suporte

Se você precisar de ajuda:

1. Verifique o [`.env.example`](../.env.example) para ver todas as variáveis disponíveis
2. Consulte a [documentação do Next.js](https://nextjs.org/docs/basic-features/environment-variables)
3. Veja os logs do Vercel em caso de erro em produção
4. Abra uma issue se encontrar problemas

---

**⚠️ LEMBRE-SE**: NUNCA commite `.env.local` ou qualquer arquivo com secrets reais!
