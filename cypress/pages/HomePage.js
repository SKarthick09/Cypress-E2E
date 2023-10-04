export class HomePage {


    weblocators = {

        searchProduct: '.form-control.input-lg',
        clickSearch: '.btn.btn-default.btn-lg',
        product: 'img[title="MacBook"]',
        addtocart: 'Add to Cart',
        successMessages: 'div.alert.alert-success.alert-dismissible'

    }

    searchProduct(productName) {

        cy.get(this.weblocators.searchProduct).type(productName)
        cy.get(this.weblocators.clickSearch).click()
    }
    addToCart() {

        cy.contains(this.weblocators.addtocart).first().click()
    }

    verifySucessMessage() {
        return cy.get(this.weblocators.successMessages)
    }

}