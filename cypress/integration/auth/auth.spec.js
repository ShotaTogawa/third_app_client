describe('Login / Logout Test', () => {
  before(() => {
    cy.clearLocalStorage();
    cy.clearCookies();
    cy.visit('http://localhost:3000');
    cy.contains('Join now!');
  });

  it('should show up signup modal', () => {
    cy.contains('Signup').click();
    cy.get('.sc-fznyAO').should('be.visible');
  });

  it('should not signup with a brank inputs', () => {
    cy.get('[data-cy=name]').type('test');
    cy.get('[data-cy=email]').type('test@test.com');
    cy.get('[data-cy=password]').type('password');
    cy.contains('Sign Up Here').click();
    cy.contains('Please fill in all Fields');
  });

  it('should display err message from serveer', () => {
    cy.get('[data-cy=passwordConfirmation]').type('password');
    cy.contains('Sign Up Here').click();
    cy.contains('This email has already been taken');
  });

  it.skip('should be able to signup', () => {
    cy.get('[data-cy=email]')
      .clear()
      .type('newTest@test.com');
    cy.contains('Sign Up Here').click();
    cy.get('nav').should('be.visible');
  });

  it.skip('should logout successfully', () => {
    cy.contains('Logout').click();
    cy.contains('Join now!');
  });

  it('should close modal', () => {
    cy.get('.sc-fznKkj').click();
  });

  it('should show up login modal', () => {
    cy.contains('Signin').click();
    cy.get('.sc-fznyAO').should('be.visible');
  });

  it('should not login with invalid inputs', () => {
    cy.get('[data-cy=email]').type('invalid@test.com');
    cy.get('[data-cy=password]').type('invalidPassword');
    cy.contains('Sign In Here').click();
    cy.get('.sc-fznyAO').should('be.visible');
  });

  it('should login with valid inputs', () => {
    cy.get('[type="email"]').clear();
    cy.get('[type="password"]').clear();
    cy.get('[data-cy=email]').type('newTest@test.com');
    cy.get('[data-cy=password]').type('password');
    cy.contains('Sign In Here').click();
    cy.get('nav').should('be.visible');
  });

  it('should logout successfully', () => {
    cy.contains('Logout').click();
    cy.contains('Join now!');
  });
});
