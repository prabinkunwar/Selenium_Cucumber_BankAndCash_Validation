Feature: Techfios bank and cash New Account Functionality

  Background: 
    Given User is on the techfios login page

  @TF_bank&Cash
  Scenario Outline: User should be able to login with valid credentials and open a new account
    When User enters username as "<username>"
    When User enters password as "<password>"
    And User clicks on "SignIn" button
    Then User should land on Dashboard page
    And User clicks on "bank&Cash" button
    And User clicks on "newAccount" button
    Then User should land on the new account page
    And User enters account title as "<accountTitle>" in accounts page
    And User enters description as "<description>" in accounts page
    And User enters initial balance as "<initialBalance>" in accounts page
    And User enters account number as "<accountNumber>" in accounts page
    And User enters contact person as "<contactPerson>" in accounts page
    And User enters phone number as "<phone>" in accounts page
    And User enters internet banking URL as "<internetBankingURL>" in accounts page
    And User clicks on "submit" button
    Then User should be able to validate account created successfully

    Examples: 
      | username          | password | accountTitle     | description    | initialBalance | accountNumber | contactPerson | phone      | internetBankingURL            |
      | demo@techfios.com | abc123   | checking account | Prabin account |         100000 |       0513000 | Ryan          | 817636		 | https://www.bankofamerica.com |
