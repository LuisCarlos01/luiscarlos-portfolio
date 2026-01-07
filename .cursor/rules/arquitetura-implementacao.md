# 🏗️ Regras de Arquitetura e Implementação — Luis Carlos Portfolio

**Propósito:** Este documento define as regras arquiteturais que devem ser seguidas em **TODAS** as implementações e refatorações do projeto.

**Aplicação:** Obrigatório para:
- ✅ Novas features
- ✅ Refatorações de código
- ✅ Correções de bugs que alterem estrutura
- ✅ Adição de dependências
- ✅ Mudanças arquiteturais

---

## 📋 Checklist Pré-Implementação

Antes de começar qualquer implementação, verificar:

- [ ] A mudança está alinhada com a arquitetura atual?
- [ ] É necessário adicionar nova dependência? (justificar peso vs. benefício)
- [ ] O código seguirá as convenções de nomenclatura?
- [ ] A lógica será colocada no lugar correto (`_hooks/`, `_utils/`, `_components/`)?
- [ ] Dados estáticos vão para `_data/`?
- [ ] Componentes de layout são puramente apresentacionais?

---

## 🎯 Princípios Fundamentais

### 1. Simplicidade Consciente

> **"É uma Landing Page, não um ERP"**

**Regras:**
- ✅ Começar pela solução mais simples
- ✅ Abstrair apenas após 3ª repetição
- ✅ Perguntar: "Isso é necessário AGORA ou futuro hipotético?"
- ❌ Não criar camadas desnecessárias
- ❌ Não aplicar padrões "porque são corretos teoricamente"

**Exemplo:**

```javascript
// ✅ BOM: Simples e direto
export const navItems = [
  { href: '/', title: 'home' },
  { href: '/about', title: 'about' },
];

// ❌ EVITAR: Over-engineering
class NavItemFactory {
  createItem(href, title) { /* ... */ }
}
```

---

### 2. Separation of Concerns

**Regras:**

| Tipo de Código | Localização | Responsabilidade |
|----------------|-------------|------------------|
| **Dados estáticos** | `app/_data/` | Apenas dados, zero lógica |
| **Lógica pura** | `app/_hooks/` ou `app/_utils/` | Funções testáveis, sem side effects |
| **UI reutilizável** | `app/_components/` | Apresentação, sem lógica de negócio |
| **Layout/seções** | `app/_layout/` | Composição, puramente apresentacional |
| **Configuração** | `app/_config/` | Metadata, configurações globais |

**NUNCA:**
- ❌ Colocar lógica de negócio em componentes de layout
- ❌ Colocar dados hardcoded em componentes
- ❌ Misturar responsabilidades em um único arquivo

**Exemplo:**

```jsx
// ❌ MAU: Lógica em componente de layout
export function Header() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch('/api/data').then(/* ... */);
  }, []);
  return <header>{/* ... */}</header>;
}

// ✅ BOM: Layout puramente apresentacional
export function Header() {
  const headerData = useHeaderData(); // Hook isolado
  return <header>{/* ... */}</header>;
}
```

---

### 3. Estado Local Primeiro

**Regra:** Estado global só se 3+ componentes distantes precisarem compartilhar estado complexo.

**Hierarquia de Decisão:**

```
1. useState/useRef local
   ↓ Se não suficiente
2. Custom Hook compartilhado
   ↓ Se não suficiente
3. Context API (apenas para providers técnicos)
   ↓ NUNCA para landing page
4. Redux/Zustand (over-engineering)
```

**Quando usar cada um:**

| Situação | Solução |
|----------|---------|
| Estado de UI local (ex: menu aberto) | `useState` |
| Lógica reutilizável (ex: scroll, animação) | Custom Hook (`_hooks/`) |
| Provider técnico (ex: Styled Components) | Context API (`_providers/`) |
| Estado compartilhado complexo | ❌ Não aplicar (landing page não precisa) |

---

### 4. Convenções de Nomenclatura

**Obrigatório seguir:**

| Tipo | Convenção | Exemplo |
|------|-----------|---------|
| **Componentes** | PascalCase folders | `Button/`, `MagneticButton/` |
| **Arquivo principal** | `index.jsx` | `Button/index.jsx` |
| **Styled files** | `index.styled.js` | `Button/index.styled.js` |
| **Variants** | `variants.js` | `Button/variants.js` |
| **Hooks** | kebab-case, prefix `use-` | `use-magnetic.js`, `use-lenis.js` |
| **Utils** | kebab-case | `class-name.js`, `random-id.js` |
| **Data** | kebab-case | `nav-items.js`, `social-medias.js` |
| **Subcomponents** | `components/` subfolder | `Button/components/` |

**Barrel Exports:**

Todo módulo deve ter `index.js` exportando seus membros:

```javascript
// app/_components/common/button/index.js
export { MagneticButton } from './magnetic';
export { DefaultButton } from './default';
```

---

### 5. Organização de Pastas

**Estrutura obrigatória:**

```
app/
├── _components/          # UI reutilizável
│   ├── common/          # Primitives (Button, Input, etc.)
│   └── [feature]/       # Feature-specific (se necessário)
│       ├── index.jsx
│       ├── index.styled.js
│       └── variants.js
├── _hooks/              # Custom hooks (kebab-case)
│   └── use-[nome].js
├── _utils/              # Funções utilitárias
│   └── helpers/
├── _data/               # Dados estáticos
│   └── [nome].js
├── _layout/             # Componentes de layout/seções
│   └── [secao]/
│       ├── index.jsx
│       └── components/  # Subcomponentes
└── (in-progress)/       # Páginas em desenvolvimento
```

**Regras:**
- ✅ Prefixo `_` para código privado (não é rota)
- ✅ Route groups `()` para organizar rotas
- ✅ Barrel exports em cada módulo
- ❌ Não criar subpastas desnecessárias

---

## 🚫 Anti-Patterns Proibidos

### AP-01: Lógica em Componentes de Layout

**❌ PROIBIDO:**

```jsx
// Componentes de _layout/ NÃO podem ter:
- useState para dados de negócio
- useEffect com fetch/API calls
- Lógica de transformação de dados
- Validações complexas
```

**✅ CORRETO:**

```jsx
// Componentes de _layout/ devem ser:
- Puramente apresentacionais
- Receber dados via props ou hooks simples
- Usar hooks de _hooks/ para lógica
```

---

### AP-02: Dados Hardcoded em Componentes

**❌ PROIBIDO:**

```jsx
export function Navbar() {
  return (
    <nav>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
    </nav>
  );
}
```

**✅ CORRETO:**

```jsx
import { navItems } from '@/data';

export function Navbar() {
  return (
    <nav>
      {navItems.map(item => (
        <Link key={item.href} href={item.href}>
          {item.title}
        </Link>
      ))}
    </nav>
  );
}
```

**Regra:** Todo conteúdo vai em `_data/`, componentes são templates.

---

### AP-03: Dependências Desnecessárias

**Antes de adicionar dependência:**

1. ✅ Justificar peso vs. benefício
2. ✅ Verificar se solução nativa resolve
3. ✅ Checar bundle size impact
4. ✅ Documentar no ADR se for decisão arquitetural

**Monitoramento:**

```bash
# Adicionar ao package.json
"scripts": {
  "analyze": "ANALYZE=true next build"
}
```

**Regra:** Cada dependência deve justificar seu peso. Preferir soluções nativas.

---

### AP-04: Estado Global Desnecessário

**❌ NUNCA usar para landing page:**
- Redux
- Zustand
- Context API para estado de aplicação

**✅ Usar apenas:**
- `useState` local
- Custom hooks (`_hooks/`)
- Context API apenas para providers técnicos (Styled Components, Balancer)

**Quando revisar:** Se 3+ componentes distantes precisarem compartilhar estado complexo (improvável em landing page).

---

### AP-05: Arquitetura Complexa

**❌ PROIBIDO criar:**

```
app/
├── _domain/
│   ├── entities/
│   ├── use-cases/
│   └── repositories/
├── _infrastructure/
└── _presentation/
```

**✅ MANTER simplicidade:**

```
app/
├── _components/    # UI
├── _hooks/         # Lógica
├── _data/          # Conteúdo
└── page.jsx        # Composição
```

**Regra:** Landing page não é sistema enterprise. Manter estrutura simples.

---

### AP-06: Animações Excessivas

**Regras obrigatórias:**

1. ✅ Respeitar `prefers-reduced-motion`:

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

2. ✅ Lazy animate below-the-fold:

```jsx
<motion.div
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  viewport={{ once: true }}
/>
```

3. ✅ Limitar animações simultâneas (máx. 3-5 elementos)

---

## ✅ Boas Práticas Obrigatórias

### 1. Path Aliases

**Sempre usar aliases definidos em `jsconfig.json`:**

```javascript
// ✅ CORRETO
import { Button } from '@/components';
import { useMagnetic } from '@/hooks';
import { navItems } from '@/data';

// ❌ EVITAR
import { Button } from '../../../_components/common/button';
```

---

### 2. Tipagem JSDoc

**Sempre tipar props e funções:**

```javascript
/**
 * @param {import('react').ButtonHTMLAttributes<HTMLButtonElement> & {
 *   variant: 'default' | 'primary';
 *   size: 'default' | 'md' | 'lg';
 * }} props
 */
export function Button({ variant, size, ...props }) {
  // ...
}
```

**Regra:** JSDoc é obrigatório para:
- Props de componentes
- Parâmetros de funções utilitárias
- Retornos de hooks customizados

---

### 3. Barrel Exports

**Todo módulo deve ter `index.js`:**

```javascript
// app/_components/common/button/index.js
export { MagneticButton } from './magnetic';
export { DefaultButton } from './default';

// Uso
import { MagneticButton, DefaultButton } from '@/components';
```

---

### 4. Performance

**Obrigatório:**

1. ✅ Lazy load seções below-the-fold:

```javascript
const Project = dynamic(() => import('@/layout').then(mod => mod.Project), {
  loading: () => <Skeleton />
});
```

2. ✅ Usar `next/image` para imagens
3. ✅ Preload recursos críticos via metadata
4. ✅ Monitorar bundle size em cada PR

---

### 5. Qualidade de Código

**Obrigatório:**

- ✅ ESLint sem erros
- ✅ Stylelint sem erros
- ✅ Prettier formatado
- ✅ Pre-commit hooks ativos
- ✅ Imports organizados (alfabético, grupos)

**Verificar antes de commit:**

```bash
pnpm lint
pnpm exec prettier --check "**/*.{js,jsx,json,css,md}"
```

---

## 🔄 Processo de Refatoração

### Checklist de Refatoração

Antes de refatorar:

- [ ] Entendi o código atual?
- [ ] A refatoração resolve um problema real?
- [ ] Não estou apenas "melhorando" código que funciona?
- [ ] Vou manter compatibilidade com código existente?
- [ ] Vou atualizar documentação se necessário?

### Regras de Refatoração

1. **Não refatorar código que funciona** sem motivo claro
2. **Manter compatibilidade** com código existente
3. **Testar após refatoração** (quando testes existirem)
4. **Documentar mudanças** se alterar arquitetura

---

## 📦 Adição de Dependências

### Processo Obrigatório

1. **Justificar necessidade:**
   - O que resolve?
   - Por que não usar solução nativa?
   - Qual o impacto no bundle size?

2. **Verificar alternativas:**
   - Existe solução mais leve?
   - Podemos implementar sem dependência?

3. **Avaliar impacto:**
   ```bash
   pnpm add [package]
   pnpm analyze  # Verificar bundle size
   ```

4. **Documentar decisão:**
   - Se for decisão arquitetural → Criar ADR
   - Se for dependência simples → Documentar no código

### Dependências Proibidas

**NÃO adicionar sem justificativa técnica:**
- State management (Redux, Zustand)
- Backend frameworks (Express, Fastify)
- ORMs (Prisma, TypeORM)
- Test frameworks complexos (Jest com muitos plugins)

**Preferir:**
- Soluções nativas do Next.js
- Bibliotecas leves e focadas
- Ferramentas já no projeto

---

## 🧪 Testes (Quando Adicionar)

### Estrutura de Testes

```
app/
├── _hooks/
│   ├── use-magnetic.js
│   └── use-magnetic.test.js    # Ao lado do código
├── _utils/
│   └── helpers/
│       ├── class-name.js
│       └── class-name.test.js
```

### O que Testar

| Tipo | Testar | Não Testar |
|------|--------|------------|
| **Hooks** | Lógica de cálculo, estados | Animações visuais |
| **Utils** | Transformações, validações | Imports/exports |
| **Components** | Lógica condicional | Estilos CSS |

### Stack Sugerida

```json
{
  "devDependencies": {
    "@testing-library/react": "^14.0.0",
    "@testing-library/jest-dom": "^6.0.0",
    "vitest": "^1.0.0"
  }
}
```

---

## 📝 Documentação

### Quando Documentar

**Obrigatório:**
- ✅ Mudanças arquiteturais → ADR
- ✅ Adição de dependências significativas → ADR ou comentário
- ✅ Hooks customizados → JSDoc completo
- ✅ Funções utilitárias complexas → JSDoc

**Opcional:**
- Componentes simples (código auto-explicativo)
- Utils triviais (ex: `const sum = (a, b) => a + b`)

### Formato de Documentação

**ADR para mudanças arquiteturais:**

```markdown
# ADR-XXX — Título da Decisão

- **Autor:** [Nome]
- **Status:** Proposto | Aceito | Deprecado
- **Data:** [YYYY-MM-DD]

## Contexto
[Por que esta decisão foi necessária]

## Decisão
[O que foi decidido]

## Consequências
[Impactos positivos e negativos]
```

---

## 🎯 Regras de Ouro

### 1. "É uma Landing Page, não um ERP"
Decisões devem ser proporcionais ao escopo.

### 2. "Estado local até provar que não funciona"
Só então considerar estado global.

### 3. "Simplicidade documentada > Complexidade elegante"
Código simples que qualquer dev entende > Padrão sofisticado que só você domina.

### 4. "Performance é feature de usuário"
Animações bonitas não valem se o site é lento.

### 5. "Documentar decisões, não código óbvio"
ADRs > comentários explicando `const sum = a + b;`

---

## 📊 Métricas de Saúde

### Verificar Trimestralmente

```yaml
Bundle Size:
  - First Load JS: < 150 kB
  - Total JS: < 300 kB

Performance:
  - Lighthouse Performance: > 90
  - Lighthouse Accessibility: > 95
  - TTI: < 3.5s

Code Quality:
  - ESLint errors: 0
  - Stylelint errors: 0
  - Test coverage: > 60% (quando adicionar testes)

Dependencies:
  - Outdated major versions: 0
  - Unused dependencies: 0
  - Known vulnerabilities: 0
```

---

## 🔍 Checklist Final Antes de Commit

- [ ] Código segue convenções de nomenclatura?
- [ ] Lógica está no lugar correto (`_hooks/`, `_utils/`)?
- [ ] Dados estáticos estão em `_data/`?
- [ ] Componentes de layout são apresentacionais?
- [ ] Imports usam path aliases (`@/components`)?
- [ ] JSDoc está completo?
- [ ] ESLint sem erros?
- [ ] Stylelint sem erros?
- [ ] Prettier formatado?
- [ ] Bundle size não aumentou significativamente?
- [ ] Performance não degradou?
- [ ] `prefers-reduced-motion` respeitado?

---

## 📚 Referências

- [Análise Arquitetural Completa](../../docs/analise-archsoftware/analise-arquitetural.md)
- [Documentação de Arquitetura](../../docs/arquitetura/ARCHITECTURE.md)
- [ADRs do Projeto](../../docs/adr/README.md)

---

**Última atualização:** Janeiro 2026  
**Versão:** 1.0.0
