# ADR-005 — Scroll Suave via Lenis

- **Autor:** Luis Carlos
- **Status:** Aceito (Herdado do projeto original)
- **Data:** Novembro 2024
- **Origem:** Decisão herdada do portfolio Dennis Snellenberg

## Contexto

O portfolio busca uma experiência premium que inclui:

- Scroll suave e fluido em toda a página
- Integração com animações baseadas em scroll
- Compatibilidade com Framer Motion
- Performance consistente em diferentes navegadores

O scroll nativo do navegador pode parecer "travado" em sites com muitas animações, prejudicando a experiência do usuário.

## Decisão

Utilizar **Lenis** (da Studio Freight) para implementar smooth scrolling em todo o site.

### Evidências no código:

**Hook `useLenis` (`app/_hooks/use-lenis.js`):**

```javascript
import Lenis from '@studio-freight/lenis';

export function useLenis() {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => cancelAnimationFrame(raf);
  }, []);
}
```

**Uso no Transition (`app/_layout/transition/index.jsx`):**

```javascript
useLenis();
```

## Alternativas Consideradas

### 1. CSS `scroll-behavior: smooth`

- **Prós:** Nativo, zero JavaScript, melhor acessibilidade
- **Contras:** Pouco controle, não funciona bem com animações complexas
- **Por que não:** Insuficiente para a experiência desejada

### 2. Locomotive Scroll

- **Prós:** Popular, muitos recursos, parallax integrado
- **Contras:** Bundle maior, mais complexo de configurar, conflitos com React
- **Por que não:** Lenis é mais leve e moderno

### 3. GSAP ScrollSmoother

- **Prós:** Integração perfeita com GSAP, muito poderoso
- **Contras:** Requer licença Club GreenSock (paga)
- **Por que não:** Lenis é gratuito e suficiente para as necessidades

### 4. Scroll nativo sem modificação

- **Prós:** Melhor acessibilidade, sem JavaScript adicional
- **Contras:** Experiência menos premium
- **Por que não:** Portfolio precisa de experiência diferenciada

## Consequências

### Positivas

- Scroll extremamente suave e agradável
- Leve (~3KB gzipped)
- Fácil integração com Framer Motion
- API simples e direta
- Mantido ativamente pela Studio Freight
- Funciona bem com touch devices

### Negativas / Limitações

- Modifica comportamento nativo do scroll (pode confundir alguns usuários)
- Pode afetar acessibilidade (scroll com teclado, leitores de tela)
- Pequeno overhead de JavaScript
- Conflitos possíveis com alguns elementos de scroll interno
- Precisa de cleanup adequado para evitar memory leaks

### Quando Revisar

- Se houver feedback negativo sobre a experiência de scroll
- Quando preocupações de acessibilidade forem levantadas
- Se o CSS `scroll-behavior` evoluir para oferecer mais controle
- Ao adicionar seções com scroll interno (ex: modais com overflow)
