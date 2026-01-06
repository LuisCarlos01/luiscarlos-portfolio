# ADR-012 — Package Manager: pnpm

- **Autor:** Luis Carlos
- **Status:** Aceito (Herdado do projeto original)
- **Data:** Novembro 2024
- **Origem:** Decisão herdada do portfolio Dennis Snellenberg

## Contexto

O projeto precisa de um gerenciador de pacotes que ofereça:
- Instalação rápida de dependências
- Uso eficiente de espaço em disco
- Lock file confiável
- Compatibilidade com npm registry

## Decisão

Utilizar **pnpm** como gerenciador de pacotes do projeto.

### Evidências no código:

**Lock file:** `pnpm-lock.yaml`

**Dependências (`package.json`):**
```json
{
  "dependencies": {
    "next": "14.0.4",
    "react": "^18",
    "framer-motion": "^10.16.16",
    // ...
  },
  "devDependencies": {
    "eslint": "^8",
    "prettier": "^3.1.1",
    // ...
  }
}
```

## Alternativas Consideradas

### 1. npm
- **Prós:** Vem com Node.js, mais familiar, sem instalação extra
- **Contras:** Mais lento, usa mais espaço em disco, hoisting problemático
- **Por que não:** pnpm é significativamente mais eficiente

### 2. Yarn (Classic v1)
- **Prós:** Mais rápido que npm, workspaces
- **Contras:** Desenvolvimento desacelerado, yarn v1 está em modo de manutenção
- **Por que não:** pnpm é mais moderno e eficiente

### 3. Yarn Berry (v2+)
- **Prós:** PnP elimina node_modules, muito rápido
- **Contras:** Plug'n'Play causa incompatibilidades, setup complexo
- **Por que não:** Muitos pacotes não são compatíveis com PnP

### 4. Bun
- **Prós:** Extremamente rápido, runtime + bundler + package manager
- **Contras:** Ainda em desenvolvimento, menos maduro
- **Por que não:** pnpm é mais estável e comprovado em produção

## Consequências

### Positivas
- Instalação ~2x mais rápida que npm
- Economia de disco via hard links (pacotes compartilhados)
- Strict mode previne "phantom dependencies"
- node_modules não-flat é mais correto semanticamente
- Excelente suporte a monorepos (se necessário no futuro)
- Compatible com npm registry (zero migração de pacotes)

### Negativas / Limitações
- Requer instalação separada (`npm install -g pnpm`)
- Alguns pacotes podem ter problemas com node_modules não-flat
- Menos familiar para desenvolvedores acostumados com npm/yarn
- CI/CD precisa instalar pnpm antes de usar
- Alguns scripts assumem estrutura de node_modules do npm

### Quando Revisar
- Se Bun se tornar estável e adotado amplamente
- Ao migrar para monorepo (pnpm workspaces são excelentes)
- Se encontrar incompatibilidades frequentes com pacotes
- Quando Node.js tiver corepack habilitado por padrão

---

## Comandos Úteis

```bash
# Instalar dependências
pnpm install

# Adicionar dependência
pnpm add <pacote>

# Adicionar dev dependency
pnpm add -D <pacote>

# Rodar script
pnpm run <script>
# ou simplesmente
pnpm <script>

# Atualizar dependências
pnpm update

# Verificar dependências desatualizadas
pnpm outdated
```
