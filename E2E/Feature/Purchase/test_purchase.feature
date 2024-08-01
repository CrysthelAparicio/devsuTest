Feature: Purchase

  Scenario: purchase successfull
    Given A user are logged in
    When A user adds "2" products to cart
    When A user clicks on shopping cart button
    When A user clicks on checkout button
    When user enters "Crysthel" on first name input
    When user enters "Aparicio" on last name input
    When user enters "0000" on postal code input
    When A user clicks on continue button
    When A user clicks on finish button
    Then A user sees "Thank you for your order!" text
  