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

export const validateCreatedPetResponse = (response, expectedPet) => {
  expect(response.status).to.eq(200);

  expect(response.body).to.have.property('id');
  expect(response.body).to.have.property('name');
  expect(response.body).to.have.property('category');
  expect(response.body).to.have.property('photoUrls');
  expect(response.body).to.have.property('tags');
  expect(response.body).to.have.property('status');

  expect(response.body.id).to.eq(expectedPet.id);
  expect(response.body.name).to.eq(expectedPet.name);
  expect(response.body.category).to.deep.equal(expectedPet.category);
  expect(response.body.photoUrls).to.deep.equal(expectedPet.photoUrls);
  expect(response.body.tags).to.deep.equal(expectedPet.tags);
  expect(response.body.status).to.eq(expectedPet.status);
};

export const validateErrorResponse = (response, expectedMessage) => {
 
  expect(response.status).to.not.eq(200);

  expect(response.body).to.have.property('code');
  expect(response.body).to.have.property('type');
  expect(response.body).to.have.property('message');

  expect(response.body.code).to.be.a('number');
  expect(response.body.type).to.be.a('string').that.is.not.empty;
  expect(response.body.message).to.be.a('string').that.is.not.empty;

  if (expectedMessage) {
    expect(response.body.message).to.include(expectedMessage);
  }
};

export const verifyFirstStatusIsSold = (apiRequestConfig) => {
  cy.wrap(makeApiRequest(apiRequestConfig)).then((response) => {
    expect(response.body).to.be.an('array').that.is.not.empty;
    expect(response.body[0]).to.have.property('status', 'sold');
  });
};