Feature: Find a pet by ID

  Scenario: Happy Path: Find a pet by ID
    Given I have a valid pet ID
    When I search for the pet by ID
    Then the response status should be 200
    And the pet details should match the added pet

  Scenario:SAD PATH: Find a pet by ID - Invalid ID
    Given I have an invalid pet ID
    When I search for the pet by ID
    Then the response status should be 404
    And the response should contain an error message containing "Pet not found"
