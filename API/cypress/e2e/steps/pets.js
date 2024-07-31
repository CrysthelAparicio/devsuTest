import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import '../../support/commands';
import faker from 'faker';

const baseUrl = 'https://petstore.swagger.io/v2';
let petId;
let petName;
let response;

const generateRandomId = () => Math.floor(Math.random() * 10000);

const makeApiRequest = (method, endpoint, body = null) => {
  return cy.request({
    method,
    url: `${baseUrl}${endpoint}`,
    body,
    headers: {
      'accept': 'application/json',
      'Content-Type': 'application/json'
    },
    failOnStatusCode: false
  });
};

Given("A user sends a POST request to add a pet", () => {
  petId = generateRandomId();
  petName = faker.animal.dog();

  const addedPet = {
    id: petId,
    name: petName,
    category: { id: 1, name: 'Dogs' },
    photoUrls: ["string"],
    tags: [{ id: 1, name: 'tag1' }],
    status: 'available'
  };

  makeApiRequest('POST', '/pet', addedPet).then((res) => {
    response = res;
    expect(response.status).to.eq(200);
    cy.wrap(petId).as('petId');
    cy.wrap(response).as('response');
  });
});

Then('The response status should be 200', function () {
  cy.get('@response').then((response) => {
    expect(response.status).to.eq(200);
  });
});

Then('The response should contain the created pet data', function () {
  cy.get('@response').then((response) => {
    expect(response.body.name).to.eq(petName);
    expect(response.body.id).to.eq(petId);
  });
});