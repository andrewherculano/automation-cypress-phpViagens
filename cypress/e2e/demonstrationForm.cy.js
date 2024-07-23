describe('demo form', () => {
  it('access demo page', () => {
    cy.visit('/')

    cy.contains('Start travel business,')
      .should('be.visible')
    
    cy.get('a small')
      .contains('Try Demo')
      .should('be.visible')
      .click()

    cy.get('h1')
      .contains('Demonstration')
      .should('be.visible')
  })
})