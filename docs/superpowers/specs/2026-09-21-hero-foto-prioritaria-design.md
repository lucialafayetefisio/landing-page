# Hero com fotografia prioritária

## Objetivo

Dar mais destaque à fotografia inicial da Dra. Lúcia Lafayete, reduzindo a quantidade de texto sobreposto sem remover os caminhos principais de conversão.

## Conteúdo do hero

O hero exibirá somente:

- o título “Dra. Lúcia Lafayete”;
- o texto “Consultório no Leblon, Rio de Janeiro.”;
- os botões “Agendar” e “Ver serviços”.

Serão removidos do hero:

- “Fisioterapia · Osteopatia · Pilates”;
- o trecho “Fisioterapeuta especializada em Osteopatia.”;
- o selo “Agendamento exclusivo pelo WhatsApp”.

## Tratamento visual

A fotografia continuará preenchendo o hero. Os overlays teal serão suavizados no desktop e no mobile para tornar a imagem mais visível, mantendo contraste suficiente atrás do nome, da localização e dos botões. A posição geral do conteúdo e o comportamento responsivo serão preservados.

## Escopo técnico

A alteração será limitada ao hero em `app/page.tsx`. Links, destinos dos botões, navegação, demais seções, SEO e dados estruturados não serão modificados.

## Validação

- Executar ESLint e o build de produção.
- Conferir se o hero mantém leitura adequada e se a foto ganhou destaque.
- Confirmar que os dois botões continuam funcionais e responsivos.
