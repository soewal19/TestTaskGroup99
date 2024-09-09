describe('Currency Swap Form', () => {
    beforeEach(() => {
        // Visit the application
        cy.visit('http://localhost:3000'); // Ensure your app is running on this URL
    });

    it('should display the currency swap form', () => {
        cy.get('h1').should('contain', 'Currency Swap Form');
        cy.get('form').should('be.visible');
    });

    it('should allow the user to select currencies', () => {
        cy.get('select').first().select('USD');
        cy.get('select').first().should('have.value', 'USD');

        cy.get('select').last().select('EUR');
        cy.get('select').last().should('have.value', 'EUR');
    });

    it('should allow the user to input an amount', () => {
        cy.get('input[type="number"]').first().type('100');
        cy.get('input[type="number"]').first().should('have.value', '100');
    });

    it('should show an error message for invalid input', () => {
        cy.get('input[type="number"]').first().type('-50'); // Invalid input
        cy.get('button').click();
        cy.get('.error').should('contain', 'Amount must be greater than zero.');
    });

    it('should show an alert with the correct swap amount', () => {
        cy.intercept('GET', 'https://interview.switcheo.com/prices.json', {
            fixture: 'prices.json' // Mock the API response
        }).as('getPrices');

        cy.get('input[type="number"]').first().type('100');
        cy.get('select').first().select('USD');
        cy.get('select').last().select('EUR');
        cy.get('button').click();

        cy.wait('@getPrices').then(() => {
            cy.on('window:alert', (txt) => {
                expect(txt).to.contain('You will receive'); // Check if alert contains the expected text
            });
        });
    });
});