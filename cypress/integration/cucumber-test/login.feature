Feature: Login to Application

  As a invalid user
  I can not log into application
  As a valid user
  I want to log in into Application

  Scenario: Invalid login
    Given I visit the top page and I see Signin and Signup button
    When I click Signin button
    And I see a modal screen
    When I fill only email with "newTest@test.com" 
    And click on submit button
    And I should see error message
    When I fill email with "not-user-found@test.com"
    And I fill password with "password"
    And click on submit button
    And I should see error message
    Then I click X button and modal should be closed

  Scenario: Valid login
    Given I visit the top page and I see Signin and Signup button
    When I click Signin button
    And I see a modal screen
    And I fill email with "newTest@test.com"
    And I fill password with "password"
    And click on submit button
    Then I should see a user page