# Projeto_BugBank
O projeto de automação deste repositório toma como base o site "https://bugbank.netlify.app/", utilizando a ferramenta de teste automatizado Cypress.

## Instalação

Para utilizar este projeto, é necessário ter o Node.js e o gerenciador de pacotes npm instalados em seu computador. Após a instalação, basta clonar este repositório e instalar as dependências utilizando o seguinte comando:
- `npm install`

## Configuração

Antes de executar os testes, é necessário configurar os arquivos cypress.config.js e plugins/index.js com as configurações necessárias para atender a necessidade do cypress entender o BDD tipo de teste adotado, basta navegar pelos arquivos mencionados para visualizar as configurações.

Importante que antes de executar estas configurações é necessário instalar todas as depedências, procedimento descrito em "Instalação".

## Execução dos testes

Para executar os testes, basta utilizar o comando:
`npx cypress open`


## Geração de reports
Este projeto faz uso da lib mochawesome para gerar reports das automações, gerando informações úteis para manipulação e controle dos testes auxiliando principalmente em cenário de regressão.

Para executar o scrip de report basta utilizar o comando:
`npx cypress run`

Este comando gerará um .HTML no caminho cypress/reports/mochawesome/assets e também serão gerados vídeos das execuções no caminho cypress/videos.
