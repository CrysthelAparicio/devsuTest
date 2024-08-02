Feature: Add a new pet to the store

  Scenario: Happy Path: Add a new pet
    Given I have a valid new pet data
    When  I add the pet to the store
    Then  The response status should be 200
    And   The response should contain the created pet data

  Scenario: SAD PATH: Add a new pet - Invalid Data
    Given I have an invalid new pet data
    When  I add the pet to the store
    Then  The response status should be 500
    And   The response should contain an error message containing "something bad happened"

