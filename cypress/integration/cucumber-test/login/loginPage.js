const URL = 'http://localhost:3000/';
const BLANK_ERROR_MESSAGE = 'Please fill in all Fields';
const NOT_FOUND_MESSAGE = 'User Not Found.';
const CLOSE_BUTTON = '.sc-fznKkj';
const EMAIL_INPUT = 'input[type=email]';
const PASSWORD_INPUT = 'input[type=password]';
const MODAL = '.sc-fznyAO';

class LoginPage {
  static visitTopPage() {
    cy.visit(URL);
  }

  static clickSigninButton() {
    cy.contains('Signin').click();
    cy.get(MODAL).should('be.visible');
  }

  static showUpModal() {
    cy.get('.sc-fznKkj');
  }

  static fillEmail(email) {
    cy.get(EMAIL_INPUT).type(email);
  }

  static fillPassword(password) {
    cy.get(PASSWORD_INPUT).type(password);
  }

  static submit() {
    cy.contains('Sign In Here').click();
  }

  static clearInput() {
    cy.get(EMAIL_INPUT).clear();
  }

  static shouldShowBlankErrorMessage() {
    cy.contains(BLANK_ERROR_MESSAGE);
  }

  static shouldShowNotFoundMessage() {
    cy.contains(NOT_FOUND_MESSAGE);
  }

  static closeModal() {
    cy.get(CLOSE_BUTTON).click();
  }

  static shouldNotShowModal() {
    cy.get('.sc-fznKkj').not(MODAL);
  }

  static shouldSeeUserPage() {
    cy.get('nav').should('be.visible');
  }
}

export default LoginPage;
