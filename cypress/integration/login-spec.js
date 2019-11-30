/// <reference types="cypress" />
it('logs in', () => {
  cy.visit('/login')
  cy.get('[name=username]').type('jack')
  cy.get('[name=password]').type('secret')
  cy.get('[type=Submit]').click()

  cy.contains('a', 'profile').should('be.visible').click()
  cy.url().should('match', /profile$/)
})

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
