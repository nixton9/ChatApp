describe('ChartRoom', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
    cy.get('[data-test-id="main-button"]').click()
    cy.get('[data-test-id="modal-input"]').type('Cypress')
    cy.get('[data-test-id="main-button"]').click()
  })

  it('shows the title and the user', () => {
    cy.contains('Room')
    cy.get('[data-test-id="user-avatar"]').contains('C')
  })

  it('back button works', () => {
    cy.get('[data-test-id="back-button"]').click()
    cy.get('[data-test-id="main-button"]').contains('Yes').click()
    cy.url().should('eq', 'http://localhost:3000/')
  })

  it('messages are sent and displayed', () => {
    cy.get('[data-test-id="message-input"]').type('This is a message')
    cy.get('[data-test-id="send-button"]').click()
    cy.get('[data-test-id="chartRoom-content"]').contains('This is a message')
  })

  it('clicking on the users buttons opens up the sidebar', () => {
    cy.get('[data-test-id="users-button"]').click()
    cy.get('[data-test-id="sidebar"]').contains('Users in Room')
    cy.get('[data-test-id="sidebar"]').contains('Cypress')
  })
})
