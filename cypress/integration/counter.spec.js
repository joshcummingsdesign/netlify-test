describe('Counter', () => {
  it('should increment and decrement', () => {
    cy.visit('/');
    cy.get('[data-cy=count]').should('contain', 0);
    cy.get('[data-cy=increment]').click();
    cy.get('[data-cy=count]').should('contain', 1);
    cy.get('[data-cy=decrement]').click();
    cy.get('[data-cy=count]').should('contain', 0);
  });
});
