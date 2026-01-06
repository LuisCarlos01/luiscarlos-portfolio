# ADR-004 — Animações: Framer Motion + GSAP

- **Autor:** Luis Carlos
- **Status:** Aceito (Herdado do projeto original)
- **Data:** Novembro 2024
- **Origem:** Decisão herdada do portfolio Dennis Snellenberg

## Contexto

O portfolio é um projeto altamente visual que requer:

- Transições de página suaves
- Animações de entrada/saída de componentes
- Efeitos de scroll parallax
- Animações de cursor customizado
- Micro-interações responsivas ao mouse

Animações são essenciais para a experiência do usuário e diferenciação do portfolio.

## Decisão

Utilizar duas bibliotecas de animação com responsabilidades distintas:

1. **Framer Motion** (principal): Animações declarativas integradas ao React
2. **GSAP** (complementar): Animações imperativas de alto desempenho para casos específicos

### Evidências no código:

**Framer Motion (`app/_layout/transition/index.jsx`):**

```jsx
<AnimatePresence mode='wait'>
  {isLoading ? <Preloader /> : null}
</AnimatePresence>
```

**GSAP (`app/_hooks/use-follow-pointer.js`):**

```javascript
xMoveModal.current = gsap.quickTo(modal.current, 'left', {
  duration: 0.8,
  ease: 'power3',
});
```

### Divisão de Responsabilidades

| Caso de Uso                     | Biblioteca    | Motivo                      |
| ------------------------------- | ------------- | --------------------------- |
| Transições de página            | Framer Motion | AnimatePresence             |
| Animações de entrada            | Framer Motion | variants declarativos       |
| Scroll-triggered                | Framer Motion | useScroll, useTransform     |
| Cursor follow                   | GSAP          | quickTo é mais performático |
| Animações complexas de timeline | GSAP          | Controle granular           |

## Alternativas Consideradas

### 1. Apenas Framer Motion

- **Prós:** Uma única biblioteca, API consistente, boa integração React
- **Contras:** Menos performático para animações imperativas rápidas
- **Por que não:** GSAP é superior para efeitos de cursor que precisam de 60fps

### 2. Apenas GSAP

- **Prós:** Extremamente performático, controle total
- **Contras:** API imperativa não combina bem com React
- **Por que não:** Framer Motion oferece melhor DX para a maioria dos casos

### 3. React Spring

- **Prós:** Animações baseadas em física, natural
- **Contras:** API mais complexa, menos recursos que Framer Motion
- **Por que não:** Framer Motion é mais popular e tem melhor documentação

### 4. CSS Animations apenas

- **Prós:** Zero JavaScript, máxima performance
- **Contras:** Difícil de sincronizar com estado React, menos controle
- **Por que não:** Animações complexas requerem coordenação com JavaScript

## Consequências

### Positivas

- Melhor ferramenta para cada tipo de animação
- Framer Motion simplifica 90% dos casos de uso
- GSAP oferece performance máxima quando necessário
- AnimatePresence facilita transições de página
- Variants permitem animações reutilizáveis e organizadas

### Negativas / Limitações

- Duas bibliotecas aumentam o bundle size
- Desenvolvedores precisam conhecer ambas as APIs
- Possível confusão sobre quando usar cada uma
- GSAP tem licença específica para uso comercial (mas é gratuito)

### Quando Revisar

- Se o bundle size se tornar um problema crítico
- Quando Framer Motion melhorar performance de animações imperativas
- Se surgir uma biblioteca que unifique ambas as abordagens
- Ao adicionar animações 3D (considerar Three.js/React Three Fiber)
