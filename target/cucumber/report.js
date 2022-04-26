$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/Bank\u0026CashNewAccount.feature");
formatter.feature({
  "line": 1,
  "name": "Techfios bank and cash New Account Functionality",
  "description": "",
  "id": "techfios-bank-and-cash-new-account-functionality",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 7,
  "name": "User should be able to login with valid credentials and open a new account",
  "description": "",
  "id": "techfios-bank-and-cash-new-account-functionality;user-should-be-able-to-login-with-valid-credentials-and-open-a-new-account",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 6,
      "name": "@TF_bank\u0026Cash"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "User enters username as \"\u003cusername\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "User enters password as \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "User clicks on \"SignIn\" button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User should land on Dashboard page",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "User clicks on \"bank\u0026Cash\" button",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User clicks on \"newAccount\" button",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User should land on the new account page",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "User enters account title as \"\u003caccountTitle\u003e\" in accounts page",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User enters description as \"\u003cdescription\u003e\" in accounts page",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User enters initial balance as \"\u003cinitialBalance\u003e\" in accounts page",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "User enters account number as \"\u003caccountNumber\u003e\" in accounts page",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "User enters contact person as \"\u003ccontactPerson\u003e\" in accounts page",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "User enters phone number as \"\u003cphone\u003e\" in accounts page",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "User enters internet banking URL as \"\u003cinternetBankingURL\u003e\" in accounts page",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "User clicks on \"submit\" button",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "User should be able to validate account created successfully",
  "keyword": "Then "
});
formatter.examples({
  "line": 25,
  "name": "",
  "description": "",
  "id": "techfios-bank-and-cash-new-account-functionality;user-should-be-able-to-login-with-valid-credentials-and-open-a-new-account;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "accountTitle",
        "description",
        "initialBalance",
        "accountNumber",
        "contactPerson",
        "phone",
        "internetBankingURL"
      ],
      "line": 26,
      "id": "techfios-bank-and-cash-new-account-functionality;user-should-be-able-to-login-with-valid-credentials-and-open-a-new-account;;1"
    },
    {
      "cells": [
        "demo@techfios.com",
        "abc123",
        "checking account",
        "Prabin account",
        "100000",
        "0513000",
        "Ryan",
        "817636",
        "https://www.bankofamerica.com"
      ],
      "line": 27,
      "id": "techfios-bank-and-cash-new-account-functionality;user-should-be-able-to-login-with-valid-credentials-and-open-a-new-account;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 2415314600,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User is on the techfios login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDefinition.user_is_on_the_techfios_login_page()"
});
formatter.result({
  "duration": 738252499,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "User should be able to login with valid credentials and open a new account",
  "description": "",
  "id": "techfios-bank-and-cash-new-account-functionality;user-should-be-able-to-login-with-valid-credentials-and-open-a-new-account;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 6,
      "name": "@TF_bank\u0026Cash"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "User enters username as \"demo@techfios.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "User enters password as \"abc123\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "User clicks on \"SignIn\" button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User should land on Dashboard page",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "User clicks on \"bank\u0026Cash\" button",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User clicks on \"newAccount\" button",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User should land on the new account page",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "User enters account title as \"checking account\" in accounts page",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User enters description as \"Prabin account\" in accounts page",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User enters initial balance as \"100000\" in accounts page",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "User enters account number as \"0513000\" in accounts page",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "User enters contact person as \"Ryan\" in accounts page",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "User enters phone number as \"817636\" in accounts page",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "User enters internet banking URL as \"https://www.bankofamerica.com\" in accounts page",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "User clicks on \"submit\" button",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "User should be able to validate account created successfully",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "demo@techfios.com",
      "offset": 25
    }
  ],
  "location": "LoginStepDefinition.user_enters_username_as(String)"
});
formatter.result({
  "duration": 2079517200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc123",
      "offset": 25
    }
  ],
  "location": "LoginStepDefinition.user_enters_password_as(String)"
});
formatter.result({
  "duration": 2050295901,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SignIn",
      "offset": 16
    }
  ],
  "location": "LoginStepDefinition.user_clicks_on_button(String)"
});
formatter.result({
  "duration": 2611281700,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_should_land_on_Dashboard_page()"
});
formatter.result({
  "duration": 81217099,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "bank\u0026Cash",
      "offset": 16
    }
  ],
  "location": "LoginStepDefinition.user_clicks_on_button(String)"
});
formatter.result({
  "duration": 2121889700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "newAccount",
      "offset": 16
    }
  ],
  "location": "LoginStepDefinition.user_clicks_on_button(String)"
});
formatter.result({
  "duration": 1289296199,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_should_land_on_the_new_account_page()"
});
formatter.result({
  "duration": 44188700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "checking account",
      "offset": 30
    }
  ],
  "location": "LoginStepDefinition.user_enters_account_title_as_in_accounts_page(String)"
});
formatter.result({
  "duration": 1060809201,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Prabin account",
      "offset": 28
    }
  ],
  "location": "LoginStepDefinition.user_enters_description_as_in_accounts_page(String)"
});
formatter.result({
  "duration": 1139260801,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "100000",
      "offset": 32
    }
  ],
  "location": "LoginStepDefinition.user_enters_initial_balance_as_in_accounts_page(String)"
});
formatter.result({
  "duration": 1080064201,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0513000",
      "offset": 31
    }
  ],
  "location": "LoginStepDefinition.user_enters_account_number_as_in_accounts_page(String)"
});
formatter.result({
  "duration": 1069065200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Ryan",
      "offset": 31
    }
  ],
  "location": "LoginStepDefinition.user_enters_contact_person_as_in_accounts_page(String)"
});
formatter.result({
  "duration": 1164403399,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "817636",
      "offset": 29
    }
  ],
  "location": "LoginStepDefinition.user_enters_phone_number_as_in_accounts_page(String)"
});
formatter.result({
  "duration": 1095660100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.bankofamerica.com",
      "offset": 37
    }
  ],
  "location": "LoginStepDefinition.user_enters_internet_banking_URL_as_in_accounts_page(String)"
});
formatter.result({
  "duration": 1167812999,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "submit",
      "offset": 16
    }
  ],
  "location": "LoginStepDefinition.user_clicks_on_button(String)"
});
formatter.result({
  "duration": 2794779700,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_should_be_able_to_validate_account_created_successfully()"
});
formatter.result({
  "duration": 58338899,
  "status": "passed"
});
formatter.after({
  "duration": 637667699,
  "status": "passed"
});
});