describe('numbers', () => {
  it('can type positive and negative numbers', () => {
    cy.visit('/route1');
    cy.get('button').click();
    cy.get('input').clear();
    cy.get('input').type('10');
    cy.get('button').click();
    cy.get('input').clear();
    cy.get('input').type('-10');
  });
});
