// utils.js

export const makeApiRequest = ({ method, endpoint, baseUrl, body = null, form = false }) => {
  const headers = {
    accept: 'application/json',
    'Content-Type': form ? 'application/x-www-form-urlencoded' : 'application/json'
  };

  return cy.request({
    method,
    url: `${baseUrl}${endpoint}`,
    body,
    headers,
    failOnStatusCode: false
  });
};

export const generateRandomId = () => Math.floor(Math.random() * 10000);

export const createAddedPet = (petId, petName) => ({
  id: petId,
  name: petName,
  category: { id: 1, name: 'Dogs' },
  photoUrls: ['string'],
  tags: [{ id: 1, name: 'tag1' }],
  status: 'available'
});
