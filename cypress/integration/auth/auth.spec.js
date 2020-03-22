describe('Login / Logout Test', () => {
  before(() => {
    cy.clearLocalStorage();
    cy.clearCookies();
    cy.visit('http://localhost:3000');
    cy.get('h2').should('be.visible');
  });

  it('should show up signup modal', () => {
    cy.contains('Signup').click();
    cy.get('.sc-fznyAO').should('be.visible');
  });

  it('should not signup with a brank inputs', () => {
    cy.get('input[type=text]').type('test');
    cy.get('input[type=email]').type('test@test.com');
    cy.get('input[type=password]')
      .first()
      .type('password');
    cy.contains('Sign Up Here').click();
    cy.contains('Please fill in all Fields');
  });

  it('should display err message from serveer', () => {
    cy.get('input[type=password]')
      .last()
      .type('password');
    cy.contains('Sign Up Here').click();
    cy.contains('This email has already been taken');
  });

  it.skip('should be able to signup', () => {
    cy.get('input[type=email]')
      .clear()
      .type('newTest@test.com');
    cy.contains('Sign Up Here').click();
    cy.get('nav').should('be.visible');
  });

  it.skip('should logout successfully', () => {
    cy.contains('Logout').click();
    cy.get('h2').should('be.visible');
  });

  it('should close modal', () => {
    cy.get('.sc-fznKkj').click();
  });

  it('should show up login modal', () => {
    cy.contains('Signin').click();
    cy.get('.sc-fznyAO').should('be.visible');
  });

  it('should not login with invalid inputs', () => {
    cy.get('input[type=email]').type('invalid@test.com');
    cy.get('input[type=password]').type('invalidPassword');
    cy.contains('Sign In Here').click();
    cy.get('.sc-fznyAO').should('be.visible');
  });

  it('should login with valid inputs', () => {
    cy.get('[type="email"]').clear();
    cy.get('[type="password"]').clear();
    cy.get('input[type=email]').type('newTest@test.com');
    cy.get('input[type=password]').type('password');
    cy.contains('Sign In Here').click();
    cy.get('nav').should('be.visible');
  });

  it('should logout successfully', async () => {
    cy.contains('Logout').click();
    cy.get('h2').should('be.visible');
  });
});
