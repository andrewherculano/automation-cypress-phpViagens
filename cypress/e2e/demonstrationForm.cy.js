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

  it.only('complete demo request form', () => {
    // let firstNumber = 0
    // let secondNumber = 0

    cy.visit('/demo')

    // preenchendo os campos
    cy.get('input[name="first_name"]').type('Andrew')
    cy.get('input[name="last_name"]').type('Silva')
    cy.get('select[name="country_id"]').select('30')

    cy.get('select[name="country_id"]')
      .should('have.value', '30')

    cy.get('input[name="whatsapp"]').type('11988877736')
    cy.get('input[name="business_name"]').type('NovaVenture Solutions')
    cy.get('input.email').type('testefate12345@gmail.com')

    // resolvendo problema da soma para enviar o request
    cy.get('#numb1').invoke('text').then(text => {
      const firstNumber = Number(text);
      cy.wrap(firstNumber).as('firstNumber');
    });
    
    // Extraia o texto do segundo número e armazene como um alias
    cy.get('#numb2').invoke('text').then(text => {
      const secondNumber = Number(text);
      cy.wrap(secondNumber).as('secondNumber');
    });
    
    // Acesse os aliases e realize a soma, em seguida insira o resultado no campo de entrada
    cy.get('@firstNumber').then(firstNumber => {
      cy.get('@secondNumber').then(secondNumber => {
        const sum = firstNumber + secondNumber;
        cy.get('#number').type(sum.toString());
      });
    });

    cy.contains('button', 'Submit').click()
    cy.contains(' Thank you!').should('be.visible')
  })
})