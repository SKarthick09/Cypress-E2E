import { RegisterPage } from "../../pages/RegisterPage"
const registerPage = new RegisterPage()
import registerData from '../../fixtures/registerData.json'

describe('Verify the register account functionality', () => {


    it('Validate the register account flow', () => {
        registerPage.openURL()
        registerPage.enterFirstName(registerData.firstName)
        registerPage.enterLastName(registerData.lastName)
        registerPage.enterEmail(registerData.email)
        registerPage.enterTelephone(registerData.telephone)
        registerPage.enterPassword(registerData.password)
        registerPage.selectCheckbox()
        registerPage.clickOnContinue()
        registerPage.accountCreationSuccessMsg(registerData.accountSuccessCreationMsg)
    })
})