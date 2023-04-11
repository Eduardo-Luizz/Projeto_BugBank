/// <reference types="cypress" />
import {Given, When, Then} from '@badeball/cypress-cucumber-preprocessor'

import Login from '../../pages/login_page/login_page'

Given('que o usuário esteja na página de login', () => {
    Login.access_url()
    Login.expect_url()
})

When('preencher o campo "usuário" com "usuário_inválido"', () => {
    Login.type_invalid_email()
})

When('preencher o campo "senha" com "senha_inválida"', () => {
    Login.type_invalid_password()
})

When('clicar no botão "Entrar"', () => {
    Login.click_acess_button()
})

Then('deve ser exibido um modal e uma mensagem de erro informando que as credenciais de login são inválidas', () => {
    Login.validate_modal_invalid_login_is_visible()
    Login.validate_invalid_data_message()
})