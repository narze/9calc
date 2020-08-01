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

    cy.contains('1')
      .click()
      .get('[data-testid=input]').contains('1')

    cy.contains('C').click()

    cy.get('[data-testid=input]').contains('0')
    cy.get('[data-testid=output]').should('have.text', '')
  })

  it('shows clicked numbers', () => {
    cy.visit('/')

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

  it("can minus numbers", () => {
    cy.visit("/")

    cy.contains('1')
      .click()
      .get('[data-testid=input]')
      .should('have.text', '1')

    cy.get('#number-pad').contains('1')
      .click()
      .get('[data-testid=input]')
      .should('have.text', '11')

    cy.contains('-')
      .click()
      .get('[data-testid=input]')
      .should('have.text', '11 -')

    cy.contains('6')
      .click()
      .get('[data-testid=input]')
      .should('have.text', '11 - 6')

    cy.contains('=')
      .click()
      .get('[data-testid=output]')
      .should('have.text', '5')
  })

  it("can divide numbers", () => {
    cy.visit("/")
      .contains("C")
      .click()

    cy.contains('2')
      .click()
      .get('[data-testid=input]')
      .should('have.text', '2')

    cy.contains('7')
      .click()
      .get('[data-testid=input]')
      .should('have.text', '27')

    cy.contains('÷')
      .click()
      .get('[data-testid=input]')
      .should('have.text', '27 ÷')

    cy.get('#number-pad').contains('9')
      .click()
      .get('[data-testid=input]')
      .should('have.text', '27 ÷ 9')

    cy.contains('=')
      .click()
      .get('[data-testid=output]')
      .should('have.text', '3')
  })

  it("can calculate 25 x 25 correctly", () => {
    cy.visit("/")
      .contains("C")
      .click()

    cy.get('#number-pad').contains('2')
      .click()
      .get('[data-testid=input]')
      .should('have.text', '2')

    cy.get('#number-pad').contains('5')
      .click()
      .get('[data-testid=input]')
      .should('have.text', '25')

    cy.get('#number-pad').contains('×')
      .click()
      .get('[data-testid=input]')
      .should('have.text', '25 ×')

    cy.get('#number-pad').contains('2')
      .click()
      .get('[data-testid=input]')
      .should('have.text', '25 × 2')

    cy.get('#number-pad').contains('5')
      .click()
      .get('[data-testid=input]')
      .should('have.text', '25 × 25')

    cy.get('#number-pad').contains('=')
      .click()
      .get('[data-testid=output]')
      .should('have.text', '225')

    cy.contains('https://youtu.be/6ACg16U_KeQ?t=1505')
  })

  it("can calculate 60 x 24 correctly", () => {
    cy.visit("/")
    cy.get('#number-pad').contains('6')
      .click()
      .get('[data-testid=input]')
      .should('have.text', '6')

    cy.get('#number-pad').contains('0')
      .click()
      .get('[data-testid=input]')
      .should('have.text', '60')

    cy.get('#number-pad').contains('×')
      .click()
      .get('[data-testid=input]')
      .should('have.text', '60 ×')

    cy.get('#number-pad').contains('2')
      .click()
      .get('[data-testid=input]')
      .should('have.text', '60 × 2')

    cy.get('#number-pad').contains('4')
      .click()
      .get('[data-testid=input]')
      .should('have.text', '60 × 24')

    cy.get('#number-pad').contains('=')
      .click()
      .get('[data-testid=output]')
      .should('have.text', '3600')

    cy.contains('https://youtu.be/iRoe5q0zs1c?t=183')
  })

  it("60 x 12 x 10 (https://youtu.be/iRoe5q0zs1c?t=771)", () => {
    cy.visit("/")

    cy.get('#number-pad').contains('6')
      .click()
      .get('[data-testid=input]')
      .should('have.text', '6')

    cy.get('#number-pad').contains('0')
      .click()
      .get('[data-testid=input]')
      .should('have.text', '60')

    cy.get('#number-pad').contains('×')
      .click()
      .get('[data-testid=input]')
      .should('have.text', '60 ×')

    cy.get('#number-pad').contains('1')
      .click()
      .get('[data-testid=input]')
      .should('have.text', '60 × 1')

    cy.get('#number-pad').contains('2')
      .click()
      .get('[data-testid=input]')
      .should('have.text', '60 × 12')

    cy.get('#number-pad').contains('×')
      .click()
      .get('[data-testid=input]')
      .should('have.text', '60 × 12 ×')

    cy.get('#number-pad').contains('1')
      .click()
      .get('[data-testid=input]')
      .should('have.text', '60 × 12 × 1')

    cy.get('#number-pad').contains('0')
      .click()
      .get('[data-testid=input]')
      .should('have.text', '60 × 12 × 10')

    cy.contains('=')
      .click()
      .get('[data-testid=output]')
      .should('have.text', '6000')

    cy.contains('https://youtu.be/iRoe5q0zs1c?t=771')
  })
})
