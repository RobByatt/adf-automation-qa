import { element } from "protractor";

class LoginPage {

    userNameField() {return element(by.css('[data-automation-id="username"]'))}
    passwordField() {return element(by.css('[data-automation-id="password"]'))}
    loginButton() {return element(by.css('[data-automation-id="login-button"]'))}
    homeIcon() {return element(by.css('[data-automation-id="Home"]'))}

    login(email, password) {
        this.userNameField().sendKeys(email)
        this.passwordField().sendKeys(password)
        this.loginButton().click()
        browser.wait(protractor.ExpectedConditions.presenceOf(this.homeIcon()), 5000, 'Loggin did not complete successfully')
    }
}

export default new LoginPage