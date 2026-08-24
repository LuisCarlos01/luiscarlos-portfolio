# Session handoff

Última atualização: 2026-08-24

## Estado atual

- A sessão `/work` foi aproximada da referência `dennissnellenberg.com/work`.
- Implementados hero, filtros `All`, `Design` e `Development`, alternância lista/grid, metadados de localização/serviços/ano e preview flutuante com cursor `View`.
- O preview do `/work` usa painel `4:3`, maior e `object-contain` para evitar cortes.
- A troca entre thumbnails agora anima verticalmente: avançando, a próxima imagem entra de baixo para cima; voltando, entra de cima para baixo.
- A transição de páginas exibe o nome da rota (`Work`, `About`, `Contact`) e mantém saudações na home.
- STL Valley está com ano `2025`.
- O script `dev` usa a porta `4000`.

## Verificação

- `npm run lint` passou com dois avisos antigos do projeto.
- `npm run build` passou após encerrar servidores locais concorrentes.

## Próximo passo

- Ainda não foi criado commit nem executado push.
- Commit sugerido: `feat(work): align portfolio showcase with reference`.
- Branch atual: `main`; remoto principal: `origin`.
- Não incluir `.pnpm-store/` nem `.serena/`.
- O commit e o push aguardam confirmação explícita.
