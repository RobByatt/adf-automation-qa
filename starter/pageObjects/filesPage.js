import { element } from "protractor";

class FilesPage {

    createNewFolderIcon() {return element(by.css('[data-automation-id="create-new-folder"]'))}
    dialogContainer() {return element(by.css('mat-dialog-container'))}
    nameinput() {return element(by.css('[id="adf-folder-name-input"]'))}
    createButton() {return element(by.css('[id="adf-folder-create-button"]'))}
    snackBarContainer() {return element(by.css('snack-bar-container'))}
    folderRow(userName) {return element.all(by.css('[data-automation-id="' + userName + '"]'))}
    actionMenu() {return element(by.css('[data-automation-id="action_menu_0"]'))}
    deleteOption() {return element(by.css('[data-automation-id="DOCUMENT_LIST.ACTIONS.FOLDER.DELETE"]'))}
    cancelButton() {return element(by.css('[id="adf-folder-cancel-button"]'))}

    createNewFolder(gitName, shouldError = false) {
        const errorText = 'There\'s already a folder with this name. Try a different name.'

        browser.wait(protractor.ExpectedConditions.presenceOf(this.createNewFolderIcon()), 1000, 'User is not on Files Page')
        this.createNewFolderIcon().click()
        browser.wait(protractor.ExpectedConditions.visibilityOf(this.dialogContainer()), 1000, 'New File window has not displayed')
        this.nameinput().sendKeys(gitName)
        this.createButton().click()
        if(shouldError) { 
            browser.wait(protractor.ExpectedConditions.visibilityOf(this.snackBarContainer()), 1000, 'Duplicate folder error message was not displayed')
            this.snackBarContainer().getText()
            .then((text) => {
                expect(text).toMatch(errorText)
                this.cancelButton().click()
            })
        }
    }

    checkFolderIsPresent(folderName) { 
        browser.wait(protractor.ExpectedConditions.visibilityOf(this.folderRow(folderName).first()), 1000, 'Folder has not been created correctly')
    }

    deleteFolder(folderName) {
        this.actionMenu().click()
        this.deleteOption().click()
        expect(this.folderRow(folderName).isPresent()).toBeFalsy('Folder: ' + folderName + ' is still present')
    }
}

export default new FilesPage