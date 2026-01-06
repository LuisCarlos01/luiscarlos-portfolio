# Personalização do Portfolio - Luis Carlos

> Documento de acompanhamento das alterações realizadas e pendentes na adaptação do portfolio.

**Data de início:** Janeiro 2026  
**Baseado em:** Fork do [Dennis Snellenberg Portfolio](https://github.com/AliBagheri2079/dennis-snellenberg-portfolio)

---

## Status Geral

| Fase                | Status       |
| ------------------- | ------------ |
| Bug fixes           | ✅ Concluído |
| Metadados           | ✅ Concluído |
| Componentes visuais | ✅ Concluído |
| Cloudinary          | ⏳ Pendente  |
| Redes sociais       | ⏳ Pendente  |
| Conteúdo real       | ⏳ Pendente  |

---

## ✅ Alterações Concluídas

### 1. Bug Fix - Memory Leak no Lenis

**Arquivo:** `app/_hooks/use-lenis.js`

- [x] Corrigido `cancelAnimationFrame` que recebia função ao invés de ID
- [x] Adicionado `useRef` para armazenar o ID do `requestAnimationFrame`
- [x] Adicionado `lenis.destroy()` no cleanup do useEffect

### 2. Metadados Atualizados

**Arquivos alterados:**

- [x] `app/_config/metadata.config.js` - Configuração raiz de SEO
- [x] `app/page.jsx` - Metadata da homepage
- [x] `app/(in-progress)/about/page.jsx` - Metadata da página About
- [x] `app/(in-progress)/work/page.jsx` - Metadata da página Work
- [x] `app/(in-progress)/contact/page.jsx` - Metadata da página Contact
- [x] `app/not-found.jsx` - Metadata da página 404
- [x] `package.json` - Nome do projeto, autor e keywords

**Informações atualizadas:**

| Campo     | Valor                                                              |
| --------- | ------------------------------------------------------------------ |
| Nome      | Luis Carlos Vitoriano Neto                                         |
| Título    | Mobile & Frontend Developer                                        |
| Descrição | Crafting seamless mobile experiences and modern web interfaces...  |
| Keywords  | Mobile Developer, Frontend Developer, React, React Native, Next.js |

### 3. Componentes Visuais Atualizados

- [x] `app/_layout/navbar/brand.jsx` - "Code by Luis Carlos"
- [x] `app/_layout/header/index.jsx` - Nome no slider + título "Mobile & Frontend Developer"
- [x] `app/_layout/contact/components/user-details/index.jsx` - Placeholders para email/telefone

### 4. Dados com Placeholders

- [x] `app/_data/social-medias.js` - Placeholders para redes sociais
- [x] `app/_data/thumbnail-options.js` - TODOs para projetos
- [x] `app/_data/project-options.js` - TODOs para mídias

---

## ⏳ Alterações Pendentes (Checklist)

### Cloudinary (quando criar conta)

- [ ] Criar conta gratuita em [cloudinary.com](https://cloudinary.com)
- [ ] Criar pasta para suas imagens (ex: `luiscarlos-portfolio`)
- [ ] Fazer upload da sua foto pessoal (header)
- [ ] Fazer upload da sua foto de perfil (seção contact)
- [ ] Fazer upload das imagens dos seus projetos (thumbnails)
- [ ] Fazer upload de vídeos dos seus projetos (opcional)
- [ ] Criar arquivo `.env.local` com:
  ```env
  NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=seu_cloud_name
  ```

### Atualizar Referências de Imagem

Após configurar o Cloudinary, atualizar os `src` nos arquivos:

- [ ] `app/_layout/header/index.jsx` - Sua foto pessoal
- [ ] `app/_layout/contact/components/user-details/index.jsx` - Sua foto de perfil
- [ ] `app/_data/thumbnail-options.js` - Imagens dos projetos
- [ ] `app/_data/project-options.js` - Mídias do slider

### Redes Sociais

**Arquivo:** `app/_data/social-medias.js`

- [ ] GitHub: `https://github.com/seu-usuario`
- [ ] LinkedIn: `https://linkedin.com/in/seu-usuario`
- [ ] Instagram: (opcional)
- [ ] Twitter/X: (opcional)

### Informações de Contato

**Arquivo:** `app/_layout/contact/components/user-details/index.jsx`

- [ ] Email: Substituir `seuemail@example.com`
- [ ] Telefone: Substituir `+55 11 99999-9999` (ou remover)

### Conteúdo dos Projetos

**Arquivo:** `app/_data/thumbnail-options.js`

- [ ] Projeto 1: título, href, imagem
- [ ] Projeto 2: título, href, imagem
- [ ] Projeto 3: título, href, imagem
- [ ] Projeto 4: título, href, imagem

### Metadados Finais

**Arquivo:** `app/_config/metadata.config.js`

- [ ] Atualizar `metadataBase` com domínio final
- [ ] Atualizar URL do GitHub do autor
- [ ] Configurar Twitter/X (se tiver)
- [ ] Atualizar screenshot para Open Graph

---

## 🧪 Como Testar Agora

O projeto **funciona sem Cloudinary** configurado. As imagens aparecerão quebradas, mas toda a estrutura, animações e navegação funcionam normalmente.

```bash
# Instalar dependências (se ainda não fez)
pnpm install

# Rodar em desenvolvimento
pnpm dev

# Acessar
http://localhost:3000
```

### O que esperar no teste:

| Funcionalidade             | Status                              |
| -------------------------- | ----------------------------------- |
| Homepage                   | ✅ Funciona (imagens quebradas)     |
| Navegação                  | ✅ Funciona                         |
| Menu mobile                | ✅ Funciona                         |
| Animações                  | ✅ Funciona                         |
| Scroll suave               | ✅ Funciona                         |
| Preloader                  | ✅ Funciona (2s de loading)         |
| Páginas About/Work/Contact | ✅ Funciona (mostram "In Progress") |
| Página 404                 | ✅ Funciona                         |

### Imagens quebradas esperadas:

- Header (foto pessoal)
- Seção Contact (foto de perfil)
- Thumbnails dos projetos
- Slider de projetos

**Isso é normal!** As imagens só funcionarão após configurar o Cloudinary.

---

## 📁 Arquivos Importantes

```
app/
├── _config/
│   └── metadata.config.js    # SEO e metadados globais
├── _data/
│   ├── social-medias.js      # Suas redes sociais
│   ├── thumbnail-options.js  # Seus projetos (grid)
│   └── project-options.js    # Mídias do slider
├── _layout/
│   ├── header/index.jsx      # Header com seu nome
│   ├── navbar/brand.jsx      # Logo "Code by Luis Carlos"
│   └── contact/components/
│       └── user-details/     # Email, telefone, foto
└── _hooks/
    └── use-lenis.js          # Hook do scroll (bug corrigido)
```

---

## 🔗 Links Úteis

- [Cloudinary - Criar Conta](https://cloudinary.com/users/register_free)
- [Next-Cloudinary Docs](https://next.cloudinary.dev/)
- [Vercel - Deploy](https://vercel.com/new)

---

_Última atualização: Janeiro 2026_
