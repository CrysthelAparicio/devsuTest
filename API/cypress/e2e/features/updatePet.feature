Feature: Update a pet in the store with form data

  Scenario: Update a pet - Happy Path
    Given I have a valid pet ID and new form data
    When I update the pet with the form data
    Then the response status should be 200
    And the pet should be updated successfully

  Scenario: Update a pet - Invalid Data
    Given I have an invalid pet ID or invalid form data
    When I update the pet with the form data
    Then the response status should be 404
    And the response should contain an error message containing "not found"
