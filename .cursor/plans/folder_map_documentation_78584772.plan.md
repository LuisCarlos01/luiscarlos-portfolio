---
name: Folder Map Documentation
overview: Criar um arquivo simples docs/FOLDER-MAP.md contendo a estrutura de pastas do projeto com descricoes breves.
todos:
  - id: create-folder-map
    content: Criar arquivo docs/FOLDER-MAP.md com a estrutura de pastas do projeto
    status: completed
---

# Mapa de Pastas do Projeto

## Objetivo

Criar o arquivo `docs/FOLDER-MAP.md` com a estrutura de pastas completa do projeto, organizada de forma clara e com descricoes breves de cada pasta.

---

## Estrutura do Documento

O arquivo tera formato simples com:

1. **Arvore de pastas** usando blocos de codigo ASCII
2. **Descricoes breves** para as pastas principais
3. **Legenda** explicando as convencoes de nomenclatura

---

## Conteudo Principal

### Raiz do Projeto

```
/
├── app/                 # Codigo fonte (Next.js App Router)
├── docs/                # Documentacao
├── public/              # Assets estaticos
└── [configs]            # Arquivos de configuracao
```

### Pasta app/

```
app/
├── _components/         # Componentes reutilizaveis
├── _config/             # Configuracoes da aplicacao
├── _data/               # Dados estaticos
├── _fonts/              # Fontes locais
├── _hooks/              # Custom hooks
├── _layout/             # Componentes de layout
├── _lib/                # Bibliotecas e plugins
├── _providers/          # Context providers
├── _utils/              # Funcoes utilitarias
├── (in-progress)/       # Paginas em desenvolvimento
├── layout.jsx           # Layout raiz
├── page.jsx             # Home (/)
├── not-found.jsx        # 404
└── globals.css          # Estilos globais
```

### Pasta docs/

```
docs/
├── adr/                 # Architecture Decision Records
├── arquitetura/         # Documentacao de arquitetura
└── briefing/            # Briefing do projeto
```

---

## Arquivo de Destino

- **Caminho**: `docs/FOLDER-MAP.md`
- **Formato**: Markdown simples
- **Idioma**: Portugues
