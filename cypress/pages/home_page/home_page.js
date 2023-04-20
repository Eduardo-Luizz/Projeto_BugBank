/// <reference types="cypress" />

import Base from "../base_page/base_page"
import { urls, fixed_messages } from "../../endpoints/config";
const el = require('./elements').ELEMENTS;

export default class Home extends Base {

    static validate_label_option_transfer() {
        super.validateElementMessageTextByXpath(el.LIST.LABEL_TRANSFER, fixed_messages.label_option_transfer)
    }

    static validate_label_option_payment() {
        super.validateElementMessageTextByXpath(el.LIST.LABEL_PAYMENT, fixed_messages.label_option_payment)
    }
    
    static validate_label_option_extract() {
        super.validateElementMessageTextByXpath(el.LIST.LABEL_EXTRACT, fixed_messages.label_option_extract)
    }

    static validate_label_option_withdraw() {
        super.validateElementMessageTextByXpath(el.LIST.LABEL_WITHDRAW, fixed_messages.label_option_withdraw)
    }

    static validate_label_balance() {
        super.validateElementIsVisivelByXpath(el.LIST.LABEL_BALANCE_HOME_PAGE)
    }

    static validate_visibility_button_exit() {
        super.validateElementIsVisivelByXpath(el.LIST.BUTTON_EXIT)
    }

    static validate_visibility_logo() {
        super.validateElementIsVisivelByXpath(el.LIST.BUTTON_LOGO)
    }

    static click_logo_button() {
        super.clickElementByXpath(el.LIST.BUTTON_LOGO)
    }

    static validate_redirect_logo_button() {
        super.validate_url(urls.initial_page)
    }
}