describe('Election Assistant App', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('renders the header correctly', () => {
    cy.get('header').should('contain', 'Election Guide Assistant');
  });

  it('contains the election timeline', () => {
    cy.get('#timeline').should('exist');
  });

  it('displays the voting wizard', () => {
    cy.get('#voting').should('exist');
  });
});
