describe('album-page', () => {

    // Test album
    let album = {
        name: 'Thanks for the Dance',
        id: '1'
          }

    it('shows album', () => {
        cy.visit('/album/' + album.id);
        cy.contains('[data-test="album-name"]', album.name);
    })

    it('adds to favourites', () => {
        cy.visit('/album/' + album.id);
        cy.get('[data-test="add-to-favourites-button"]').click();
    })
})
