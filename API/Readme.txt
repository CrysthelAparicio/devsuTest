# Test Automation with Cypress

This repository contains automation tests for the PetStore API using Cypress and Cucumber. The tests cover various endpoints of the PetStore API, ensuring their functionality and reliability.

## Requirements

Before you start, make sure you have the following installed:

- Node (versión 12 o superior)
- Visual Studio Code (recommended but not mandatory)
- Ensure you have the latest version of Cypress installed:
  npm install cypress@latest --save-dev

## Installation

1. Clone the repository on your local machine:

    git clone https://github.com/CrysthelAparicio/devsuTest.git

2. Navigate to the project directory:

    cd API/

3. Open the code with Visual Studio Code 
    
    code .

4. Install the dependencies

    npm install

5. To execute the tests and display the execution in a web browser, use the following command:
 
    npm run test


 ########################### Report Generation #######################################

#######################  MOCHAAWESOME REPORT GENERATE  ############

1.  To run and generate reports at the same time with "cypress-mochawesome-reporter" You have to do it in the following way:

            npx cypress run --reporter mochawesome

   Note: Reports will be generated in the API/mochawesome-report folder. Open the .html files in a web browser to view the reports. 
   Videos of the tests will be saved in the API/cypress/videos folder.



####################  ALLURE REPORT GENERATE  ################

Important: To use Allure reports, downgrade Cypress to version 12.0.0 using the following commands:

npm uninstall cypress
npm install cypress@12.0.0 --save-dev


1.Execute the following command to clear any previous Allure results:

  npm run allure:clear

2.Run the tests using the following command to execute  the test:

 npm run cypress:execution

3.After running the tests, generate the Allure report and start a local server to view it:

npm run report:allure

This command will start a local server and open the Allure report in your default web browser.

