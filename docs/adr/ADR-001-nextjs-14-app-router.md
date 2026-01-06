# ADR-001 — Next.js 14 com App Router

- **Autor:** Luis Carlos
- **Status:** Aceito (Herdado do projeto original)
- **Data:** Novembro 2024
- **Origem:** Decisão herdada do portfolio Dennis Snellenberg

## Contexto

O projeto precisa de um framework React que ofereça:

- Renderização híbrida (SSR, SSG, ISR)
- Roteamento baseado em arquivos
- Otimizações de performance automáticas
- Suporte a Server Components
- Boa experiência de desenvolvimento

O Next.js é o framework React mais popular para aplicações em produção, oferecendo duas arquiteturas de roteamento: Pages Router (legado) e App Router (moderno).

## Decisão

Utilizar **Next.js 14** com o **App Router** (pasta `/app`) como arquitetura de roteamento.

### Evidências no código:

- `package.json`: `"next": "14.0.4"`
- Estrutura de pastas usando `/app` em vez de `/pages`
- Uso de `layout.jsx` para layouts compartilhados
- Uso de `page.jsx` para definir rotas
- Metadata exportada via `export const metadata`

## Alternativas Consideradas

### 1. Next.js com Pages Router

- **Prós:** Mais maduro, maior quantidade de exemplos disponíveis
- **Contras:** Não suporta Server Components nativamente, menos flexibilidade em layouts
- **Por que não:** O App Router é o futuro do Next.js e oferece melhor arquitetura

### 2. Vite + React Router

- **Prós:** Build mais rápido, mais leve
- **Contras:** Sem SSR nativo, precisa configurar tudo manualmente
- **Por que não:** Portfolio precisa de SEO e performance de SSR

### 3. Remix

- **Prós:** Excelente data loading, nested routes nativo
- **Contras:** Ecossistema menor, menos integrações prontas
- **Por que não:** Next.js tem melhor suporte para deploy na Vercel e mais recursos da comunidade

### 4. Astro

- **Prós:** Excelente para sites estáticos, zero JS por padrão
- **Contras:** Menos adequado para interatividade complexa
- **Por que não:** Portfolio tem muitas animações que requerem hidratação completa

## Consequências

### Positivas

- Server Components reduzem o bundle JavaScript enviado ao cliente
- Streaming e Suspense melhoram a experiência de carregamento
- Layouts compartilhados simplificam a estrutura do código
- Metadata API facilita configuração de SEO
- Deploy otimizado na Vercel

### Negativas / Limitações

- App Router ainda está evoluindo, algumas APIs podem mudar
- Alguns pacotes da comunidade ainda não são totalmente compatíveis
- Curva de aprendizado para quem vem do Pages Router
- Debugging pode ser mais complexo com Server Components

### Quando Revisar

- Quando Next.js 15+ trouxer mudanças significativas na API
- Se o projeto precisar de funcionalidades não suportadas pelo App Router
- Se houver problemas de performance específicos do App Router
