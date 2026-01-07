---
name: UI/UX Documentation
overview: Criar documento `UI-UX.md` na pasta `docs/UI-UX/` documentando princípios visuais, tipografia, paleta de cores, grid/espaçamento e acessibilidade básica do projeto.
todos:
  - id: create-folder
    content: Criar pasta docs/UI-UX/
    status: completed
  - id: create-doc
    content: Criar documento UI-UX.md com todas as secoes documentadas
    status: completed
---

# Documento de UI/UX

## Objetivo

Criar um documento consolidado em `docs/UI-UX/UI-UX.md` que documente os padrões visuais e de experiência do usuário adotados no portfolio.

---

## Estrutura do Documento

### 1. Principios Visuais Adotados

Documentar a filosofia de design baseada nas evidencias encontradas:

- **Minimalismo elegante**: Layout limpo com foco no conteudo
- **Interatividade sutil**: Efeitos magneticos em botoes, cursor customizado
- **Fluidez**: Scroll suave (Lenis), transicoes de pagina animadas
- **Consistencia**: Design tokens centralizados via CSS Variables

Referencia: [ADR-002](../adr/ADR-002-estilizacao-hibrida.md), [ADR-003](../adr/ADR-003-design-tokens-css-variables.md)

---

### 2. Tipografia

Documentar baseado em [ADR-007](../adr/ADR-007-tipografia-font-local.md):

- **Fonte principal**: Neue Montreal (local)
- **Peso**: Normal (400)
- **Formato**: WOFF2 otimizado
- **CSS Variable**: `--font-neue-montreal`
- **Carregamento**: `display: swap` para evitar FOIT

Arquivo de configuracao: `app/_fonts/neue-montreal/index.js`

---

### 3. Paleta de Cores

Documentar tokens de cor em formato HSL (de `app/_lib/plugins/tailwind.js`):

- **Background**: `0 0% 100%` (branco)
- **Foreground**: `225 7% 12%` (cinza escuro)
- **Primary**: `232 79% 59%` (azul vibrante)
- **Secondary**: `210 5% 85.9%` (cinza claro)
- **Muted**: `210 5% 95.9%` (cinza muito claro)
- **Accent**: `210 5% 95.9%`
- **Border**: `192 3% 90%`
- **Destructive**: `0 84.2% 60.2%` (vermelho)

Incluir swatches visuais e uso semantico de cada cor.

---

### 4. Grid e Espacamento

Documentar sistema de layout (de `tailwind.js` e `theme.js`):

- **Container**: Centralizado, max-width 1400px, padding 2rem
- **Breakpoints**:
- xs: 320px
- sm: 640px
- md: 768px
- lg: 1024px
- xl: 1280px
- 2xl: 1536px
- **Border Radius**: Base de 0.5rem com variacoes (lg, md, sm)

---

### 5. Acessibilidade Basica

Documentar praticas encontradas e recomendacoes:

- **Screen readers**: Classe `sr-only` para textos acessiveis
- **Fontes**: `display: swap` evita texto invisivel
- **Contraste**: Foreground escuro em background claro
- **Focus states**: Suporte a navegacao por teclado
- **Selecao de texto**: Estilizada em `globals.css`

---

## Arquivos a Criar

- `docs/UI-UX/UI-UX.md` - Documento principal

---

## Referencias Internas

- [ADR-002 — Estilizacao Hibrida](docs/adr/ADR-002-estilizacao-hibrida.md)
- [ADR-003 — Design Tokens](docs/adr/ADR-003-design-tokens-css-variables.md)
- [ADR-007 — Tipografia](docs/adr/ADR-007-tipografia-font-local.md)
- [BRIEFING.md](docs/briefing/BRIEFING.md)
