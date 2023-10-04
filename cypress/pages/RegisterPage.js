export class RegisterPage {


    weblocators = {

        firstName: '#input-firstname',
        lastName: '#input-lastname',
        email: '#input-email',
        telephone: '#input-telephone',
        password: '#input-password',
        passwordConfirm: '#input-confirm',
        policyCheckbox: 'input[type="checkbox"]',
        continue: '.btn.btn-primary',
        accountCreationMessage: 'h1'

    }

    openURL() {

        cy.visit(Cypress.env('url'))
    }
    enterFirstName(firstName) {

        cy.get(this.weblocators.firstName).type(firstName)
    }
    enterLastName(lastName) {

        cy.get(this.weblocators.lastName).type(lastName)
    }
    enterEmail(email) {

        cy.get(this.weblocators.email).type(email)
    }
    enterTelephone(phoneNo) {

        cy.get(this.weblocators.telephone).type(phoneNo)
    }
    enterPassword(password) {

        cy.get(this.weblocators.password).type(password)
        cy.get(this.weblocators.passwordConfirm).type(password)

    }
    selectCheckbox() {

        cy.get(this.weblocators.policyCheckbox).check()
    }
    clickOnContinue() {

        cy.get(this.weblocators.continue).click()
    }

    accountCreationSuccessMsg(accCreationMessage){
        cy.get(this.weblocators.accountCreationMessage).should('have.text', accCreationMessage)
    }

}