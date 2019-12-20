describe('albums-page', () => {

    // Define a album we can use throughout our tests
    let album = {
        name: 'Thanks for the Dance',
        id: '1'
          }

    it('shows all the albums', () => {

        cy.visit('/albums')
        cy.contains('h2', 'Albums')

        // Confirm we see at least 5 albums
        cy.get('[data-test="album-name"]').its('length').should('be.gte', 5);

        // Confirm we see a our test album
        cy.contains('[data-test="album-name"]', album.name)

        // Confirm we can click on a album and get to its individual page
        cy.get('[data-test="album-name"]').contains(album.name).click();

        // Confirm the test album page loads
        cy.contains('[data-test="album-name"]', album.name)
        cy.url().should('include', album.id)

    })

    it('shows the correct album images', () => {

        cy.visit('/albums')

        cy.get('[data-test=album-image-' + album.id + ']').should('have.attr', 'src').should('include', album.id)
    })

})
