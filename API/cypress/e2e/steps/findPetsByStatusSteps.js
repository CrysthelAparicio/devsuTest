import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { makeApiRequest, generateRandomId, createAddedPet,verifyFirstStatusIsSold } from '../../support/helper/utils';

let response;
let addedPet;

Given('I have a valid status', function () {
  const petId = generateRandomId();
  const petName = 'Fluffy';
  addedPet = createAddedPet(petId, petName);
  makeApiRequest({
    method: 'POST',
    endpoint: '/pet',
    baseUrl: Cypress.env('URL_BASE'),
    body: addedPet
  }).then((res) => {
    response = res;
    expect(res.status).to.eq(200);
    cy.wrap(addedPet).as('addedPet');
    cy.wrap(petId).as('petId');
  });
});

Given('I have an invalid status', function () {
  cy.wrap('unknown').as('status');
});

When('I search for pets by status {string}', function (status) {
 makeApiRequest({
    method: 'GET',
    endpoint: `/pet/findByStatus?status=${status}`,
    baseUrl: Cypress.env('URL_BASE')
  }).then((res) => {
    cy.wrap(res).as('response');
  });
});
Then('the list of pets should include the added pet {string}', function (status) {
  cy.get('@response').then((response) => {
    cy.get('@addedPet').then((addedPet) => {
      expect(response.body[0]).to.have.property('status', status);
    });
  });
});

