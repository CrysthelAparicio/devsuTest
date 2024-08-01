Feature: Pet Store Management
 
  Background: 
    Given a user sends a POST request to add a new pet
   

  Scenario: Add a new pet to the store
    Then the response status should be 200
    Then the response should contain the created pet data
    And the pet is added successfully

  Scenario: Find a pet by ID
    When a user sends a GET request to find the pet by ID
    Then the response status should be 200
    And the pet details should match the added pet

  Scenario: Find pets by status
    When a user sends a GET request to find pets by status "available"
    Then the response status should be 200
    And the list of pets should include the added pet

  Scenario: Update a pet in the store with form data
    When a user sends a POST request to update the pet with new details
    Then the response status should be 200
    And the pet should be updated successfully
