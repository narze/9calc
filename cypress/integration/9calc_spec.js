describe('9calc', () => {
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

    cy.get('[data-testid=input]').contains('0')
    cy.get('[data-testid=output]').should('have.text', '')
  })

  it('shows clicked numbers', () => {
    cy.visit('/')
      .contains('C')
      .click()

    cy.contains('0')
      .click()
      .get('[data-testid=input]')
      .should('have.text', '0')

    cy.contains('1')
      .click()
      .get('[data-testid=input]')
      .should('have.text', '1')

    cy.contains('2')
      .click()
      .get('[data-testid=input]')
      .should('have.text', '12')

    cy.contains('3')
      .click()
      .get('[data-testid=input]')
      .should('have.text', '123')

    cy.contains('4')
      .click()
      .get('[data-testid=input]')
      .should('have.text', '1234')

    cy.contains('5')
      .click()
      .get('[data-testid=input]')
      .should('have.text', '12345')

    cy.contains('6')
      .click()
      .get('[data-testid=input]')
      .should('have.text', '123456')

    cy.contains('7')
      .click()
      .get('[data-testid=input]')
      .should('have.text', '1234567')

    cy.contains('8')
      .click()
      .get('[data-testid=input]')
      .should('have.text', '12345678')

    cy.get('#calculator').contains('9')
      .click()

    cy.get('[data-testid=input]')
      .should('have.text', '123456789')

    cy.contains('0')
      .click()
      .get('[data-testid=input]')
      .should('have.text', '1234567890')
  })

  it('can add numbers together', () => {
    cy.visit('/')
      .contains('C')
      .click()

    cy.contains('1')
      .click()
      .get('[data-testid=input]')
      .should('have.text', '1')

    cy.contains('+')
      .click()
      .get('[data-testid=input]')
      .should('have.text', '1 +')

    cy.contains('2')
      .click()
      .get('[data-testid=input]')
      .should('have.text', '1 + 2')

    cy.contains('=')
      .click()
      .get('[data-testid=output]')
      .should('have.text', '3')
  })

  it("can multiply numbers", () => {
    cy.visit("/")
      .contains("C")

    cy.contains('3')
      .click()
      .get('[data-testid=input]')
      .should('have.text', '3')

    cy.contains('×')
      .click()
      .get('[data-testid=input]')
      .should('have.text', '3 ×')

    cy.contains('4')
      .click()
      .get('[data-testid=input]')
      .should('have.text', '3 × 4')

    cy.contains('=')
      .click()
      .get('[data-testid=output]')
      .should('have.text', '12')
  })
})
