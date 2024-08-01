import { Given, When, Then ,Before} from "@badeball/cypress-cucumber-preprocessor";
import faker from 'faker';
import  {makeApiRequest} from '../../support/helper/utils';
import  {generateRandomId} from '../../support/helper/utils';
import  {addedPet} from '../../support/helper/utils';

let response;
let addedPet;
let petId;

Then('the response status should be 200', function () {
  cy.get('@response').then((response) => {
    expect(response.status).to.eq(200);
  });
});

Then('the response should contain the created pet data', function () {
  cy.get('@response').then((response) => {
    cy.get('@addedPet').then((addedPet) => {
      expect(response.body.name).to.eq(addedPet.name);
      expect(response.body.id).to.eq(addedPet.id);
    });
  });
});


//------------------ Find Pet by ID -------------------------

When('a user sends a GET request to find the pet by ID', function () {
  cy.get('@petId').then((petId) => {
    makeApiRequest('GET', `/pet/${petId}`,Cypress.env('URL_BASE')).then((res) => {
      cy.wrap(res).as('response');
    });
  });
});

Then('the pet details should match the added pet', function () {
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

//------------------ Find Pets by Status -------------------------

When('a user sends a GET request to find pets by status {string}', function (status) {
  makeApiRequest('GET', `/pet/findByStatus?status=${status}`,Cypress.env('URL_BASE')).then((res) => {
    cy.wrap(res).as('response');
  });
});

Then('the list of pets should include the added pet', function () {
  cy.get('@response').then((response) => {
    cy.get('@addedPet').then((addedPet) => {
      const pet = response.body.find(p => p.id === addedPet.id);
      expect(pet).to.exist;
      expect(pet.name).to.eq(addedPet.name);
      expect(pet.category.name).to.eq(addedPet.category.name);
      expect(pet.photoUrls).to.deep.equal(addedPet.photoUrls);
      expect(pet.tags[0].name).to.eq(addedPet.tags[0].name);
      expect(pet.status).to.eq(addedPet.status);
    });
  });
});

//------------------ Update a Pet in the Store with Form Data -------------------------

When('a user sends a POST request to update the pet with new details', function () {
  cy.get('@petId').then((petId) => {
    const updatedPetName = faker.animal.cat();
    const formData = `id=${petId}&name=${updatedPetName}&status=sold`;

    makeApiRequest('POST', `/pet/${petId}`,Cypress.env('URL_BASE'), formData, true)
      .then((res) => {
        response = res;
        expect(res.status).to.eq(200);
        cy.wrap(response).as('response');

        addedPet.name = updatedPetName;
        addedPet.status = 'sold';
        cy.wrap(addedPet).as('addedPet');
      });
  });
});

Then('the pet should be updated successfully', function () {
  cy.get('@response').then((response) => {
    expect(response.body.code).to.eq(200);
    expect(response.body.message).to.eq(petId.toString());
  });
});

Before(()=>{
  petId = generateRandomId();
  const petName = faker.animal.dog();

  addedPet = addedPet(petId,petName);

  makeApiRequest('POST', '/pet',Cypress.env('URL_BASE'), addedPet).then((res) => {
    response = res;
    expect(res.status).to.eq(200);
    cy.wrap(petId).as('petId');
    cy.wrap(addedPet).as('addedPet');
    cy.wrap(res).as('response');
  });
});