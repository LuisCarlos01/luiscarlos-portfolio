# ADR-003 — Design Tokens via CSS Variables

- **Autor:** Luis Carlos
- **Status:** Aceito (Herdado do projeto original)
- **Data:** Novembro 2024
- **Origem:** Decisão herdada do portfolio Dennis Snellenberg

## Contexto

O projeto utiliza duas bibliotecas de estilização (Tailwind CSS e Styled Components) que precisam compartilhar:

- Cores do tema
- Espaçamentos
- Border radius
- Tipografia
- Outras variáveis de design

É necessário um sistema de design tokens que seja agnóstico de biblioteca e permita consistência visual.

## Decisão

Utilizar **CSS Variables (Custom Properties)** como fonte única de verdade para design tokens, com valores em formato **HSL** para cores.

### Evidências no código:

**Plugin Tailwind (`app/_lib/plugins/tailwind.js`):**

```javascript
':root': {
  '--background': '0 0% 100%',
  '--foreground': '225 7% 12%',
  '--primary': '232 79% 59%',
  // ...
}
```

**Theme Styled Components (`app/_providers/styled-components/theme.js`):**

```javascript
colors: {
  background: 'hsl(var(--background))',
  foreground: 'hsl(var(--foreground))',
  // ...
}
```

## Alternativas Consideradas

### 1. Tokens apenas no Tailwind

- **Prós:** Configuração simplificada
- **Contras:** Styled Components não teria acesso direto
- **Por que não:** Precisamos de tokens em ambas as bibliotecas

### 2. Tokens apenas no tema do Styled Components

- **Prós:** Theming dinâmico com Context
- **Contras:** Tailwind não teria acesso
- **Por que não:** Tailwind é usado para a maioria dos estilos

### 3. Arquivo JavaScript compartilhado

- **Prós:** Type-safe, importável em qualquer lugar
- **Contras:** Precisa de build step, não funciona em CSS puro
- **Por que não:** CSS Variables funcionam nativamente em qualquer contexto

### 4. Formato RGB ou HEX para cores

- **Prós:** Mais familiar para a maioria dos desenvolvedores
- **Contras:** Difícil de manipular opacidade
- **Por que não:** HSL permite usar `hsl(var(--color) / 0.5)` para opacidade

## Consequências

### Positivas

- Única fonte de verdade para todos os tokens
- Funciona em Tailwind, Styled Components, e CSS puro
- Formato HSL permite manipulação fácil de opacidade
- Suporte nativo do navegador (sem JavaScript)
- Facilita implementação de dark mode no futuro
- DevTools mostram os valores diretamente

### Negativas / Limitações

- CSS Variables não são type-safe
- Erros de digitação só são detectados em runtime
- Sintaxe `hsl(var(--color))` é mais verbosa
- IE11 não suporta (não é problema para este projeto)

### Quando Revisar

- Ao implementar dark mode (pode precisar de mais variáveis)
- Se TypeScript for adotado (considerar geração automática de tipos)
- Quando design system crescer significativamente
