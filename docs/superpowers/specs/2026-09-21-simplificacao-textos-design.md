# Simplificação dos textos de apoio

## Objetivo

Deixar a página mais rápida de ler, com frases curtas, naturais e informativas. A revisão não deverá criar promessas de resultado nem apresentar uma formação profissional como concluída.

## Direção editorial

- Uma frase curta para introduzir cada seção.
- Descrições de serviços com uma ideia principal.
- Linguagem direta, sem repetições como “sem formulários, sem espera”.
- Depoimentos, endereço, CREFITO e respostas do FAQ permanecem completos.
- Osteopatia permanece disponível na lista de serviços.
- A qualificação profissional será apresentada como “em processo de formação em Osteopatia”.

## Textos principais

### Serviços

- Introdução: “Atendimento individual para cuidar da dor e recuperar movimentos.”
- Osteopatia: “Abordagem global voltada ao cuidado da dor e do movimento.”
- Fisioterapia: “Cuidado individual para dor, reabilitação e recuperação funcional.”
- Pilates: “Prática individual ou em grupo, adaptada aos seus objetivos.”
- Ondas de Choque: “Recurso para o cuidado de tendões, fáscias e calcificações.”

### Sobre

O texto será reduzido para três ideias:

1. “Sou fisioterapeuta e estou em processo de formação em Osteopatia.”
2. “Meu atendimento é individual e considera sua história, suas necessidades e seus objetivos.”
3. “Trabalho com Fisioterapia, Osteopatia, reabilitação pós-operatória, Dry Needling e Recovery.”

A frase de destaque será: “Cuidado individual em cada etapa do tratamento.”

### Como funciona

- WhatsApp: “Entre em contato diretamente.”
- Avaliação: “Conversamos sobre seu histórico e suas necessidades.”
- Plano: “Definimos um cuidado individual para você.”

### Demais seções

- Depoimentos: “Relatos de quem já foi atendido.”
- Localização: “Atendimento com hora marcada no Leblon.”
- Domicílio: “Disponível sob consulta, conforme a região e a agenda.”
- Pré-agendamento: “Escolha o serviço e fale pelo WhatsApp.”
- Observação da mensagem: “Você pode editar a mensagem antes de enviar.”
- Contato final: “Agende diretamente pelo WhatsApp.”
- Rodapé: “Fisioterapeuta em processo de formação em Osteopatia. Atendimento no Leblon.”

## Dados profissionais e SEO

O conteúdo estruturado não deverá indicar formação concluída:

- remover `Osteopathic` de `medicalSpecialty`;
- remover a relação `alumniOf` com a Escola de Osteopatia de Madrid;
- adicionar ao perfil da profissional a descrição “Fisioterapeuta em processo de formação em Osteopatia”.

Títulos e listas que apresentam Osteopatia como serviço poderão permanecer, pois não descrevem a qualificação como concluída.

## Escopo técnico

As alterações serão feitas em `app/page.tsx` e `app/layout.tsx`. Estrutura, componentes, links, depoimentos e comportamento da interface não serão modificados.

## Validação

- Conferir que não restaram as expressões “especializada em Osteopatia” ou “com formação em Osteopatia”.
- Executar ESLint e o build de produção.
- Revisar a leitura das seções em desktop e mobile.
