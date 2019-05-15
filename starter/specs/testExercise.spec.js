
import GeneralHelper from '../helperFunctions/generalHelper'
import LoginPage from '../pageObjects/loginPage'
import FilesPage from '../pageObjects/filesPage'

describe('Alfresco QA test', () => { 

    it('loggin and create new file', () => {

        const userName = 'guest@example.com'
        const password = 'Password'
        const provider = 'ECM'
        const filesURL = 'http://qaexercise.envalfresco.com/files'
        const gitName = 'RobB404'
        const shouldError = true

        GeneralHelper.setUpTest(provider)
        LoginPage.login(userName, password)
        browser.get(filesURL)
        FilesPage.createNewFolder(gitName)
        FilesPage.checkFolderIsPresent(gitName)
        FilesPage.createNewFolder(gitName, shouldError)
        FilesPage.deleteFolder(gitName)
    })
})