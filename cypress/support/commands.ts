// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import { builderUser } from './generate';

declare global {
  namespace Cypress {
    interface Chainable {
      /**
       * Custom command to create a user on the backend using fake data
       * @example cy.createUser()
       * @returns a promise containing the firstName, lastName, email, password, _id etc
       */
      createUser(overrides?: object): Promise<{
        firstName: string;
        lastName: string;
        email: string;
        password: string;
      }>;
    }
  }
}

Cypress.Commands.add('createUser', (overrides) => {
  const user = builderUser(overrides);

  cy.request('POST', `${Cypress.env('server_url')}/developers/signup`, {
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
    password: user.password,
  }).then((response) => ({ ...response.body.data, ...user }));
});
