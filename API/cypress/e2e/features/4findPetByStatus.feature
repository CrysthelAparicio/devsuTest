Feature: Find pets by status

  Scenario: Happy Path: Find pets by status - Happy Path
    Given I have a valid status
    When  I search for pets by status "sold"
    Then  The response status should be 200
    And   The list includes the modified pet "sold"

  