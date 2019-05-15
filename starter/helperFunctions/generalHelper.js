import { ConsoleReporter } from "jasmine";


class GeneralHelper {

    selectValueDropDown() {return element(by.css('[class="mat-select-value"]'))}
    dropDownValues() {return element.all(by.css('[class="mat-option-text"]'))}
    confirmButton() {return element(by.css('[data-automation-id="host-button"]'))}
    
    setUpTest(optiontoSelect) {
        const errorMessage = 'Unable to select option: ' + optiontoSelect + '. Option is not present.'
        const settingsPage = 'http://qaexercise.envalfresco.com/settings'

        browser.get(settingsPage)
        const dropDownDisplayed = this.selectValueDropDown().isDisplayed()
        expect(dropDownDisplayed).toBeTruthy('Unable To proceed as dropdown is not displayed')
        this.selectValueDropDown().click()
        this.dropDownValues().count()
        .then((count) => {
            let promises = []
            for(let index = 0; index < count; index++) {
                promises.push(this.dropDownValues().get(index).getText())
            }
            return Promise.all(promises)
        }).then((textArray) => {
            const option = textArray.indexOf(optiontoSelect)
            expect(option).toBeGreaterThanOrEqual(0, errorMessage)
            console.log('Selected option: ' + textArray[option])
            return this.dropDownValues().get(option).click()
        })
        .then(() => {
            this.confirmButton().click()
        })
    }
}

export default new GeneralHelper