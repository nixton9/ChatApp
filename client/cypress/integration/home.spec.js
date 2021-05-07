describe('Home', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  it('shows the logo, text, button and input', () => {
    cy.contains('Free, fast and anonymous')
    cy.get('[data-test-id="logo"]')
    cy.get('[data-test-id="main-button"]')
    cy.get('[data-test-id="room-input"]')
  })

  it('clicking on Help button open the modal', () => {
    cy.get('[data-test-id="help-button"]').click()
    cy.contains('How to use')
  })

  it('entering a random room shows an error message', () => {
    cy.get('[data-test-id="room-input"]').type('asd')
    cy.get('[data-test-id="send-button"]').click()
    cy.contains("This room doesn't exist")
  })

  it('clicking the new room button redirects to a new room', () => {
    cy.get('[data-test-id="main-button"]').click()
    cy.url().should('contain', '/room')
  })
})
