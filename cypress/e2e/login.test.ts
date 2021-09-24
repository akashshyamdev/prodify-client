/// <reference types="cypress" />
import { builderUser } from '../support/generate';

describe('login', function () {
  beforeEach(() => {
    const user = builderUser();

    console.log(Cypress.env('server_url'));

    cy.request('POST', `${Cypress.env('server_url')}/developers/signup`, {
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      password: user.password,
    });

    cy.wrap(user).as('currentUser');
  });

  it('should login the user', function () {
    cy.visit('/auth/login');

    cy.get(':nth-child(2) > [data-testid=input]').type(this.currentUser.email);
    cy.get(':nth-child(3) > [data-testid=input]').type(this.currentUser.password);
    cy.get('.btn').click();

    cy.url().should('include', '/');

    // our auth cookie should be present
    cy.getCookie('jwt').should('exist');
  });
});
