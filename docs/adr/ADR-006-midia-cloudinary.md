# ADR-006 — Gerenciamento de Mídia via Cloudinary

- **Autor:** Luis Carlos
- **Status:** Aceito (Herdado do projeto original)
- **Data:** Novembro 2024
- **Origem:** Decisão herdada do portfolio Dennis Snellenberg

## Contexto

O portfolio exibe muitas imagens e vídeos que precisam de:

- Otimização automática de formato e qualidade
- Responsividade (diferentes tamanhos para diferentes telas)
- Carregamento rápido (CDN global)
- Suporte a formatos modernos (WebP, AVIF)
- Gerenciamento centralizado de assets

Imagens e vídeos são o conteúdo principal de um portfolio visual.

## Decisão

Utilizar **Cloudinary** via **next-cloudinary** para gerenciamento e otimização de mídia.

### Evidências no código:

**Package (`package.json`):**

```json
"next-cloudinary": "^5.13.0"
```

**Componente de Imagem (`app/_layout/header/index.jsx`):**

```jsx
<CldImage
  src='Dennis-Portfolio/images/lapetmmek4fymz68m4u8'
  className='object-cover'
  fill={true}
  sizes='100vw'
  alt='Dennis Snellenberg Personal Picture'
/>
```

**Componente de Vídeo (`app/_layout/project/slider.jsx`):**

```jsx
<CldVideoPlayer
  src={source}
  loop={true}
  controls={false}
  muted={true}
  autoPlay='always'
/>
```

**Dados de Mídia (`app/_data/project-options.js`):**

```javascript
{
  type: 'image',
  source: 'Dennis-Portfolio/images/rpmf9egswyd8563mxe9t',
}
```

## Alternativas Consideradas

### 1. Next.js Image Optimization (local)

- **Prós:** Incluído no Next.js, sem dependência externa
- **Contras:** Apenas imagens, sem vídeos, precisa hospedar arquivos
- **Por que não:** Cloudinary oferece muito mais recursos

### 2. AWS S3 + CloudFront

- **Prós:** Controle total, preços competitivos para alto volume
- **Contras:** Configuração complexa, sem otimização automática
- **Por que não:** Cloudinary é mais simples para portfolios

### 3. Imgix

- **Prós:** Excelente para imagens, API rica
- **Contras:** Não processa vídeos, menos integrações React
- **Por que não:** Cloudinary suporta imagens e vídeos

### 4. Arquivos locais no `/public`

- **Prós:** Simples, sem dependência externa
- **Contras:** Sem otimização, aumenta tamanho do deploy, sem CDN
- **Por que não:** Portfolio precisa de performance profissional

## Consequências

### Positivas

- Otimização automática de imagens (formato, qualidade, tamanho)
- CDN global para entrega rápida
- Suporte a vídeos com player customizado
- Transformações on-the-fly (crop, resize, efeitos)
- Componentes React prontos (CldImage, CldVideoPlayer)
- Lazy loading integrado
- Formatos modernos (WebP, AVIF) automaticamente

### Negativas / Limitações

- Dependência de serviço externo
- Custos podem escalar com tráfego alto
- Assets ficam fora do controle de versão
- Latência adicional para transformações não cacheadas
- Vendor lock-in nos IDs das imagens

### Quando Revisar

- Ao migrar assets para conta própria do Cloudinary
- Se custos se tornarem proibitivos
- Quando Next.js Image melhorar suporte a vídeos
- Ao considerar self-hosting para controle total
