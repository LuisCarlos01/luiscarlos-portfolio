## 📋 Tipo de Mudança

<!-- Selecione o tipo de mudança marcando com 'x' -->

- [ ] 🐛 Bug fix (correção de bug)
- [ ] ✨ Nova feature (nova funcionalidade)
- [ ] 💥 Breaking change (mudança que quebra compatibilidade)
- [ ] 📚 Documentação (apenas mudanças na documentação)
- [ ] 🎨 Estilo (formatação, CSS, UI)
- [ ] ♻️ Refatoração (melhoria de código sem alterar funcionalidade)
- [ ] ⚡ Performance (melhoria de performance)
- [ ] 🔧 Chore (manutenção, dependências, configuração)

## 📝 Descrição

<!-- Forneça um resumo claro e conciso das mudanças -->

## 🎯 Motivação e Contexto

<!-- Por que essa mudança é necessária? Que problema ela resolve? -->
<!-- Se ela fecha uma issue, adicione: Closes #123 -->

## 🧪 Como Testar

<!-- Descreva os passos para testar as mudanças -->

1. Clone esta branch: `git checkout <branch-name>`
2. Instale as dependências: `pnpm install`
3. Execute o projeto: `pnpm dev`
4.
5.

## 📸 Screenshots / GIFs

<!-- Se aplicável, adicione screenshots ou GIFs demonstrando as mudanças -->
<!-- Antes e depois são especialmente úteis para mudanças visuais -->

<details>
<summary>Ver screenshots</summary>

<!-- Cole suas imagens aqui -->

</details>

## ✅ Checklist

<!-- Marque com 'x' os itens completados -->

### Code Quality

- [ ] O código segue o style guide do projeto
- [ ] Comentei código complexo quando necessário
- [ ] Removi console.logs e código comentado desnecessário
- [ ] As mudanças não geram novos warnings

### Testing

- [ ] Testei localmente em desenvolvimento (`pnpm dev`)
- [ ] Build de produção passa sem erros (`pnpm run build`)
- [ ] Testei em diferentes navegadores (Chrome, Firefox, Safari)
- [ ] Testei responsividade (mobile, tablet, desktop)
- [ ] Testei acessibilidade básica (navegação por teclado, contraste)

### Documentation

- [ ] Atualizei a documentação relevante (README, docs, etc.)
- [ ] Comentei funções/componentes complexos
- [ ] Atualizei JSDoc se necessário

### Git

- [ ] Meu código segue Conventional Commits (feat:, fix:, docs:, etc.)
- [ ] Fiz rebase com a branch base (main/develop) se necessário
- [ ] Resolvi todos os conflitos

### Performance & Best Practices

- [ ] Não introduzi problemas de performance
- [ ] Otimizei imagens se adicionei novas
- [ ] Verifiquei que não há memory leaks
- [ ] Usei lazy loading quando apropriado

## 🔗 Issues Relacionadas

<!-- Liste as issues relacionadas -->

- Closes #
- Related to #
- Fixes #

## 📦 Mudanças em Dependências

<!-- Se você adicionou, removeu ou atualizou dependências, liste-as aqui -->

<details>
<summary>Ver mudanças em dependências</summary>

```diff
<!-- Cole aqui as mudanças no package.json -->
```

</details>

## ⚠️ Breaking Changes

<!-- Se houver breaking changes, descreva-as aqui e como migrar -->

<details>
<summary>Ver breaking changes</summary>

**Nenhuma breaking change** / **Descreva aqui se houver**

</details>

## 📋 Notas Adicionais

<!-- Qualquer informação adicional que os revisores devem saber -->

---

## 👀 Para os Revisores

<!-- Orientações específicas para a revisão deste PR -->

**Pontos de atenção:**

-
-

**Áreas que precisam de revisão especial:**

-
-

---

**Checklist do Revisor:**

- [ ] O código está limpo e bem estruturado
- [ ] A funcionalidade funciona como esperado
- [ ] Não há problemas óbvios de performance
- [ ] A documentação está adequada
- [ ] Aprovado para merge
