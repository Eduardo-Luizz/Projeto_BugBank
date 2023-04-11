import 'cypress-xpath'
export default class Base {

    static visit(path = "") {
        cy.visit(path);
    }

    static validate_url(url) {
        cy.url().should('eq', url)
    }

    static getElementByXpath(element) {
        return cy.xpath(element)
    }

    static typeElementByXpath(elementID, text) {
        this.getElementByXpath(elementID).type(text, { force: true })
    }

    static validateElementIsVisivelByXpath(xpath) {
        this.getElementByXpath(xpath).should('be.visible');
    }

    static clickElementByXpath(xpath) {
        this.getElementByXpath(xpath).click({ force: true })
    }

    static validateElementMessageTextByXpath(xpath, message) {
        this.getElementByXpath(xpath).should('be.visible').should('contain.text', message)
    }
    
    static validateElementMessageContainsTextByXpath(xpath, message) {
        this.getElementByXpath(xpath).contains(message)
    }

    static validateElementHaveTypeTextByXpath(xpath) {
        this.getElementByXpath(xpath).should('have.attr', 'type', 'text')
    }

    static validateElementHaveTypePasswordByXpath(xpath) {
        this.getElementByXpath(xpath).should('have.attr', 'type', 'password')
    }

    static validateElementExistsByXpath(xpath) {
        this.getElementByXpath(xpath).should('exist')
    }
}