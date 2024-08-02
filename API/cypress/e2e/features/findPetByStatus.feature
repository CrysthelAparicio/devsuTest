Feature: Find pets by status

  Scenario: Find pets by status - Happy Path
    Given I have a valid status
    When I search for pets by status "sold"
    Then the response status should be 200
    And the list of pets should include the added pet "sold"

  