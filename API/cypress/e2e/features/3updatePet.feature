Feature: Update a pet in the store with form data

  Scenario: Happy Path: Update a pet
    Given I have a valid pet ID and new form data
    When  I update the pet with the form data
    Then  The response status should be 200
    And   The pet should be updated successfully

  Scenario:SAD PATH: Update a pet - Invalid Data
    Given I have an invalid pet ID or invalid form data
    When  I update the pet with the form data
    Then  The response status should be 404
    And   The response should contain an error message containing "not found"
