import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { makeApiRequest, generateRandomId, createAddedPet,verifyFirstStatusIsSold } from '../../support/helper/utils';
import faker from 'faker';
let petId;
let response;
let addedPet;

Given('I have a valid status', function () {
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
Then('the list includes the modified pet {string}', function (status) {
  cy.get('@petId').then((petId) => {
    const updatedPetName = faker.animal.cat();
    const formData = `id=${petId}&name=${updatedPetName}&status=${status}`;

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
      addedPet.status = status;
      cy.wrap(addedPet).as('addedPet');
     
    });
  });
  makeApiRequest({
    method: 'GET',
    endpoint: `/pet/findByStatus?status=${status}&sort_descendent=true`,
    baseUrl: Cypress.env('URL_BASE')
  }).then((res) => {
    console.log(petId)
    console.log(res)

    const pet = res.body.find(p => p.id === addedPet.id);
    expect(pet).to.exist;
    expect(pet.name).to.eq(addedPet.name);
    expect(pet.category.name).to.eq(addedPet.category.name);
    expect(pet.photoUrls).to.deep.equal(addedPet.photoUrls);
    expect(pet.tags[0].name).to.eq(addedPet.tags[0].name);
    expect(pet.status).to.eq(addedPet.status);

  });
});
  

