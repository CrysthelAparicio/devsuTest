Feature: Login

  Scenario Outline:  login successfull
    Given A user goes to visit web site
    When A user enters a username <userName>
    When A user enters a password <password>
    When A user clicks on login button
    Then A user sees swag labs title
    Examples:
      | userName      | password     |
      | standard_user | secret_sauce |

  Scenario Outline: SAD PATH: Login failed when password is required
    Given A user goes to visit web site
    When A user enters a username <userName>
    When A user clicks on login button
    Then A user validate password is required <message>
    Examples:
      | userName      | message                            |
      | standard_user | Epic sadface: Password is required |

  Scenario Outline: SAD PATH: Login failed when username is required
    Given A user goes to visit web site
    When A user clicks on login button
    Then A user validate username is required <message>
    Examples:
      | message|
      | Epic sadface: Username is required|

  Scenario Outline: SAD PATH: login failed when username and password are wrong
    Given A user goes to visit web site
    When A user enters a username <userName>
    When A user enters a password <password>
    When A user clicks on login button
    Then A user validate username and password <message> are wrong
    Examples:
      | userName     | password      | message                                                                   |
      | incorretUser | passIncorrect | Epic sadface: Username and password do not match any user in this service |