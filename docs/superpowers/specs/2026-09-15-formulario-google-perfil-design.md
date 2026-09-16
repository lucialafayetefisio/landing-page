# Especificação — Formulário de briefing para o Perfil da Empresa no Google

## Objetivo

Criar um script em Google Apps Script que gere automaticamente um Google Forms para ser preenchido exclusivamente por Lúcia Lafayete. As respostas deverão reunir, em um só lugar, o contexto necessário para configurar de maneira profissional e fiel o Perfil da Empresa no Google (antigo Google Meu Negócio).

O formulário não será usado para coletar dados de pacientes. Seu propósito é documentar informações do negócio, decisões de posicionamento, disponibilidade, área de atendimento e materiais de comunicação.

## Entregáveis

1. Um arquivo Google Apps Script versionado no projeto.
2. Um guia curto de instalação e execução.
3. Ao ser executado, o script criará:
   - uma pasta no Google Drive para os materiais;
   - um Google Forms de briefing;
   - uma planilha vinculada às respostas;
   - registros no log com as URLs de edição, preenchimento e respostas.

## Público e contexto

O formulário será respondido somente por Lúcia Lafayete, fisioterapeuta autônoma com foco em Osteopatia. Ela atende adultos no Leblon e também realiza atendimentos domiciliares mediante agendamento pelo WhatsApp.

Como não existe sinalização permanente com o nome profissional no endereço do consultório, o perfil deverá ser planejado como empresa de área de atendimento, mantendo o endereço oculto. O formulário confirmará essa decisão e levantará apenas as áreas efetivamente atendidas.

## Abordagem escolhida

Será criado um único formulário completo, dividido em seções curtas. Essa abordagem reduz a dispersão das informações e permite que a resposta seja concluída em uma sessão ou retomada posteriormente pelo Google Forms.

Não serão criados formulários separados para cadastro, conteúdo e fotos. Também não será criado um formulário excessivamente curto, pois isso exigiria entrevistas complementares antes da configuração do perfil.

## Estrutura do formulário

### 1. Introdução e responsabilidade

- Explicação do objetivo do briefing.
- Alerta para não inserir dados pessoais ou clínicos de pacientes.
- Confirmação de que as respostas representam informações verdadeiras e atuais.
- E-mail da conta Google que será proprietária do perfil.
- Nome da pessoa responsável pela manutenção.

### 2. Identidade profissional

- Nome profissional utilizado publicamente.
- Nome que aparece em materiais reais, site e redes sociais.
- Número do CREFITO.
- Ano de início da atuação profissional.
- Formação principal e instituições de ensino.
- Especializações e qualificações que possam ser comprovadas.
- Forma de apresentação preferida, sem inserir palavras-chave artificiais no nome.

### 3. Contato e presença digital

- Telefone e WhatsApp principal.
- Confirmação de que o mesmo número pode ser exibido publicamente.
- Site oficial.
- Instagram profissional.
- E-mail público, caso exista.
- Domínio definitivo, caso já tenha sido adquirido.

Os campos de telefone e URL terão validação de formato quando suportada pelo serviço Google Forms.

### 4. Modelo de atendimento e localização

- Confirmação de atendimento exclusivamente mediante agendamento.
- Confirmação de que o endereço não possui sinalização permanente própria.
- Confirmação de que o endereço ficará oculto no perfil.
- Bairro-base da atividade.
- Lista das cidades, bairros ou CEPs realmente atendidos em domicílio.
- Limites ou condições de deslocamento.
- Orientação para não informar regiões em que o serviço não é prestado.

### 5. Horários

- Dias da semana em que há atendimento.
- Faixas de horário habituais.
- Diferenças entre consultório e domicílio.
- Forma correta de comunicar “somente com agendamento”.
- Períodos em que não há atendimento.

### 6. Serviços

- Seleção dos serviços atualmente oferecidos:
  - Osteopatia;
  - Fisioterapia;
  - Reabilitação funcional;
  - Pós-operatório;
  - Pilates individual;
  - Pilates em grupo;
  - Ondas de choque;
  - outros serviços comprovadamente oferecidos.
- Serviço principal a ser destacado.
- Descrição objetiva de cada serviço.
- Tipos de demanda atendidos, sem promessas de cura ou resultados garantidos.
- Serviços que não são oferecidos.
- Confirmação de que não atende crianças.

### 7. Público e posicionamento

- Faixas e perfis de público atendidos.
- Demandas mais frequentes.
- Perfil de paciente que mais se beneficia da abordagem, sem alegações absolutas.
- Diferenciais reais do atendimento individual.
- Como Lúcia gostaria de ser percebida.
- Termos ou promessas que não deseja usar.
- Prioridade entre visibilidade, contatos, agendamentos e reconhecimento local.

### 8. Jornada do paciente

- Como ocorre o primeiro contato.
- Informações solicitadas antes do agendamento.
- Como funciona a avaliação inicial.
- Como o atendimento é explicado ao novo paciente.
- Dúvidas frequentes recebidas por WhatsApp.
- Política de convênios, reembolso, nota fiscal e encaminhamento médico.

### 9. Conteúdo público

- Resumo profissional em primeira pessoa.
- Resumo profissional em terceira pessoa.
- História e motivação profissional.
- Mensagem principal que deve aparecer no perfil.
- Perguntas e respostas que podem ser publicadas.
- Temas educativos apropriados para futuras publicações.

### 10. Fotos e materiais

- Disponibilidade de foto profissional.
- Fotos reais do ambiente, acesso ao prédio e referências externas.
- Logo e identidade visual.
- Autorização para uso público dos materiais.
- Pendências de produção fotográfica.
- Orientação para não enviar imagens de pacientes sem consentimento específico e documentado.

### 11. Avaliações e reputação

- Existência de depoimentos reais já autorizados.
- Canais em que esses depoimentos foram publicados.
- Disponibilidade para solicitar avaliações após atendimentos.
- Responsável por responder às avaliações.
- Tom desejado nas respostas.
- Confirmação de que não haverá incentivo financeiro, troca ou pressão por avaliações positivas.

### 12. Verificação e manutenção

- Disponibilidade para realizar a verificação solicitada pelo Google.
- Acesso à conta Google proprietária.
- Disponibilidade de documentos e evidências legítimas do negócio, caso sejam solicitados.
- Frequência pretendida de atualização do perfil.
- Pessoa responsável por horários especiais, fotos, publicações e respostas.
- Campo final para observações e informações ainda não contempladas.

## Tipos de campo

- Resposta curta para dados objetivos.
- Parágrafo para contexto e textos profissionais.
- Múltipla escolha para decisões únicas.
- Caixas de seleção para serviços, públicos e materiais disponíveis.
- Grade ou escala apenas quando trouxer benefício claro; perguntas essenciais serão preferencialmente explícitas.
- Seções para reduzir o tamanho percebido e organizar o preenchimento.

## Validações

- Campos essenciais serão obrigatórios.
- URLs deverão começar com `http://` ou `https://`.
- Telefone deverá aceitar o formato brasileiro com DDD.
- E-mail deverá usar validação própria do Google Forms.
- Textos de orientação deverão impedir a inclusão de dados clínicos identificáveis.
- Respostas relacionadas a formação, resultados e serviços deverão reforçar que somente informações verdadeiras e comprováveis podem ser fornecidas.

## Organização no Google Drive

O script procurará uma pasta com nome configurável, usando como padrão `Perfil da Empresa — Lúcia Lafayete`. Se a pasta não existir, será criada. O formulário e a planilha de respostas serão movidos para essa pasta.

O script criará novos arquivos a cada execução e deixará isso explícito no log, evitando editar ou excluir documentos existentes de forma inesperada.

## Configuração técnica

- Plataforma: Google Apps Script.
- Serviços nativos: `FormApp`, `SpreadsheetApp`, `DriveApp` e `Logger`.
- Sem bibliotecas externas.
- Constantes no topo do arquivo para título do formulário, nome da pasta e mensagens.
- Funções pequenas e separadas para criação da pasta, formulário, seções, validações e planilha.
- Função principal única, com nome claro, para execução manual.

## Fluxo de execução

1. A pessoa cola o script em um projeto em `script.google.com`.
2. Executa a função principal.
3. Autoriza o acesso ao Forms, Planilhas e Drive.
4. O script cria ou encontra a pasta de destino.
5. Cria o formulário e adiciona as seções e perguntas.
6. Cria a planilha de respostas e a vincula ao formulário.
7. Move os arquivos para a pasta.
8. Exibe no log os links de edição, preenchimento e planilha.

## Tratamento de erros

- A função principal usará tratamento de exceções e registrará uma mensagem clara no log.
- Falhas na movimentação dos arquivos não deverão apagar o formulário ou a planilha já criados.
- O guia explicará como localizar os arquivos no Drive caso a execução seja interrompida.
- O script não excluirá nem substituirá formulários anteriores.

## Critérios de qualidade

- Linguagem em português do Brasil, clara e profissional.
- Perguntas específicas para a realidade de Lúcia, sem aparência de formulário genérico.
- Nenhuma pergunta solicita prontuários, diagnósticos identificáveis ou dados pessoais de pacientes.
- Nenhuma pergunta estimula promessas terapêuticas, palavras-chave artificiais ou informações não comprovadas.
- O formulário deve poder ser preenchido sem conhecimento técnico sobre SEO ou Perfil da Empresa.

## Verificação

Antes da entrega, o script deverá ser revisado para confirmar:

1. Sintaxe compatível com Google Apps Script.
2. Criação de todas as seções previstas.
3. Aplicação das validações apenas a tipos de campo compatíveis.
4. Vinculação correta da planilha de respostas.
5. Registro das três URLs necessárias.
6. Ausência de credenciais, IDs privados ou dados inventados no código.
7. Instruções suficientes para execução por uma pessoa não técnica.

## Fora de escopo

- Criar ou editar automaticamente o Perfil da Empresa no Google.
- Solicitar dados ou avaliações diretamente a pacientes.
- Fazer upload automático de fotos.
- Publicar respostas do formulário em serviços externos.
- Armazenar credenciais no código.
- Prometer aprovação, verificação ou posicionamento no Google.
