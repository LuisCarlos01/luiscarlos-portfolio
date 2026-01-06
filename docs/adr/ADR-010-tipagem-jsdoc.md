# ADR-010 — Tipagem via JSDoc

- **Autor:** Luis Carlos
- **Status:** Aceito (Herdado do projeto original)
- **Data:** Novembro 2024
- **Origem:** Decisão herdada do portfolio Dennis Snellenberg

## Contexto

O projeto precisa de algum nível de tipagem para:

- Documentar props de componentes
- Autocompletar no editor (IntelliSense)
- Detectar erros básicos de tipo
- Facilitar manutenção do código

A escolha está entre usar TypeScript completo ou manter JavaScript com anotações de tipo.

## Decisão

Manter **JavaScript** com tipagem via **comentários JSDoc**, utilizando `jsconfig.json` para configurar path aliases e habilitar checagem de tipos.

### Evidências no código:

**Configuração (`jsconfig.json`):**

```json
{
  "compilerOptions": {
    "paths": {
      "@/components": ["./app/_components/index.js"],
      "@/hooks": ["./app/_hooks/index.js"]
      // ...
    }
  }
}
```

**JSDoc em Componentes (`app/_layout/transition/index.jsx`):**

```javascript
/** @param {import('react').PropsWithChildren<unknown>} */
export function Transition({ children }) {
  // ...
}
```

**JSDoc em Hooks (`app/_hooks/use-magnetic.js`):**

```javascript
/** @param {import('react').MutableRefObject<HTMLButtonElement>} element */
export function useMagnetic(element) {
  // ...
}

/** @type {import('react').PointerEventHandler<HTMLButtonElement>} */
const handleMagneticMove = useCallback(/* ... */);
```

**JSDoc com Metadata do Next.js:**

```javascript
/** @type {import('next').Metadata} */
export const metadata = {
  title: 'Home | Dennis Snellenberg',
  // ...
};
```

## Alternativas Consideradas

### 1. TypeScript completo (.tsx)

- **Prós:** Melhor type-safety, erros em compile-time, refactoring mais seguro
- **Contras:** Setup adicional, curva de aprendizado, possíveis conflitos com libs
- **Por que não:** JSDoc oferece boa parte dos benefícios com menos complexidade

### 2. JavaScript sem tipagem

- **Prós:** Máxima simplicidade
- **Contras:** Sem autocompletar, erros descobertos só em runtime
- **Por que não:** Perda significativa de DX

### 3. Flow (Facebook)

- **Prós:** Gradual typing como JSDoc
- **Contras:** Ecossistema menor, menos suporte de editores
- **Por que não:** TypeScript/JSDoc é o padrão da indústria

### 4. PropTypes (runtime)

- **Prós:** Validação em runtime, documentação
- **Contras:** Overhead de runtime, deprecated para novos projetos
- **Por que não:** JSDoc oferece melhor DX sem runtime cost

## Consequências

### Positivas

- Zero build step adicional para tipos
- Autocompletar funciona no VS Code/Cursor
- Imports de tipos do React/Next.js funcionam
- Documentação inline para desenvolvedores
- Gradual - pode adicionar tipos onde necessário
- Arquivos menores que equivalentes TypeScript

### Negativas / Limitações

- Menos rigoroso que TypeScript
- Sintaxe JSDoc é mais verbosa
- Alguns padrões avançados de tipos são difíceis/impossíveis
- Checagem de tipos não é obrigatória no build
- Menos refactoring automatizado disponível
- Comunidade tende a preferir TypeScript

### Quando Revisar

- Se erros de tipo se tornarem frequentes em produção
- Ao escalar a equipe (TypeScript é mais familiar)
- Quando precisar de tipos mais complexos (generics, unions)
- Ao adicionar API routes que precisam de validação
