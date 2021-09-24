/// <reference types="cypress" />
import {} from 'cypress';

describe('login', function () {
  beforeEach(() => {
    // @ts-ignore
    cy.createUser().then((user) => {
      cy.wrap(user).as('currentUser');
    });
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
