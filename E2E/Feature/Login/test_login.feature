Feature: Login

  Scenario:  login successfull
    Given A user goes to visit web site
    When A user enters a username
    When A user enters a password
    When A user clicks on login button
    Then A user sees swag labs title

  Scenario: SAD PATH: Login failed when password is required
    Given A user goes to visit web site
    When A user enters a username
    When A user clicks on login button
    Then A user validate password is required message

  Scenario: SAD PATH: Login failed when username is required
    Given A user goes to visit web site
    When A user clicks on login button
    Then A user validate username is required message

  Scenario: SAD PATH: login failed when username and password are wrong
    Given A user goes to visit web site
    When A user enters a username wrong
    When A user enters a password wrong
    When A user clicks on login button
    Then A user validate username and password message are wrong