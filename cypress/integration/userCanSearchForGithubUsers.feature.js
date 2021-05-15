describe('User can search for github users', () => {
  describe('successfully', () => {
    beforeEach(() => {
      cy.visit('/');
      cy.server();
      cy.route({
        method: 'GET',
        url: 'https://api.github.com/search/users?q=**',
        response: 'fixture:search_users.json'
      });
      cy.get('[data-cy=input-field]').type('Barack');
      cy.get('[data-cy=search-button]').click();
    });

    it('expected to display a list of users', () => {
      cy.get('[data-cy=user-container]').should('have.length', 3);
    });

    it('is expected to display user information', () => {
      cy.get('[data-cy=user-container]').within(() => {
        cy.get('[data-cy=username]').should('contain', 'arack');
        cy.get('[data-cy=user-avatar]').should('have.attr', 'src', "https://avatars3.githubusercontent.com/u/681626?v=4");
        cy.get('[data-cy=user-github]').should('have.attr', 'href', "https://github.com/barack");
      });
    });
  });
});
