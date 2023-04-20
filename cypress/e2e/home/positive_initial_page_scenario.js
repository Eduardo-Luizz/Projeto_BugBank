/// <reference types="cypress" />
import {Given, When, Then} from '@badeball/cypress-cucumber-preprocessor'

import Login from '../../pages/login_page/login_page'
import Home from '../../pages/home_page/home_page'

Given('que o usuário efetuou login na aplicação', () => {
    Login.access_url()
    Login.generate_user()
    Login.type_email()
    Login.type_password()
    Login.click_acess_button()
})

When('o usuário visualiza a tela inicial', () => {
    Login.validate_url_after_login()
})

Then('o usuário deve visualizar as seguintes opções: "Transferência", "Pagamentos", "Extrato" e "Saque"', () => {
    Home.validate_label_option_transfer()
    Home.validate_label_option_payment()
    Home.validate_label_option_extract()
    Home.validate_label_option_withdraw()
})

Then('o usuário deve visualizar o seu saldo em conta no topo da tela', () => {
    Home.validate_label_balance()
})

Then('o usuário deve visualizar o botão de sair na tela', () => {
    Home.validate_visibility_button_exit()
})

Then('o usuário deve visualizar o logo do Bug Bank no header da página', () => {
    Home.validate_visibility_logo()
})

Then('o usuário deve ser redirecionado para a home ao clicar no logo', () => {
    Home.click_logo_button()
    Home.validate_redirect_logo_button()
})