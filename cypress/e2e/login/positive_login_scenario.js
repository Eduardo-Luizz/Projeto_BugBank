/// <reference types="cypress" />
import {Given, When, Then} from '@badeball/cypress-cucumber-preprocessor'

import Login from '../../pages/login_page/login_page'

Given('que eu tenha um usuário', () => {
    Login.generate_user()
})

Given('que eu acesse a página de login', () => {
    Login.access_url()
})

Given('que o usuário esteja na página de login', () => {
    Login.access_url()
    Login.expect_url()
})

When('clicar novamente no botão com ícone de olho para ocultar a senha', () => {
    Login.click_eye_button()
})

When('clicar no botão com ícone de olho para visualizar a senha', () => {
    Login.click_eye_button()
})

When('clicar no botão "Entrar"', () => {
    Login.click_acess_button()
})

When('preencher o campo "senha" com "sua_senha"', () => {
    Login.type_password()
})

When('preencher o campo "usuário" com "seu_usuário"', () => {
    Login.type_email()
})

When('entrar na página', () => {
    Login.access_url()
})

Then('ele não deverá ver a "sua_senha" sendo exibida no campo "senha"', () => {
    Login.validate_input_password_is_password()
})

Then('deverá ver a "sua_senha" sendo exibida no campo "senha"', () => {
    Login.validate_input_password_is_text()
})

Then('a rota deve ser validada', () => {
    Login.expect_url()
})

Then('deverá ser redirecionado para a página inicial do sistema', () => {
    Login.validate_url_after_login()
})

Then('deve ser exibida uma mensagem de boas-vindas com seu nome de usuário', () => {
    Login.validate_welcome_message()
})
