export const makeApiRequest = (method, endpoint,baseUrl, body = null, form = false) => {
    return cy.request({
      method,
      url: `${baseUrl}${endpoint}`,
      body,
      headers: form ? {
        'accept': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded'
      } : {
        'accept': 'application/json',
        'Content-Type': 'application/json'
      },
      failOnStatusCode: false
    });
  };

  export const generateRandomId = () => Math.floor(Math.random() * 10000);

  export function addedPet (petId,petName) {
    addedPet = {
        id: petId,
        name: petName,
        category: { id: 1, name: 'Dogs' },
        photoUrls: ["string"],
        tags: [{ id: 1, name: 'tag1' }],
        status: 'available'
      };
    return addedPet
  }