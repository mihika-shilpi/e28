describe('favourites-page', () => {

    // Test album
    let album = {
        name: 'Thanks for the Dance',
        id: '1'
          }

    it('adds and removes from favourites', () => {
        // Add to favourites from album page
        cy.visit('/album/' + album.id);
        cy.get('[data-test="add-to-favourites-button"]').click();

        // Confirm favourites shows album
        cy.visit('/favourites');
        cy.get('[data-test="favourites-contents"]').its('length').should('be.gte', 1);

        // Remove from favourites
        cy.get('[data-test="remove-from-favourites-button"]').click();
        cy.contains('No items');
    })
})
