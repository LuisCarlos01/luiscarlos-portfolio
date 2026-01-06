# ADR-008 — Organização de Pastas com Prefixo Underscore

- **Autor:** Luis Carlos
- **Status:** Aceito (Herdado do projeto original)
- **Data:** Novembro 2024
- **Origem:** Decisão herdada do portfolio Dennis Snellenberg

## Contexto

O Next.js App Router trata cada pasta dentro de `/app` como uma potencial rota. O projeto precisa de:

- Separação clara entre código de rotas e código de infraestrutura
- Organização lógica de componentes, hooks, utils, etc.
- Evitar que pastas de código sejam interpretadas como rotas
- Estrutura escalável e fácil de navegar

## Decisão

Utilizar **prefixo underscore** (`_`) para pastas que contêm código de infraestrutura, seguindo a convenção do Next.js que ignora pastas começando com `_`.

### Evidências no código:

**Estrutura de Pastas:**

```
app/
├── _components/     # Componentes reutilizáveis
├── _config/         # Configurações (metadata, etc.)
├── _data/           # Dados estáticos
├── _fonts/          # Fontes locais
├── _hooks/          # Custom hooks
├── _layout/         # Componentes de layout
├── _lib/            # Bibliotecas e plugins
├── _providers/      # Context providers
├── _utils/          # Funções utilitárias
├── (in-progress)/   # Route group para páginas em desenvolvimento
├── page.jsx         # Rota: /
├── layout.jsx       # Layout raiz
└── not-found.jsx    # Página 404
```

**Path Aliases (`jsconfig.json`):**

```json
{
  "compilerOptions": {
    "paths": {
      "@/components": ["./app/_components/index.js"],
      "@/hooks": ["./app/_hooks/index.js"],
      "@/layout": ["./app/_layout/index.js"]
      // ...
    }
  }
}
```

## Alternativas Consideradas

### 1. Pasta `/src` separada

- **Prós:** Separação total entre código e rotas
- **Contras:** Quebra a convenção do App Router, imports mais longos
- **Por que não:** Underscore funciona nativamente com Next.js

### 2. Pasta `/components` na raiz

- **Prós:** Convenção comum, fora do escopo de rotas
- **Contras:** Perde a co-localização com o código da aplicação
- **Por que não:** Preferência por manter tudo dentro de `/app`

### 3. Route Groups `(nome)` para tudo

- **Prós:** Funcionalidade nativa do Next.js
- **Contras:** Route groups são para organizar rotas, não código
- **Por que não:** Semanticamente incorreto para código de infraestrutura

### 4. Nenhuma convenção especial

- **Prós:** Simplicidade
- **Contras:** Next.js tentaria criar rotas para cada pasta
- **Por que não:** Causaria erros ou comportamentos inesperados

## Consequências

### Positivas

- Separação visual clara entre rotas e código de infraestrutura
- Next.js ignora automaticamente pastas com `_`
- Path aliases (`@/components`, etc.) tornam imports limpos
- Arquivos `index.js` centralizam exports de cada módulo
- Estrutura escalável e organizada
- Facilita onboarding de novos desenvolvedores

### Negativas / Limitações

- Convenção não é universal (outros frameworks não usam `_`)
- Pode parecer estranho para desenvolvedores de outros ecossistemas
- Path aliases precisam de configuração no jsconfig/tsconfig
- Se esquecer o `_`, pasta vira rota acidentalmente

### Quando Revisar

- Se Next.js mudar a convenção de pastas privadas
- Ao migrar para monorepo (pode precisar de `/packages`)
- Se a equipe preferir convenção diferente (ex: `/src`)
- Quando adicionar mais módulos e precisar reorganizar
