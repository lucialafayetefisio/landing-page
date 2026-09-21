# Card de endereço clicável

## Objetivo

Permitir que o visitante abra facilmente a localização do consultório a partir do card de endereço da seção “Pronto para agendar?”.

## Comportamento

- O card inteiro será um link acessível.
- O destino será o Google Maps com o endereço `Av. Ataulfo de Paiva, 1175, sala 205, Leblon, Rio de Janeiro`.
- O mapa será aberto em uma nova aba.
- O link terá rótulo acessível indicando que abre a localização do consultório no Google Maps.

## Aparência

O card manterá o conteúdo e a aparência atuais. Serão adicionados os mesmos sinais de interação usados nos cards vizinhos: mudança sutil de sombra e borda ao passar o mouse, além de resposta visual ao pressionar.

## Escopo

A alteração será limitada ao card de endereço em `app/page.tsx`. O mapa incorporado, os cards de WhatsApp e Instagram e os demais links não serão modificados.

## Validação

- Executar ESLint e o build de produção.
- Confirmar semântica de link e destino do Google Maps.
- Conferir que o card mantém alinhamento visual com os cards vizinhos.
