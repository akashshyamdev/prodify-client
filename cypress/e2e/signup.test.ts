/// <reference types="cypress" />
import {} from 'cypress';

describe('signup', function () {
  beforeEach(() => {
    // @ts-ignore
    cy.createUser().then((user) => {
      cy.wrap(user).as('currentUser');
    });
  });

  it('should signup the user', function () {
    cy.visit('/auth/signup');

    cy.get(':nth-child(2) > [data-testid=input]').type(this.currentUser.firstName);
    cy.get(':nth-child(3) > [data-testid=input]').type(this.currentUser.lastName);
    cy.get(':nth-child(4) > [data-testid=input]').type(this.currentUser.email);
    cy.get(':nth-child(5) > [data-testid=input]').type(this.currentUser.password);

    cy.get('.btn').click();

    cy.url().should('include', '/');

    // our auth cookie should be present
    cy.getCookie('jwt').should('exist');
  });
});
