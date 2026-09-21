# Simplificação dos parágrafos de apoio

## Objetivo

Simplificar somente os pequenos textos em elementos `<p>` usados como apoio logo abaixo dos títulos das seções.

## Alterações

- Serviços:
  - Atual: “Recursos terapêuticos definidos a partir de uma avaliação individual. O trabalho é focado na investigação da causa raiz da dor e na restauração do movimento e da funcionalidade.”
  - Novo: “Atendimento individual para cuidar da dor e recuperar movimentos.”

- Depoimentos:
  - Atual: “Veja como o atendimento da Dra. Lúcia tem ajudado pessoas a recuperarem qualidade de vida.”
  - Novo: “Relatos de quem já foi atendido.”

- Onde atendo:
  - Atual: “Atendimento no Leblon, exclusivamente com hora marcada.”
  - Novo: “Atendimento com hora marcada no Leblon.”

- Pré-agendamento:
  - Atual: “Escolha o que você procura e abra direto o WhatsApp com a mensagem pronta. Sem cadastro, sem espera.”
  - Novo: “Escolha o serviço e fale pelo WhatsApp.”

- Contato final:
  - Atual: “Agendamento exclusivo pelo WhatsApp — sem formulários, sem espera. Fale diretamente comigo.”
  - Novo: “Agende diretamente pelo WhatsApp.”

## Conteúdo preservado

Não serão alterados:

- descrições individuais dos serviços;
- texto da seção “Sobre”;
- etapas de “Como funciona”;
- depoimentos;
- respostas do FAQ;
- textos internos dos cards;
- rodapé, metadados e SEO;
- títulos, botões e links.

O parágrafo “Dúvidas comuns sobre o atendimento.” já é curto e será mantido.

## Escopo técnico

A alteração será limitada aos cinco parágrafos de apoio em `app/page.tsx`. Não haverá mudança estrutural ou visual.

## Validação

- Conferir os cinco novos textos na página.
- Executar ESLint e o build de produção.
