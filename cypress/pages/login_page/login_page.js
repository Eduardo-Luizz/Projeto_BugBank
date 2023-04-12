/// <reference types="cypress" />

import Base from "../base_page/base_page"
import { urls, fixed_messages } from "../../endpoints/config";
const el = require('./elements').ELEMENTS;

export default class Login extends Base {

    static generate_user() {
        this.access_url()
        super.clickElementByXpath(el.LIST.REGISTER_BUTTON)
        cy.readFile('cypress/fixtures/login.json').then((data) => {
            super.typeElementByXpath(el.LIST.REGISTER_INPUT_EMAIL, data.email)
            super.typeElementByXpath(el.LIST.REGISTER_INPUT_NAME, data.name)
            super.typeElementByXpath(el.LIST.REGISTER_INPUT_PASS, data.pass)
            super.typeElementByXpath(el.LIST.REGISTER_INPUT_CONFIRM_PASS, data.pass)
        })
        super.clickElementByXpath(el.LIST.REG_BUTTON)
        super.clickElementByXpath(el.LIST.BUTTON_CLOSE_MODAL_SUCCESS_REGISTER)
    }
    
    static access_url() {
        super.visit(urls.home)
    }

    static expect_url() {
        super.validate_url(urls.home)
    }

    static validate_url_after_login() {
        super.validate_url(urls.initial_page)
    }

    static type_email() {
        cy.readFile('cypress/fixtures/login.json').then((data) => {
            super.validateElementIsVisivelByXpath(el.LIST.INPUT_EMAIL)
            super.typeElementByXpath(el.LIST.INPUT_EMAIL, data.email)
            super.getElementByXpath(el.LIST.INPUT_EMAIL).should('have.value', data.email)
        })
    }

    static type_invalid_email() {
        cy.readFile('cypress/fixtures/login.json').then((data) => {
            super.validateElementIsVisivelByXpath(el.LIST.INPUT_EMAIL)
            super.typeElementByXpath(el.LIST.INPUT_EMAIL, data.invalid_user)
        })
    }

    static type_password() {
        cy.readFile('cypress/fixtures/login.json').then((data) => {
            super.validateElementIsVisivelByXpath(el.LIST.INPUT_PASS)
            super.typeElementByXpath(el.LIST.INPUT_PASS, data.pass)
            super.getElementByXpath(el.LIST.INPUT_PASS).should('have.value', data.pass)
        })
    }

    static type_invalid_password() {
        cy.readFile('cypress/fixtures/login.json').then((data) => {
            super.validateElementIsVisivelByXpath(el.LIST.INPUT_PASS)
            super.typeElementByXpath(el.LIST.INPUT_PASS, data.invalid_pass)
        })
    }

    static click_acess_button() {
        super.validateElementIsVisivelByXpath(el.LIST.LOGIN_BUTTON_ACESS)
        super.clickElementByXpath(el.LIST.LOGIN_BUTTON_ACESS)
    }

    static validate_welcome_message() {
        super.validateElementMessageTextByXpath(el.LIST.MESSAGE_NAME, fixed_messages.message_name)
        super.validateElementMessageTextByXpath(el.LIST.MESSAGE_WELCOME, fixed_messages.message_welcome)
    }

    static click_eye_button() {
        super.validateElementIsVisivelByXpath(el.LIST.BTN_EYE)
        super.clickElementByXpath(el.LIST.BTN_EYE)
    }

    static validate_input_password_is_text() {
        super.validateElementHaveTypeTextByXpath(el.LIST.INPUT_PASS)
    }

    static validate_input_password_is_password() {
        super.validateElementHaveTypePasswordByXpath(el.LIST.INPUT_PASS)
    }

    static validate_invalid_data_message() {
        super.validateElementMessageContainsTextByXpath(el.LIST.MESSAGE_INVALID_DATA, fixed_messages.message_invalid_login)
    }

    static validate_modal_invalid_login_is_visible() {
        super.validateElementExistsByXpath(el.LIST.MODAL_INCORRECT_LOGIN)
    }

    static validate_warning_input_email() {
        super.validateElementMessageTextByXpath(el.LIST.INPUT_WARNING_EMAIL, fixed_messages.input_warning_message)
    }

    static validate_warning_input_password() {
        super.validateElementMessageTextByXpath(el.LIST.INPUT_WARNING_PASS, fixed_messages.input_warning_message)
    }
}