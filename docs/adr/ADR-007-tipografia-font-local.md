# ADR-007 — Tipografia: Font Local Customizada

- **Autor:** Luis Carlos
- **Status:** Aceito (Herdado do projeto original)
- **Data:** Novembro 2024
- **Origem:** Decisão herdada do portfolio Dennis Snellenberg

## Contexto

A tipografia é fundamental para a identidade visual do portfolio. O projeto precisa de:

- Uma fonte customizada que transmita profissionalismo e modernidade
- Carregamento otimizado para evitar FOIT (Flash of Invisible Text)
- Consistência entre diferentes sistemas operacionais
- Performance sem dependência de serviços externos

## Decisão

Utilizar a fonte **Neue Montreal** hospedada localmente via **next/font/local**.

### Evidências no código:

**Configuração da Fonte (`app/_fonts/neue-montreal/index.js`):**

```javascript
import localFont from 'next/font/local';

export const neue_montreal = localFont({
  src: './regular/index.woff2',
  weight: 'normal',
  style: 'normal',
  variable: '--font-neue-montreal',
  display: 'swap',
});
```

**Uso no Layout (`app/layout.jsx`):**

```jsx
<html lang='en' dir='ltr' className={neue_montreal.variable}>
  <body className={neue_montreal.className}>
```

**CSS Variable no Tailwind (`app/_lib/plugins/tailwind.js`):**

```javascript
fontFamily: {
  neue_montreal: ['var(--font-neue-montreal)'],
},
```

**Arquivos da Fonte:**

```
app/_fonts/neue-montreal/regular/
  ├── index.eot
  ├── index.ttf
  ├── index.woff
  └── index.woff2
```

## Alternativas Consideradas

### 1. Google Fonts

- **Prós:** Fácil de usar, cache compartilhado entre sites
- **Contras:** Dependência externa, GDPR concerns, fonte limitada ao catálogo
- **Por que não:** Neue Montreal não está no Google Fonts, e local é mais rápido

### 2. Adobe Fonts (Typekit)

- **Prós:** Fontes premium, boa qualidade
- **Contras:** Requer assinatura, dependência externa, loading extra
- **Por que não:** Fonte local elimina dependências

### 3. System Fonts Stack

- **Prós:** Zero download, máxima performance
- **Contras:** Aparência inconsistente entre sistemas, sem identidade única
- **Por que não:** Portfolio precisa de identidade visual forte

### 4. next/font/google

- **Prós:** Otimizado pelo Next.js, cache do Google
- **Contras:** Limitado ao catálogo Google Fonts
- **Por que não:** A fonte escolhida não está disponível

## Consequências

### Positivas

- Fonte carrega do mesmo domínio (sem CORS, sem DNS lookup extra)
- `display: swap` evita texto invisível durante carregamento
- CSS Variable permite uso em Tailwind e Styled Components
- Formato WOFF2 é o mais otimizado (menor tamanho)
- Controle total sobre a fonte (sem dependência externa)
- Next.js automaticamente otimiza o carregamento

### Negativas / Limitações

- Apenas um peso (normal) está incluído - pode limitar variações tipográficas
- Fonte precisa ser licenciada corretamente para uso
- Aumenta o tamanho do bundle inicial
- Múltiplos formatos (eot, ttf, woff, woff2) ocupam espaço no repositório

### Quando Revisar

- Ao adicionar mais pesos (bold, light) ou estilos (italic)
- Se a fonte precisar ser substituída por razões de licença
- Ao implementar Variable Fonts para mais flexibilidade
- Se performance de carregamento inicial for um problema
