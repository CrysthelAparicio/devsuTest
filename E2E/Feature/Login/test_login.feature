Feature: Login

  Scenario: login successfull
    Given A user goes to visit web site
    When A user enters a username
    When A user enters a password
    When A user clicks on login button
    Then A user sees swag labs title

  