Feature: Pet Store Management

   Scenario: Add a new pet to the store
    Given  A user sends a POST request to add a pet
    Then   The response status should be 200
    Then   The response should contain the created pet data

   Scenario: Find pet by ID
    Given  A user sends a Get request to find a pet by ID
    When   The response status should be 200
    Then   The pet details should match the added pet

   Scenario: Find pets by status
    Given  A user sends a Get request to find a pet by status "available"
    When   The response status should be 200
    Then   The list of pets should include the added pet

   Scenario: Update a pet in the store with form data
    Given  A user sends a POST request to update a pet with new details
    When   The response status should be 200
    Then   The pet should be updated successfully
