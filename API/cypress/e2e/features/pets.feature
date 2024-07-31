Feature: Pet Store Management

   Scenario: Add a new pet to the store
    Given A user sends a POST request to add a pet
    Then  The response status should be 200
    Then  The response should contain the created pet data
