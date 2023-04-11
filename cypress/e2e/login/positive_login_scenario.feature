#language: pt
Funcionalidade: Login cenário positivo

    Contexto: Acessar página e realizar login

    Cenario: Login com dados válidos
        Dado que o usuário esteja na página de login
        E que eu tenha um usuário
        Quando preencher o campo "usuário" com "seu_usuário"
        E preencher o campo "senha" com "sua_senha"
        E clicar no botão "Entrar"
        Então deverá ser redirecionado para a página inicial do sistema
        E deve ser exibida uma mensagem de boas-vindas com seu nome de usuário

    Cenario: Botão com ícone de olho para visualizar a senha
        Dado que o usuário esteja na página de login
        Quando preencher o campo "senha" com "sua_senha"
        E clicar no botão com ícone de olho para visualizar a senha
        Então deverá ver a "sua_senha" sendo exibida no campo "senha"
    
    Cenario: Botão com ícone de olho para ocultar a visualização da senha
        Dado que o usuário esteja na página de login
        Quando preencher o campo "senha" com "sua_senha"
        E clicar no botão com ícone de olho para visualizar a senha
        E clicar novamente no botão com ícone de olho para ocultar a senha
        Então ele não deverá ver a "sua_senha" sendo exibida no campo "senha"