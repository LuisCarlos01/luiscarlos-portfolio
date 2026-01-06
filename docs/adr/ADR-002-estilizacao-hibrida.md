# ADR-002 — Estilização Híbrida: Tailwind CSS + Styled Components

- **Autor:** Luis Carlos
- **Status:** Aceito (Herdado do projeto original)
- **Data:** Novembro 2024
- **Origem:** Decisão herdada do portfolio Dennis Snellenberg

## Contexto

O projeto precisa de uma estratégia de estilização que permita:

- Desenvolvimento rápido com classes utilitárias
- Componentes com estilos encapsulados
- Animações complexas com acesso a props dinâmicas
- Consistência visual em todo o projeto
- Boa experiência de desenvolvimento

A escolha de CSS é uma das decisões mais impactantes em um projeto frontend, afetando produtividade, manutenibilidade e performance.

## Decisão

Utilizar uma **abordagem híbrida** combinando:

1. **Tailwind CSS** para estilização utility-first (layout, espaçamento, tipografia)
2. **Styled Components** para componentes que precisam de estilos dinâmicos ou complexos

### Evidências no código:

- `tailwind.config.js`: Configuração do Tailwind com plugin customizado
- `app/_providers/styled-components/index.jsx`: Registry para SSR do Styled Components
- `app/_components/stack/center.styled.js`: Exemplo de componente styled
- `app/_components/common/button/magnetic/index.jsx`: Combinação de ambas abordagens

## Alternativas Consideradas

### 1. Apenas Tailwind CSS

- **Prós:** Simplicidade, bundle menor, sem runtime CSS-in-JS
- **Contras:** Difícil para estilos muito dinâmicos, classes longas
- **Por que não:** Algumas animações e efeitos precisam de acesso a props

### 2. Apenas Styled Components

- **Prós:** Estilos encapsulados, props dinâmicas, theming nativo
- **Contras:** Runtime JavaScript, bundle maior, menos produtivo para layouts simples
- **Por que não:** Tailwind é mais eficiente para a maioria dos casos

### 3. CSS Modules

- **Prós:** Zero runtime, escopos automáticos
- **Contras:** Menos dinâmico, arquivos separados, sem theming nativo
- **Por que não:** Styled Components oferece melhor DX para componentes dinâmicos

### 4. Emotion

- **Prós:** Similar ao Styled Components, menor bundle
- **Contras:** API ligeiramente diferente
- **Por que não:** Styled Components é mais popular e tem melhor documentação

## Consequências

### Positivas

- Desenvolvimento rápido com Tailwind para layouts
- Flexibilidade total com Styled Components para casos complexos
- Design tokens compartilhados via CSS Variables
- Boa integração com Framer Motion
- Theming centralizado funciona em ambos os sistemas

### Negativas / Limitações

- Duas bibliotecas de CSS aumentam o bundle
- Desenvolvedores precisam conhecer ambas as abordagens
- Possível inconsistência se não houver padrões claros
- Styled Components adiciona runtime JavaScript
- Configuração de SSR necessária para evitar flash de conteúdo sem estilo

### Quando Revisar

- Se o bundle size se tornar um problema crítico
- Quando Tailwind v4 trouxer melhorias significativas
- Se a equipe preferir uma abordagem unificada
- Se surgirem alternativas como Panda CSS ou StyleX com melhor DX
