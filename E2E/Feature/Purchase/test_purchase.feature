Feature: Purchase

  Scenario Outline: purchase successfull
    Given A user are logged in
    When A user adds <cant> products to cart
    When A user clicks on shopping cart button
    When A user clicks on checkout button
    When user enters <firstName> on first name input
    When user enters <lastName> on last name input
    When user enters <postalCode> on postal code input
    When A user clicks on continue button
    When A user clicks on finish button
    Then A user sees <text> text
    Examples:
      | firstName | lastName | postalCode | text                      | cant |
      | Crysthel  | Aparicio | 0000       | Thank you for your order! | 2    |