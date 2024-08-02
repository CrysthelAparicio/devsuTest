import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import faker from 'faker';
import { makeApiRequest, generateRandomId, createAddedPet } from '../../support/helper/utils';

let response;
let petId;
let addedPet;

Given('I have a valid pet ID and new form data', function () {
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

Given('I have an invalid pet ID or invalid form data', function () {
  petId = 999999;
  addedPet = { id: petId, name: '', status: '' };
  cy.wrap(petId).as('petId');
  cy.wrap(addedPet).as('addedPet');
});

When('I update the pet with the form data', function () {
  cy.get('@petId').then((petId) => {
    const updatedPetName = faker.animal.cat();
    const formData = `id=${petId}&name=${updatedPetName}&status=sold`;

    makeApiRequest({
      method: 'POST',
      endpoint: `/pet/${petId}`,
      baseUrl: Cypress.env('URL_BASE'),
      body: formData,
      form: true
    }).then((res) => {
      response = res;
      cy.wrap(response).as('response');

      addedPet.name = updatedPetName;
      addedPet.status = 'sold';
      cy.wrap(addedPet).as('addedPet');
    });
  });
});

Then('the pet should be updated successfully', function () {
  cy.get('@response').then((response) => {
 
    expect(response.status).to.eq(200);
    
    expect(response.body).to.have.property('code', 200);
    expect(response.body).to.have.property('type');
    expect(response.body).to.have.property('message');
  
    cy.get('@petId').then((petId) => {
      expect(response.body.message).to.eq(petId.toString());
    });
  });
});
