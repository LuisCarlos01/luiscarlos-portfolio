# ADR-009 — Utilitário de Classes: CVA + clsx + tailwind-merge

- **Autor:** Luis Carlos
- **Status:** Aceito (Herdado do projeto original)
- **Data:** Novembro 2024
- **Origem:** Decisão herdada do portfolio Dennis Snellenberg

## Contexto

O projeto usa Tailwind CSS extensivamente e precisa de:

- Composição de classes de forma organizada
- Variantes de componentes (tamanhos, cores, estados)
- Resolução de conflitos entre classes Tailwind
- Condicionais de classes limpas e legíveis

Classes Tailwind podem ficar longas e difíceis de gerenciar sem ferramentas apropriadas.

## Decisão

Utilizar uma combinação de três bibliotecas complementares:

1. **CVA (Class Variance Authority)**: Definir variantes de componentes
2. **clsx**: Composição condicional de classes
3. **tailwind-merge**: Resolver conflitos de classes Tailwind

### Evidências no código:

**Função `cn` (`app/_utils/helpers/class-name.js`):**

```javascript
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
```

**CVA para Variantes (`app/_components/common/button/magnetic/index.variance.js`):**

```javascript
import { cva } from 'class-variance-authority';

export const magneticVariance = cva(
  'relative inline-flex items-center justify-center...', // classes base
  {
    variants: {
      variant: {
        default: 'bg-transparent...',
        primary: 'bg-primary text-background...',
        ghost: 'bg-foreground text-background...',
      },
      size: {
        default: 'p-2 text-sm',
        md: 'px-8 py-10 text-base',
        lg: 'px-8 py-16 text-lg...',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);
```

**Uso no Componente:**

```jsx
<motion.button
  className={cn(magneticVariance({ variant, size, className }))}
  // ...
>
```

## Alternativas Consideradas

### 1. Apenas clsx/classnames

- **Prós:** Simples, leve
- **Contras:** Não resolve conflitos de Tailwind, sem sistema de variantes
- **Por que não:** Não é suficiente para componentes complexos

### 2. Apenas tailwind-merge

- **Prós:** Resolve conflitos perfeitamente
- **Contras:** Sintaxe menos elegante para condicionais
- **Por que não:** clsx oferece melhor DX para condicionais

### 3. Stitches ou Vanilla Extract

- **Prós:** Type-safe, variantes nativas
- **Contras:** Não integram bem com Tailwind
- **Por que não:** Projeto já usa Tailwind extensivamente

### 4. Tailwind Variants

- **Prós:** Combina CVA + tailwind-merge em uma lib
- **Contras:** Menos controle granular
- **Por que não:** Bibliotecas separadas oferecem mais flexibilidade

## Consequências

### Positivas

- `cn()` é o padrão de facto para projetos Tailwind/React
- CVA torna variantes de componentes declarativas e organizadas
- tailwind-merge evita conflitos como `p-2 p-4` → `p-4`
- Type-safety com TypeScript/JSDoc para variantes
- Padrão popularizado pelo shadcn/ui (fácil encontrar exemplos)
- Composição limpa: `cn(baseClasses, conditionalClasses, className)`

### Negativas / Limitações

- Três dependências para gerenciar classes
- tailwind-merge precisa conhecer a config do Tailwind (customizações)
- Pequeno overhead de runtime para processar classes
- CVA adiciona abstração que nem todos conhecem

### Quando Revisar

- Se Tailwind v4 trouxer solução nativa para conflitos
- Ao considerar bibliotecas como tailwind-variants
- Se performance de renderização for um problema
- Quando TypeScript for adotado (melhorar tipos de CVA)
