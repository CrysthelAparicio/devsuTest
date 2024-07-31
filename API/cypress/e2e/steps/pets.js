import{ Given, When, Then} from "@badeball/cypress-cucumber-preprocessor";
import '../../support/commands';
let petId;

beforeEach(() => {
  petId = null;
});

Given("Add a new pet", () => {

    cy.request({
      method: 'POST',
      url: 'https://petstore.swagger.io/v2/pet',
      body: {
        "id": 0,
        "category": {
          "id": 0,
          "name": "string"
        },
        "name": "doggie122",
        "photoUrls": [
          "string"
        ],
        "tags": [
          {
            "id": 0,
            "name": "string"
          }
        ],
        "status": "available"
      },
      headers: {
        'accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }).then((response) => {
      expect(response.status).to.eq(200);
     // console.log(response.body.id)
     petId = response.body.id;
      cy.wrap(petId).as('petId');
    });
  });
// Given("Add a new pet", () => {
//     cy.request({
//       method: 'GET',
//       url: 'https://petstore.swagger.io/v2/pet/9223372036854593000}',
//       headers: {
//         'accept': 'application/json'
//       }
//     }).then((response) => {
//       expect(response.status).to.eq(200);
//       expect(response.body.name).to.eq('doggie1223');
//     });
//   });
//   Given("Add a new pet", () => {
//     cy.request({
//       method: 'POST',
//       url: 'https://petstore.swagger.io/v2/pet/${this.petId}',
//       form: true,
//       body: {
//         name: "doggie1223Updated",
//         status: "sold"
//       },
//       headers: {
//         'accept': 'application/json',
//         'Content-Type': 'application/x-www-form-urlencoded'
//       }
//     }).then((response) => {
//       expect(response.status).to.eq(200);
//     });
//   });
  //Given("Add a new pet", () => {
  //   cy.request({
  //     method: 'GET',
  //     url: 'https://petstore.swagger.io/v2/pet/findByStatus',
  //     qs: { status: 'sold' },
  //     headers: {
  //       'accept': 'application/json'
  //     }
  //   }).then((response) => {
  //     expect(response.status).to.eq(200);
  //     const pet = response.body.find(pet => pet.id === this.petId);
  //     expect(pet).to.not.be.undefined;
  //     expect(pet.status).to.eq('sold');
  //   });
  // });