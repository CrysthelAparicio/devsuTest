Feature: Pet Store Management

  Scenario: Successfully adding a pet to the store
    Given Add a new pet
    # When I add a new pet with valid data
    # Then the pet is successfully added to the store
    # And the server response is 200

  # Scenario: Attempt to add a pet with invalid data
  #   Given the pet store is available
  #   When I add a new pet with invalid data
  #   Then the pet is not added to the store
  #   And the server response is not 200

  # Scenario: Successfully retrieving a pet by ID
  #   Given a pet with a specific ID exists in the store
  #   When I retrieve the pet by its ID
  #   Then the pet's information is returned correctly
  #   And the server response is 200

  # Scenario: Attempt to retrieve a pet with a non-existent ID
  #   Given a pet with the specified ID does not exist
  #   When I try to retrieve the pet by that ID
  #   Then the server response indicates the pet does not exist
  #   And the server response is 404

  # Scenario: Successfully updating a pet's name and status
  #   Given a pet with a specific ID exists in the store
  #   When I update the pet's name and status to "sold"
  #   Then the update is performed successfully
  #   And the server response is 200

  # Scenario: Attempt to update a pet with invalid data
  #   Given a pet with a specific ID exists in the store
  #   When I attempt to update the pet with invalid data
  #   Then the update is not performed
  #   And the server response is not 200

  # Scenario: Successfully searching for pets by status
  #   Given there are pets in the store with the status "sold"
  #   When I search for pets with the status "sold"
  #   Then the pets with the status "sold" are returned
  #   And the server response is 200

  # Scenario: Attempt to search for pets with an invalid status
  #   Given an invalid status is used for the search
  #   When I attempt to search for pets with that invalid status
  #   Then the server response indicates an error
  #   And the server response is not 200