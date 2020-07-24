describe('app', () => {
  it('visits home page and sees all the buttons', () => {
    cy.visit('/')

    cy.contains('9calc')

    cy.contains('0')
    cy.contains('1')
    cy.contains('2')
    cy.contains('3')
    cy.contains('4')
    cy.contains('5')
    cy.contains('6')
    cy.contains('7')
    cy.contains('8')
    cy.contains('9')
    cy.contains('9')

    cy.contains('C')
    cy.contains('=')
    cy.contains('+')
    cy.contains('-')
    cy.contains('×')
    cy.contains('÷')
  })

  it('clicks clear to reset calculator', () => {
    cy.visit('/')

    cy.contains('C').click()

    cy.get('[data-testid=output]').contains('0')
  })
})
