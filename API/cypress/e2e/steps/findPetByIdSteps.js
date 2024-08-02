import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { makeApiRequest, generateRandomId, createAddedPet } from '../../support/helper/utils';

let response;
let petId;
let addedPet;

Given('I have a valid pet ID', function () {
  petId = generateRandomId();
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
    cy.wrap(petId).as('petId');
    cy.wrap(addedPet).as('addedPet');
    cy.wrap(response).as('response');
  });
});

Given('I have an invalid pet ID', function () {
  petId = 999999;
  cy.wrap(petId).as('petId');
});

When('I search for the pet by ID', function () {
  cy.get('@petId').then((petId) => {
    makeApiRequest({
      method: 'GET',
      endpoint: `/pet/${petId}`,
      baseUrl: Cypress.env('URL_BASE')
    }).then((res) => {
      cy.wrap(res).as('response');
    });
  });
});

Then('The pet details should match the added pet', function () {
  cy.get('@response').then((response) => {
    cy.get('@addedPet').then((addedPet) => {
      expect(response.body.name).to.eq(addedPet.name);
      expect(response.body.id).to.eq(addedPet.id);
      expect(response.body.category.name).to.eq(addedPet.category.name);
      expect(response.body.photoUrls).to.deep.equal(addedPet.photoUrls);
      expect(response.body.tags[0].name).to.eq(addedPet.tags[0].name);
      expect(response.body.status).to.eq(addedPet.status);
    });
  });
});
