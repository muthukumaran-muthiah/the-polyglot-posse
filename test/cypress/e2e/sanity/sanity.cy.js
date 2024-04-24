describe('To perform a sanity check for the application', () => {

    Cypress.on('uncaught:exception', (err, runnable) => {
        // Return false to prevent Cypress from failing the test
        return false;
    });

    beforeEach(() => {
        cy.fixture('environment.json').then((env) => {
            cy.visit(env.baseUrl)
            cy.wait(2000)
        })
    })

    it('Interacting with LEO', () => {
        // Click on the chat tab
        cy.get('button > span.items-center').click()
        // Click on the chat and ask question
        cy.get('div > textarea').click()
        cy.get('div > textarea').type('Which team won the first IPL trophy?')
        cy.get('div > span.chatButton').click()
        cy.wait(5000)
        cy.get('.q-message-received:last-child', { timeout: 15000 }).should('be.visible')
        // Ask second question
        cy.get('div > textarea').click()
        cy.get('div > textarea').type('Who is the first president of USA?')
        cy.get('div > span.chatButton').click()
        cy.wait(5000)
        cy.get('.q-message-received:last-child', { timeout: 15000 }).should('be.visible')
        // Close the chat
        cy.get('.fullscreen').click()
    })
})