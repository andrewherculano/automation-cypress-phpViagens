Cypress.Commands.add('accessDemoPage', () => {
  cy.visit('/')
  cy.contains('Start travel business,').should('be.visible')
  cy.contains('a small', 'Try Demo').should('be.visible').click()
  cy.contains('h1', 'Demonstration').should('be.visible')
})