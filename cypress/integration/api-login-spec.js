/// <reference types="cypress" />
it('logs in using cy.request', () => {
  cy.request({
    method: 'POST',
    url: '/login',
    form: true,
    body: {
      username: 'jack',
      password: 'secret'
    }
  })
  cy.getCookie('connect.sid').should('exist')

  // now visit the profile page
  cy.visit('/profile').contains('Email: jack@example.com')
})
