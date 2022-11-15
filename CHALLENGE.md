# Desafio Dashboard

## Objetivo
- Conseguir replicar o layout do dashbaord em qualquer framework selecionado.

- O layout deve ser responsívo para 3 modelos de tela. Desktop, Tablet e Mobile.

- O layout é divido em 4 partes:
  1. Header + campo de search
  2. Analytics
  3. Companies
  4. Users

## Header + campo de search
[ X ] Ao clicar no icone de `User`, abrir um modal de tela cheia para (mock de um formulario de login e senha, sem precisar se preocupar com validações de input) 
[ X ] Ao clicar no icone de `Mensagem`, abrir um modal centralizado (mock com um quadrado no meio)
[ ] O header tem que descer junto com o scroll da página
[ X ] Quando estiver na visualização mobile, as opções do header deve se encontrar em um menu hamburgue
[ X ] Os botões dentro do campo search não precisa ser implementados. Mas o botão `Report` sim

## Analytics
[ X ] Não precisa implementar o botão com dropdown ao lado do título
[ X ] Não precisa implementar o gráfico do quadro `Productivity`, porém deve ter algum elemento visual no lugar
[ ] No layout Tablet, o `Heatmap` tem vai ter que ficar abaixo do `Base Metrics` e `Productivity`
[ ] No layout Mobile, um quadrado abaixo do outro

## Companies
[ X ] No layout Tablet, ter 2 linhas e 2 colunas
[ X ] No layout Mobile, um quadrado abaixo do outro

## Users
[ ] Na ultima coluna, onde se encontra os `...` ao clicar nele abrir um dropdown com uma lista de ações (pelo menos 3 opçoes aleatórias)
[ ] Ao clicar em um dos usuários, abrir um modal mostrando mais informações sobre o usuário (layout a sua imaginação)

## Fontes de estudo
- https://www.developerway.com/posts/react-component-as-prop-the-right-way