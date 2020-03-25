$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/main/resources/Feature/OxfordAcademy.Feature");
formatter.feature({
  "line": 2,
  "name": "Oxford Academy Website",
  "description": "",
  "id": "oxford-academy-website",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Oxford_Academy_feature"
    }
  ]
});
formatter.scenarioOutline({
  "line": 5,
  "name": "Registering into Oxford Academy",
  "description": "",
  "id": "oxford-academy-website;registering-into-oxford-academy",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@tc01_Oxford_Academy_Register"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "Launch the Chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "open the Oxford Academy website",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "register using \"\u003cemailId\u003e\" and \"\u003cpassword\u003e\" and \"\u003cconfrimPasswod\u003e\" with vaild and invaild deatils",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "close the browser",
  "keyword": "And "
});
formatter.examples({
  "line": 11,
  "name": "",
  "description": "",
  "id": "oxford-academy-website;registering-into-oxford-academy;",
  "rows": [
    {
      "cells": [
        "emailId",
        "password",
        "confrimPasswod"
      ],
      "line": 13,
      "id": "oxford-academy-website;registering-into-oxford-academy;;1"
    },
    {
      "cells": [
        "abcd@gmail.com",
        "kg188754",
        "kg188754"
      ],
      "line": 14,
      "id": "oxford-academy-website;registering-into-oxford-academy;;2"
    },
    {
      "cells": [
        "kg@gmail.com",
        "gowtham895",
        "gowtham895"
      ],
      "line": 15,
      "id": "oxford-academy-website;registering-into-oxford-academy;;3"
    },
    {
      "cells": [
        "gowtham19980303@gmail.com",
        "Gowtham@98",
        "Gowtham@98"
      ],
      "line": 16,
      "id": "oxford-academy-website;registering-into-oxford-academy;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 14,
  "name": "Registering into Oxford Academy",
  "description": "",
  "id": "oxford-academy-website;registering-into-oxford-academy;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Oxford_Academy_feature"
    },
    {
      "line": 4,
      "name": "@tc01_Oxford_Academy_Register"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "Launch the Chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "open the Oxford Academy website",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "register using \"abcd@gmail.com\" and \"kg188754\" and \"kg188754\" with vaild and invaild deatils",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "RegisterSteps.launch_the_Chrome_browser()"
});
formatter.result({
  "duration": 8958276703,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.open_the_Oxford_Academy_website()"
});
formatter.result({
  "duration": 53642495158,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abcd@gmail.com",
      "offset": 16
    },
    {
      "val": "kg188754",
      "offset": 37
    },
    {
      "val": "kg188754",
      "offset": 52
    }
  ],
  "location": "RegisterSteps.register_using_and_and_with_vaild_and_invaild_deatils(String,String,String)"
});
formatter.result({
  "duration": 26806716267,
  "error_message": "org.junit.ComparisonFailure: expected:\u003c[]\u003e but was:\u003c[The email address is not valid. Please try again.]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:117)\r\n\tat org.junit.Assert.assertEquals(Assert.java:146)\r\n\tat com.oxfordacademy.pageobject.RegisterPage.registerDetails(RegisterPage.java:85)\r\n\tat com.oxfordacademy.stepsdefinition.RegisterSteps.register_using_and_and_with_vaild_and_invaild_deatils(RegisterSteps.java:27)\r\n\tat ✽.Then register using \"abcd@gmail.com\" and \"kg188754\" and \"kg188754\" with vaild and invaild deatils(src/main/resources/Feature/OxfordAcademy.Feature:9)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "RegisterSteps.close_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 15,
  "name": "Registering into Oxford Academy",
  "description": "",
  "id": "oxford-academy-website;registering-into-oxford-academy;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Oxford_Academy_feature"
    },
    {
      "line": 4,
      "name": "@tc01_Oxford_Academy_Register"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "Launch the Chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "open the Oxford Academy website",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "register using \"kg@gmail.com\" and \"gowtham895\" and \"gowtham895\" with vaild and invaild deatils",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "RegisterSteps.launch_the_Chrome_browser()"
});
formatter.result({
  "duration": 20086598109,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.open_the_Oxford_Academy_website()"
});
formatter.result({
  "duration": 64390562390,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "kg@gmail.com",
      "offset": 16
    },
    {
      "val": "gowtham895",
      "offset": 35
    },
    {
      "val": "gowtham895",
      "offset": 52
    }
  ],
  "location": "RegisterSteps.register_using_and_and_with_vaild_and_invaild_deatils(String,String,String)"
});
formatter.result({
  "duration": 7852154818,
  "error_message": "org.junit.ComparisonFailure: expected:\u003c[]\u003e but was:\u003c[The email address is not valid. Please try again.]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:117)\r\n\tat org.junit.Assert.assertEquals(Assert.java:146)\r\n\tat com.oxfordacademy.pageobject.RegisterPage.registerDetails(RegisterPage.java:85)\r\n\tat com.oxfordacademy.stepsdefinition.RegisterSteps.register_using_and_and_with_vaild_and_invaild_deatils(RegisterSteps.java:27)\r\n\tat ✽.Then register using \"kg@gmail.com\" and \"gowtham895\" and \"gowtham895\" with vaild and invaild deatils(src/main/resources/Feature/OxfordAcademy.Feature:9)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "RegisterSteps.close_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 16,
  "name": "Registering into Oxford Academy",
  "description": "",
  "id": "oxford-academy-website;registering-into-oxford-academy;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Oxford_Academy_feature"
    },
    {
      "line": 4,
      "name": "@tc01_Oxford_Academy_Register"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "Launch the Chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "open the Oxford Academy website",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "register using \"gowtham19980303@gmail.com\" and \"Gowtham@98\" and \"Gowtham@98\" with vaild and invaild deatils",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "RegisterSteps.launch_the_Chrome_browser()"
});
formatter.result({
  "duration": 65746814397,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.open_the_Oxford_Academy_website()"
});
formatter.result({
  "duration": 740045,
  "error_message": "java.lang.NullPointerException\r\n\tat com.oxfordacademy.pageobject.RegisterPage.oxfordHomepage(RegisterPage.java:67)\r\n\tat com.oxfordacademy.stepsdefinition.RegisterSteps.open_the_Oxford_Academy_website(RegisterSteps.java:22)\r\n\tat ✽.Then open the Oxford Academy website(src/main/resources/Feature/OxfordAcademy.Feature:8)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "gowtham19980303@gmail.com",
      "offset": 16
    },
    {
      "val": "Gowtham@98",
      "offset": 48
    },
    {
      "val": "Gowtham@98",
      "offset": 65
    }
  ],
  "location": "RegisterSteps.register_using_and_and_with_vaild_and_invaild_deatils(String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "RegisterSteps.close_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 19,
  "name": "Logging into Oxford Academy",
  "description": "",
  "id": "oxford-academy-website;logging-into-oxford-academy",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 18,
      "name": "@tc02_Oxford_Academy_login"
    }
  ]
});
formatter.step({
  "line": 21,
  "name": "the user launch chrome",
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "the user opens website",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "The user login using valid and invalid details",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "the user closes the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.the_user_launch_chrome()"
});
formatter.result({
  "duration": 63372078490,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.the_user_opens_website()"
});
formatter.result({
  "duration": 823249,
  "error_message": "java.lang.NullPointerException\r\n\tat com.oxfordacademy.pageobject.LoginPage.oxfordHomepage(LoginPage.java:52)\r\n\tat com.oxfordacademy.stepsdefinition.LoginSteps.the_user_opens_website(LoginSteps.java:26)\r\n\tat ✽.Then the user opens website(src/main/resources/Feature/OxfordAcademy.Feature:22)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "LoginSteps.the_user_login_using_valid_and_invalid_details()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginSteps.the_user_closes_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 27,
  "name": "User editing the profile",
  "description": "",
  "id": "oxford-academy-website;user-editing-the-profile",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 26,
      "name": "@tc3_Oxford_Academy_Edit_profile"
    }
  ]
});
formatter.step({
  "line": 29,
  "name": "I launch the chrome",
  "keyword": "Given "
});
formatter.step({
  "line": 30,
  "name": "I open the website and logs-in",
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "I open the edit personal details page",
  "keyword": "Then "
});
formatter.step({
  "line": 32,
  "name": "I edit and personal details and updates",
  "keyword": "Then "
});
formatter.step({
  "line": 33,
  "name": "I closes the browser",
  "keyword": "And "
});
formatter.match({
  "location": "EditProfileSteps.i_launch_the_chrome()"
});
formatter.result({
  "duration": 16244110795,
  "status": "passed"
});
formatter.match({
  "location": "EditProfileSteps.i_open_the_website_and_logs_in()"
});
formatter.result({
  "duration": 62908129207,
  "status": "passed"
});
formatter.match({
  "location": "EditProfileSteps.i_open_the_edit_personal_details_page()"
});
formatter.result({
  "duration": 44494195100,
  "status": "passed"
});
formatter.match({
  "location": "EditProfileSteps.i_edit_and_personal_details_and_updates()"
});
formatter.result({
  "duration": 50599952643,
  "status": "passed"
});
formatter.match({
  "location": "EditProfileSteps.i_closes_the_browser()"
});
formatter.result({
  "duration": 911807073,
  "status": "passed"
});
formatter.scenario({
  "line": 36,
  "name": "User deletes the saved search",
  "description": "",
  "id": "oxford-academy-website;user-deletes-the-saved-search",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 35,
      "name": "@tc04_Oxford_Academy_Delete_saved_search"
    }
  ]
});
formatter.step({
  "line": 38,
  "name": "The user should launch the chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 39,
  "name": "user should open the website and logs in",
  "keyword": "When "
});
formatter.step({
  "line": 40,
  "name": "user should open the saved search",
  "keyword": "Then "
});
formatter.step({
  "line": 41,
  "name": "user should delete the saved search",
  "keyword": "Then "
});
formatter.step({
  "line": 42,
  "name": "user should close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "DeleteSavedSearchSteps.the_user_should_launch_the_chrome_browser()"
});
formatter.result({
  "duration": 6317498054,
  "status": "passed"
});
formatter.match({
  "location": "DeleteSavedSearchSteps.user_should_open_the_website_and_logs_in()"
});
formatter.result({
  "duration": 104566511693,
  "status": "passed"
});
formatter.match({
  "location": "DeleteSavedSearchSteps.user_should_open_the_saved_search()"
});
formatter.result({
  "duration": 14805948731,
  "status": "passed"
});
formatter.match({
  "location": "DeleteSavedSearchSteps.user_should_delete_the_saved_search()"
});
formatter.result({
  "duration": 2222153557,
  "status": "passed"
});
formatter.match({
  "location": "DeleteSavedSearchSteps.user_should_close_the_browser()"
});
formatter.result({
  "duration": 2425414887,
  "status": "passed"
});
formatter.scenario({
  "line": 45,
  "name": "User checks if the search is saved",
  "description": "",
  "id": "oxford-academy-website;user-checks-if-the-search-is-saved",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 44,
      "name": "@tc05_Oxford_Academy_count_subscription"
    }
  ]
});
formatter.step({
  "line": 47,
  "name": "launching the browser",
  "keyword": "Given "
});
formatter.step({
  "line": 48,
  "name": "opening the webpage and logs in",
  "keyword": "When "
});
formatter.step({
  "line": 49,
  "name": "user counts the subscription and prints",
  "keyword": "Then "
});
formatter.step({
  "line": 50,
  "name": "user closes the webpage",
  "keyword": "And "
});
formatter.match({
  "location": "CountSubscriptionSteps.launching_the_browser()"
});
formatter.result({
  "duration": 62482117592,
  "status": "passed"
});
formatter.match({
  "location": "CountSubscriptionSteps.opening_the_webpage_and_logs_in()"
});
formatter.result({
  "duration": 731248,
  "error_message": "java.lang.NullPointerException\r\n\tat com.oxfordacademy.pageobject.CountSubscriptionPage.oxfordHomepage(CountSubscriptionPage.java:57)\r\n\tat com.oxfordacademy.stepsdefinition.CountSubscriptionSteps.opening_the_webpage_and_logs_in(CountSubscriptionSteps.java:20)\r\n\tat ✽.When opening the webpage and logs in(src/main/resources/Feature/OxfordAcademy.Feature:48)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "CountSubscriptionSteps.user_searches_a_journal_and_saves()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CountSubscriptionSteps.user_closes_the_webpage()"
});
formatter.result({
  "status": "skipped"
});
});