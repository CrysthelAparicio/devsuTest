import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { 
  makeApiRequest, 
  createAddedPet,
  generateRandomId, 
  validateErrorResponse,
  validateCreatedPetResponse} from '../../support/helper/utils';

let response;
let addedPet;
const petId = generateRandomId();
const petName = 'Fluffy';

Given('I have a valid new pet data', function () {
  addedPet = createAddedPet(petId, petName);
  cy.wrap(addedPet).as('addedPet');
});

Given('I have an invalid new pet data', function () {
  addedPet = createAddedPet('invalid', petName);
  cy.wrap(addedPet).as('addedPet');
});

When('I add the pet to the store', function () {
  cy.get('@addedPet').then((addedPet) => {
    makeApiRequest({
      method: 'POST',
      endpoint: '/pet',
      baseUrl: Cypress.env('URL_BASE'),
      body: addedPet
    }).then((res) => {
      response = res;
      cy.wrap(response).as('response');
    });
  });
});

Then('the response status should be {int}', function (status) {
  cy.get('@response').then((response) => {
    expect(response.status).to.eq(status);
  });
});

Then('the response should contain the created pet data', function () {
  cy.get('@response').then((response) => {
    cy.get('@addedPet').then((addedPet) => {
      validateCreatedPetResponse(response, addedPet);
    });
  });
});

Then('the response should contain an error message containing {string}', function (expectedMessage) {
  cy.get('@response').then((response) => {
    validateErrorResponse(response, expectedMessage);
  });
});
