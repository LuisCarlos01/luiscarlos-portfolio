# ADR-011 — Qualidade de Código: ESLint + Stylelint + Prettier + Husky

- **Autor:** Luis Carlos
- **Status:** Aceito (Herdado do projeto original)
- **Data:** Novembro 2024
- **Origem:** Decisão herdada do portfolio Dennis Snellenberg

## Contexto

O projeto precisa manter qualidade e consistência de código através de:
- Linting de JavaScript/JSX
- Linting de CSS (incluindo Tailwind e Styled Components)
- Formatação consistente
- Prevenção de commits com problemas

## Decisão

Implementar um pipeline completo de qualidade de código:
1. **ESLint**: Linting de JavaScript/JSX
2. **Stylelint**: Linting de CSS e styled-components
3. **Prettier**: Formatação de código
4. **Husky + lint-staged**: Hooks de pre-commit

### Evidências no código:

**ESLint (`.eslintrc.json`):**
```json
{
  "extends": [
    "next/core-web-vitals",
    "plugin:import/recommended",
    "plugin:tailwindcss/recommended",
    "prettier"
  ],
  "rules": {
    "import/order": ["error", {
      "groups": [["type", "object", "external", "builtin"], "internal", ["parent", "sibling", "index"]],
      "newlines-between": "always",
      "alphabetize": { "order": "asc" }
    }]
  }
}
```

**Stylelint (`.stylelintrc.json`):**
```json
{
  "extends": ["stylelint-config-standard", "stylelint-config-tailwindcss"],
  "plugins": ["stylelint-order"],
  "customSyntax": "postcss-styled-syntax",
  "rules": {
    "order/order": ["custom-properties", "declarations"],
    "max-nesting-depth": 2
  }
}
```

**Husky (`package.json`):**
```json
{
  "scripts": {
    "prepare": "husky install"
  }
}
```

**Dependências:**
- `eslint`, `eslint-config-next`, `eslint-config-prettier`
- `eslint-plugin-import`, `eslint-plugin-tailwindcss`
- `stylelint`, `stylelint-config-standard`, `stylelint-order`
- `postcss-styled-syntax` (para lint de styled-components)
- `prettier`
- `husky`, `lint-staged`

## Alternativas Consideradas

### 1. Apenas ESLint
- **Prós:** Simplifica setup
- **Contras:** Não linta CSS, formatação inconsistente
- **Por que não:** Projeto usa CSS extensivamente

### 2. Biome (ex-Rome)
- **Prós:** Mais rápido, tudo em uma ferramenta
- **Contras:** Menos plugins, menos maduro
- **Por que não:** ESLint tem melhor ecossistema para Next.js

### 3. Sem pre-commit hooks
- **Prós:** CI/CD pode fazer o lint
- **Contras:** Erros descobertos tardiamente
- **Por que não:** Pre-commit previne commits ruins na origem

### 4. Dprint em vez de Prettier
- **Prós:** Mais rápido
- **Contras:** Menos suporte a linguagens
- **Por que não:** Prettier é o padrão da indústria

## Consequências

### Positivas
- Código consistente independente do desenvolvedor
- Imports organizados automaticamente (alfabético, grupos)
- CSS ordenado (custom properties primeiro, depois declarations)
- Pre-commit previne código problemático no repositório
- Integração com editores (erros em tempo real)
- `postcss-styled-syntax` permite lint de CSS em template literals

### Negativas / Limitações
- Muitas dependências de desenvolvimento
- Configuração inicial complexa
- Pre-commit hooks podem ser lentos em mudanças grandes
- Conflitos ocasionais entre ESLint e Prettier
- Desenvolvedores podem desabilitar hooks localmente

### Quando Revisar
- Ao considerar migração para Biome
- Se hooks de pre-commit ficarem muito lentos
- Quando ESLint v9 (flat config) se tornar padrão
- Ao adicionar novos tipos de arquivo (ex: MDX)
