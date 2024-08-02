// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import { makeApiRequest } from './helper/utils';

Cypress.Commands.add('makeApiRequest', (options) => {
  return makeApiRequest(options);
});
