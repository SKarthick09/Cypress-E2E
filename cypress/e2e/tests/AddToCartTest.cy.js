import { HomePage } from "../../pages/HomePage"
const homePage = new HomePage()
import testData from "../../fixtures/testData.json"

describe("Verify Add to cart functionality", ()=>{

    before(()=>{
        cy.login(testData.login.username, testData.login.password)
    })

    it('Add To Cart flow', () => {
        homePage.searchProduct(testData.product.productName)
        homePage.addToCart()
        homePage.verifySucessMessage().should('contain', testData.message.successMessage).and('contain', testData.product.productName);

    })
})