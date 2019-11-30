/// <reference types="cypress" />
it('logs in using env variables', () => {
  const username = Cypress.env('username')
  const password = Cypress.env('password')

  cy.visit('/login')
  cy.get('[name=username]').type(username)
  cy.get('[name=password]').type(password)
  cy.get('[type=Submit]').click()

  cy.contains('a', 'profile').should('be.visible').click()
  cy.url().should('match', /profile$/)
  cy.contains('Email: jack@example.com')
})
