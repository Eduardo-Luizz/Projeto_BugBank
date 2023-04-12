#language: pt
Funcionalidade: Login cenário negativo

    Contexto: Acessar página e realizar login

        Cenario: Login com dados inválidos
            Dado que o usuário esteja na página de login
            Quando preencher o campo "usuário" com "usuário_inválido"
            E preencher o campo "senha" com "senha_inválida"
            E clicar no botão "Entrar"
            Então deve ser exibido um modal e uma mensagem de erro informando que as credenciais de login são inválidas

        Cenario: Campo obrigatório de login
            Dado que o usuário esteja na página de login 
	        Quando ele clicar no botão "Entrar" sem preencher o campo "usuário" ou o campo "senha" 
	        Então ele deverá ver uma mensagem abaixo do campo informando que ambos os campos são obrigatórios 
	        E não deverá ser redirecionado para a página inicial do sistema
        