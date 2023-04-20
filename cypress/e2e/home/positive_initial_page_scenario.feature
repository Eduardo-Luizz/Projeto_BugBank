#language: pt
Funcionalidade: Página inicial cenário positivo

    Contexto: Acessar página e validar informações

    Cenario: Opções disponíveis na tela inicials
        Dado que o usuário efetuou login na aplicação
	    Quando o usuário visualiza a tela inicial
	    Então o usuário deve visualizar as seguintes opções: "Transferência", "Pagamentos", "Extrato" e "Saque"
    
    