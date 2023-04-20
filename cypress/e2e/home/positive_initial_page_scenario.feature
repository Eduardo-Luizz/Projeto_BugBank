#language: pt
Funcionalidade: Página inicial cenário positivo

    Contexto: Acessar página e validar informações

    Cenario: Opções disponíveis na tela inicials
        Dado que o usuário efetuou login na aplicação
	    Quando o usuário visualiza a tela inicial
	    Então o usuário deve visualizar as seguintes opções: "Transferência", "Pagamentos", "Extrato" e "Saque"
    
    Cenario: Saldo em conta exibido no topo da tela
        Dado que o usuário efetuou login na aplicação
        Quando o usuário visualiza a tela inicial
        Então o usuário deve visualizar o seu saldo em conta no topo da tela

    Cenário: Botão de sair exibido na tela inicial
        Dado que o usuário efetuou login na aplicação
        Quando o usuário visualiza a tela inicial
        Então o usuário deve visualizar o botão de sair na tela

    Cenário: Logo do Bug Bank exibido no header e redirecionamento para a home
	    Dado que o usuário efetuou login na aplicação
	    Quando o usuário visualiza a tela inicial
	    Então o usuário deve visualizar o logo do Bug Bank no header da página
	    E o usuário deve ser redirecionado para a home ao clicar no logo