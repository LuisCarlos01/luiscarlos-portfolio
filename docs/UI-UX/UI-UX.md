# Guia de UI/UX

Documentação dos princípios visuais e de experiência do usuário adotados no portfolio.

---

## 1. Princípios Visuais Adotados

O design do portfolio segue uma filosofia visual baseada em quatro pilares fundamentais:

### Minimalismo Elegante

- Layout limpo com foco no conteúdo
- Uso estratégico de espaços em branco
- Hierarquia visual clara através de tipografia e espaçamento
- Elementos de interface não competem pela atenção do usuário

### Interatividade Sutil

- Efeitos magnéticos em botões (`MagneticButton`)
- Cursor customizado com follow effect (GSAP)
- Micro-interações que respondem ao movimento do mouse
- Feedback visual imediato nas ações do usuário

### Fluidez

- Scroll suave implementado com Lenis
- Transições de página animadas via Framer Motion
- Efeitos de parallax em elementos de destaque
- Animações de entrada/saída em componentes

### Consistência

- Design tokens centralizados via CSS Variables
- Sistema de cores semântico
- Componentes reutilizáveis com variantes definidas (CVA)
- Padrões de estilização híbridos (Tailwind + Styled Components)

> **Referências:** [ADR-002 — Estilização Híbrida](../adr/ADR-002-estilizacao-hibrida.md), [ADR-003 — Design Tokens](../adr/ADR-003-design-tokens-css-variables.md)

---

## 2. Tipografia

### Fonte Principal

| Propriedade    | Valor             |
| -------------- | ----------------- |
| **Nome**       | Neue Montreal     |
| **Tipo**       | Sans-serif        |
| **Peso**       | Normal (400)      |
| **Estilo**     | Regular           |
| **Formato**    | WOFF2 (otimizado) |
| **Hospedagem** | Local             |

### Configuração Técnica

```javascript
// app/_fonts/neue-montreal/index.js
import localFont from 'next/font/local';

export const neue_montreal = localFont({
  src: './regular/index.woff2',
  weight: 'normal',
  style: 'normal',
  variable: '--font-neue-montreal',
  display: 'swap',
});
```

### CSS Variable

```css
--font-neue-montreal
```

### Uso no Tailwind

```javascript
fontFamily: {
  neue_montreal: ['var(--font-neue-montreal)'],
}
```

### Características

- **Carregamento otimizado**: `display: swap` evita FOIT (Flash of Invisible Text)
- **Performance**: Fonte servida do mesmo domínio, sem DNS lookup extra
- **Consistência**: Aparência idêntica em todos os sistemas operacionais
- **Identidade**: Transmite profissionalismo e modernidade

> **Referência:** [ADR-007 — Tipografia](../adr/ADR-007-tipografia-font-local.md)

---

## 3. Paleta de Cores

As cores são definidas em formato **HSL** para permitir manipulação fácil de opacidade.

### Cores Principais

| Token                  | Valor HSL     | Cor                                                                          | Uso                         |
| ---------------------- | ------------- | ---------------------------------------------------------------------------- | --------------------------- |
| `--background`         | `0 0% 100%`   | ![#FFFFFF](https://via.placeholder.com/20/FFFFFF/FFFFFF?text=+) Branco       | Fundo principal             |
| `--foreground`         | `225 7% 12%`  | ![#1C1D22](https://via.placeholder.com/20/1C1D22/1C1D22?text=+) Cinza Escuro | Texto principal             |
| `--primary`            | `232 79% 59%` | ![#4361EE](https://via.placeholder.com/20/4361EE/4361EE?text=+) Azul         | Elementos de destaque, CTAs |
| `--primary-foreground` | `231 65% 51%` | ![#3651C9](https://via.placeholder.com/20/3651C9/3651C9?text=+) Azul Escuro  | Texto sobre primary         |

### Cores Secundárias

| Token                    | Valor HSL        | Cor                                                                               | Uso                     |
| ------------------------ | ---------------- | --------------------------------------------------------------------------------- | ----------------------- |
| `--secondary`            | `210 5% 85.9%`   | ![#D8D9DB](https://via.placeholder.com/20/D8D9DB/D8D9DB?text=+) Cinza Claro       | Backgrounds secundários |
| `--secondary-foreground` | `192 3% 61%`     | ![#9A9D9F](https://via.placeholder.com/20/9A9D9F/9A9D9F?text=+) Cinza Médio       | Texto secundário        |
| `--muted`                | `210 5% 95.9%`   | ![#F3F3F4](https://via.placeholder.com/20/F3F3F4/F3F3F4?text=+) Cinza Muito Claro | Áreas desabilitadas     |
| `--muted-foreground`     | `240 3.8% 46.1%` | ![#717179](https://via.placeholder.com/20/717179/717179?text=+) Cinza             | Texto muted             |

### Cores de Interface

| Token           | Valor HSL       | Cor                                                                         | Uso                       |
| --------------- | --------------- | --------------------------------------------------------------------------- | ------------------------- |
| `--border`      | `192 3% 90%`    | ![#E4E5E6](https://via.placeholder.com/20/E4E5E6/E4E5E6?text=+) Cinza Borda | Bordas e divisores        |
| `--input`       | `192 3% 90%`    | ![#E4E5E6](https://via.placeholder.com/20/E4E5E6/E4E5E6?text=+) Cinza Input | Campos de formulário      |
| `--ring`        | `232 79% 59%`   | ![#4361EE](https://via.placeholder.com/20/4361EE/4361EE?text=+) Azul        | Focus ring                |
| `--destructive` | `0 84.2% 60.2%` | ![#EF4444](https://via.placeholder.com/20/EF4444/EF4444?text=+) Vermelho    | Erros e ações destrutivas |

### Uso Semântico

```css
/* Uso via CSS */
background-color: hsl(var(--background));
color: hsl(var(--foreground));

/* Com opacidade */
background-color: hsl(var(--primary) / 0.5);
```

```jsx
// Uso via Tailwind
<div className="bg-background text-foreground" />
<button className="bg-primary text-primary-foreground" />
```

### Arquivos de Configuração

- **Definição**: `app/_lib/plugins/tailwind.js`
- **Tema Styled Components**: `app/_providers/styled-components/theme.js`

> **Referência:** [ADR-003 — Design Tokens](../adr/ADR-003-design-tokens-css-variables.md)

---

## 4. Grid e Espaçamento

### Container

| Propriedade         | Valor                         |
| ------------------- | ----------------------------- |
| **Alinhamento**     | Centralizado (`center: true`) |
| **Padding**         | `2rem` (32px)                 |
| **Max-width (2xl)** | `1400px`                      |

```javascript
container: {
  center: true,
  padding: '2rem',
  screens: {
    '2xl': '1400px',
  },
},
```

### Breakpoints

Sistema de breakpoints responsivo:

| Nome        | Largura | Uso                        |
| ----------- | ------- | -------------------------- |
| `xs`        | 320px   | Mobile pequeno             |
| `sm`        | 640px   | Mobile                     |
| `md`        | 768px   | Tablet                     |
| `lg`        | 1024px  | Desktop pequeno            |
| `xl`        | 1280px  | Desktop                    |
| `container` | 1400px  | Largura máxima do conteúdo |
| `2xl`       | 1536px  | Desktop grande             |

### Border Radius

Sistema de arredondamento baseado em variável CSS:

| Tamanho    | Valor                       | Uso                  |
| ---------- | --------------------------- | -------------------- |
| `--radius` | `0.5rem` (8px)              | Base                 |
| `lg`       | `var(--radius)`             | Cartões, modais      |
| `md`       | `calc(var(--radius) - 2px)` | Botões               |
| `sm`       | `calc(var(--radius) - 4px)` | Inputs               |
| `full`     | `9999px`                    | Elementos circulares |

### Durações de Transição

```javascript
transitionDuration: {
  1500: '1500ms',
  2000: '2000ms',
  2500: '2500ms',
  3000: '3000ms',
},
```

### Easing Customizado

```javascript
transitionTimingFunction: {
  'in-expo': 'cubic-bezier(0.1, 0, 0.3, 1)',
},
```

---

## 5. Acessibilidade Básica

### Práticas Implementadas

#### Screen Readers

Utilização da classe `sr-only` para textos acessíveis invisíveis visualmente:

```jsx
<span className='sr-only focus:not-sr-only'>Offcanvas Toggle</span>
```

#### Carregamento de Fontes

- `display: swap` garante que o texto seja visível imediatamente
- Evita FOIT (Flash of Invisible Text)
- Fonte é trocada quando carregada, sem bloquear renderização

#### Contraste

- Foreground escuro (`225 7% 12%`) sobre background claro (`0 0% 100%`)
- Ratio de contraste adequado para leitura
- Cores de texto secundário mantêm legibilidade

#### Seleção de Texto

Estilização customizada mantendo visibilidade:

```css
*::selection {
  background-color: theme(colors.muted.foreground);
  color: theme(colors.background);
}
```

#### Scrollbar Customizada

Scrollbar estilizada mantendo funcionalidade:

```css
/* Firefox */
* {
  scrollbar-color: theme(colors.secondary.foreground)
    theme(colors.secondary.DEFAULT);
}

/* Chrome, Edge, Safari */
*::-webkit-scrollbar {
  width: theme(width[1.5]);
}
```

### Recomendações para Melhorias

| Área                  | Recomendação                                       | Prioridade |
| --------------------- | -------------------------------------------------- | ---------- |
| **Focus States**      | Adicionar `focus-visible` em elementos interativos | Alta       |
| **Skip Links**        | Implementar link "Pular para conteúdo"             | Média      |
| **ARIA Labels**       | Adicionar `aria-label` em botões de ícone          | Alta       |
| **Reduced Motion**    | Respeitar `prefers-reduced-motion`                 | Média      |
| **Alt Text**          | Garantir alt text em todas as imagens              | Alta       |
| **Heading Hierarchy** | Manter hierarquia de headings (h1 → h2 → h3)       | Média      |

### Exemplo de Focus Visible

```css
/* Recomendação para implementação */
.button:focus-visible {
  outline: 2px solid hsl(var(--ring));
  outline-offset: 2px;
}
```

### Exemplo de Reduced Motion

```css
/* Recomendação para implementação */
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## Referências

- [ADR-002 — Estilização Híbrida](../adr/ADR-002-estilizacao-hibrida.md)
- [ADR-003 — Design Tokens via CSS Variables](../adr/ADR-003-design-tokens-css-variables.md)
- [ADR-007 — Tipografia](../adr/ADR-007-tipografia-font-local.md)
- [BRIEFING.md](../briefing/BRIEFING.md)
- [ARCHITECTURE.md](../arquitetura/ARCHITECTURE.md)

---

_Última atualização: Janeiro 2026_

