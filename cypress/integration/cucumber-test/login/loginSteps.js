import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import LoginPage from './loginPage';

Given('I visit the top page and I see Signin and Signup button', () => {
  LoginPage.visitTopPage();
});

When('I click Signin button', () => {
  LoginPage.clickSigninButton();
});

When('I see a modal screen', () => {
  LoginPage.showUpModal();
});

When('I fill only email with {string}', email => {
  LoginPage.fillEmail(email);
});

When('click on submit button', () => {
  LoginPage.submit();
});

When('I should see error message', () => {
  LoginPage.shouldShowBlankErrorMessage();
  LoginPage.clearInput();
});

When('I fill email with {string}', email => {
  LoginPage.fillEmail(email);
});

When('I fill password with {string}', password => {
  LoginPage.fillPassword(password);
});

When('click on submit button', () => {
  LoginPage.submit();
});

When('I should see error message', () => {
  LoginPage.shouldShowNotFoundMessage();
});

Then('I click X button and modal should be closed', () => {
  LoginPage.closeModal();
});

Given('I visit the top page and I see Signin and Signup button', () => {
  LoginPage.visitTopPage();
});

When('I click Signin button', () => {
  LoginPage.clickSigninButton();
});

When('I see a modal screen', () => {
  LoginPage.showUpModal();
});

When('I fill email with {string}', email => {
  LoginPage.fillEmail(email);
});

When('I fill password with {string}', password => {
  LoginPage.fillPassword(password);
});

When('click on submit button', () => {
  LoginPage.submit();
});

Then('I should see a user page', () => {
  LoginPage.shouldSeeUserPage();
});
