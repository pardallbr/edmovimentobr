# EdMovimento — Especificação viva

## O que o app faz

Landing page pública em português para o trabalho de psicomotricidade infantil e juvenil de Vinicius Corrêa Tafarelo, com foco em famílias de Jundiaí e região.

## Conteúdo e modelo de dados

- Não há modelo de negócio persistido nesta versão.
- Conteúdo institucional, formação, abordagem, FAQ e checklist de observação ficam no frontend.
- O checklist é local ao navegador e nunca envia dados para o backend.
- O contato usa o link público `wa.me` para o número +55 (11) 99541-5005, com mensagem pré-preenchida e revisão manual no WhatsApp.
- As imagens principais usam as duas fotos autorais publicadas no site Wix de referência.
- A área de histórias reais está preparada, mas o site de referência não publica depoimentos de famílias; nenhum relato foi inventado.
- A comunicação deve diferenciar psicomotricidade clínica — técnica, avaliativa e individualizada — de recursos lúdicos que podem ser usados quando forem adequados ao objetivo terapêutico.
- A formação em Educação Física é de 2010; a atuação com psicomotricidade deve ser apresentada como iniciada em 2019.
- A seção de psicomotricidade clínica explica avaliação e devolutiva, plano individual baseado em necessidades/metas e orientação técnica para a família.
- O destaque de credencial na seção Sobre usa “Especialista em Psicomotricidade”; ABA permanece descrito na formação e no conteúdo clínico.
- O contato exibe um retrato editorial do perfil público no Google (nota 5,0 e 76 avaliações) e um link externo para perfil, avaliações e rotas, sem Maps API.

## Fluxos principais

1. Visitante conhece a proposta no hero e pode abrir o WhatsApp.
2. Visitante navega por Sobre, Especialidades, Abordagem e Dúvidas.
3. Visitante seleciona sinais no checklist; o CTA personaliza a mensagem do WhatsApp.
4. Visitante usa o CTA final ou o botão flutuante para iniciar uma conversa.
5. Visitante consulta Jundiaí e região e confirma pelo WhatsApp o local e as orientações antes de ir.
6. Visitante entende as etapas da avaliação clínica e pode iniciar conversa específica pelo WhatsApp.
7. Visitante abre o perfil público no Google para consultar avaliações e rotas.

## Auth e integrações

- Não existe autenticação, login ou área restrita.
- WhatsApp é uma integração frontend-only via `https://wa.me/5511995415005`.
- O backend continua com o endpoint de status do template para disponibilidade técnica; a landing page não depende dele para renderizar.