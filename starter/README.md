## Notes

Updated Babel to allow newer syntax. 

Encountered error running webdriver-manager. Issue details here: https://github.com/angular/protractor/issues/5224
- To resolve I had to run the following commands to get webdriver running correctly:
$ webdriver-manager update --standalone --versions.standalone=3.8.0
$ webdriver-manager start --versions.standalone=3.8.0

## Prerequisites
- install Node 
- `npm install` to install the project dependencies

## Description
- run webdriver-manager **if facing the issue mentioned above**: `webdriver-manager update --standalone --versions.standalone=3.8.0` 
`webdriver-manager start --versions.standalone=3.8.0`
- run tests: `protractor conf.js`

## Explanation

I didn't put any of the test logic in the test function itself. I instead created functions in page object files which I called in the test. This is to make the test more readable and also to allow the functions to be reusable. For example I reused the 'createNewFolder' function instead of re-writting the logic.

I hard coded most of the data, such as the URLs for the test environment and the user data. Normally I would set up a .env file for this process and have a specific process for additional data. I did this here to make it more readable and because the data is static.

In some of the helper functions I use .then() to handle promises. Normally I would use async/await but here it was quicker to use the older syntax.

There is specific error messaging at points of potential failure. I chose not to add happy path logging to make the test run a little cleaner.

The test file sits in specs/testExercise.spec.js
The helper files sit in pageObjects/*.js & helperFunctions/generalHelper.js