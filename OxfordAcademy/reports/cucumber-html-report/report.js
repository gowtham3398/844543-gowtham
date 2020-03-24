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
formatter.scenario({
  "line": 5,
  "name": "Registering into Oxford Academy",
  "description": "",
  "id": "oxford-academy-website;registering-into-oxford-academy",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@tc01_Oxford_Academy_register"
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
  "name": "register the details",
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
  "duration": 16993767736,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.open_the_Oxford_Academy_website()"
});
formatter.result({
  "duration": 29011644580,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.register_the_details()"
});
formatter.result({
  "duration": 13871254245,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.close_the_browser()"
});
formatter.result({
  "duration": 7467704608,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 13,
  "name": "Logging into Oxford Academy",
  "description": "",
  "id": "oxford-academy-website;logging-into-oxford-academy",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 12,
      "name": "@tc02_Oxford_Academy_login"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "the user launch chrome",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "the user opens website",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "The user login using \"\u003cemailId\u003e\" and \"\u003cpassword\u003e\" with vaild and invaild deatils",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "the user closes the browser",
  "keyword": "Then "
});
formatter.examples({
  "line": 20,
  "name": "",
  "description": "",
  "id": "oxford-academy-website;logging-into-oxford-academy;",
  "rows": [
    {
      "cells": [
        "emailId",
        "password"
      ],
      "line": 22,
      "id": "oxford-academy-website;logging-into-oxford-academy;;1"
    },
    {
      "cells": [
        "abcd@gmail.com",
        "kg188754"
      ],
      "line": 23,
      "id": "oxford-academy-website;logging-into-oxford-academy;;2"
    },
    {
      "cells": [
        "kg@gmail.com",
        "gowtham895"
      ],
      "line": 24,
      "id": "oxford-academy-website;logging-into-oxford-academy;;3"
    },
    {
      "cells": [
        "gowtham19980303@gmail.com",
        "Gowtham@98"
      ],
      "line": 25,
      "id": "oxford-academy-website;logging-into-oxford-academy;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 23,
  "name": "Logging into Oxford Academy",
  "description": "",
  "id": "oxford-academy-website;logging-into-oxford-academy;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Oxford_Academy_feature"
    },
    {
      "line": 12,
      "name": "@tc02_Oxford_Academy_login"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "the user launch chrome",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "the user opens website",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "The user login using \"abcd@gmail.com\" and \"kg188754\" with vaild and invaild deatils",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "the user closes the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.the_user_launch_chrome()"
});
formatter.result({
  "duration": 5493154150,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.the_user_opens_website()"
});
formatter.result({
  "duration": 18365304216,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abcd@gmail.com",
      "offset": 22
    },
    {
      "val": "kg188754",
      "offset": 43
    }
  ],
  "location": "LoginSteps.the_user_login_using_and_with_vaild_and_invaild_deatils(String,String)"
});
formatter.result({
  "duration": 8366231560,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.the_user_closes_the_browser()"
});
formatter.result({
  "duration": 5630216676,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Logging into Oxford Academy",
  "description": "",
  "id": "oxford-academy-website;logging-into-oxford-academy;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Oxford_Academy_feature"
    },
    {
      "line": 12,
      "name": "@tc02_Oxford_Academy_login"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "the user launch chrome",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "the user opens website",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "The user login using \"kg@gmail.com\" and \"gowtham895\" with vaild and invaild deatils",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "the user closes the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.the_user_launch_chrome()"
});
formatter.result({
  "duration": 4733212693,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.the_user_opens_website()"
});
formatter.result({
  "duration": 23074566512,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "kg@gmail.com",
      "offset": 22
    },
    {
      "val": "gowtham895",
      "offset": 41
    }
  ],
  "location": "LoginSteps.the_user_login_using_and_with_vaild_and_invaild_deatils(String,String)"
});
formatter.result({
  "duration": 6019538733,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.the_user_closes_the_browser()"
});
formatter.result({
  "duration": 5275332799,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "Logging into Oxford Academy",
  "description": "",
  "id": "oxford-academy-website;logging-into-oxford-academy;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Oxford_Academy_feature"
    },
    {
      "line": 12,
      "name": "@tc02_Oxford_Academy_login"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "the user launch chrome",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "the user opens website",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "The user login using \"gowtham19980303@gmail.com\" and \"Gowtham@98\" with vaild and invaild deatils",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "the user closes the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.the_user_launch_chrome()"
});
formatter.result({
  "duration": 4742108230,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.the_user_opens_website()"
});
formatter.result({
  "duration": 15330779900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "gowtham19980303@gmail.com",
      "offset": 22
    },
    {
      "val": "Gowtham@98",
      "offset": 54
    }
  ],
  "location": "LoginSteps.the_user_login_using_and_with_vaild_and_invaild_deatils(String,String)"
});
formatter.result({
  "duration": 5856725369,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.the_user_closes_the_browser()"
});
formatter.result({
  "duration": 6396764266,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "User editing the profile",
  "description": "",
  "id": "oxford-academy-website;user-editing-the-profile",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 27,
      "name": "@tc3_Oxford_Academy_Edit_profile"
    }
  ]
});
formatter.step({
  "line": 30,
  "name": "I launch the chrome",
  "keyword": "Given "
});
formatter.step({
  "line": 31,
  "name": "I open the website and logs-in",
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "I open the edit personal details page",
  "keyword": "Then "
});
formatter.step({
  "line": 33,
  "name": "I edit and personal details and updates",
  "keyword": "Then "
});
formatter.step({
  "line": 34,
  "name": "I closes the browser",
  "keyword": "And "
});
formatter.match({
  "location": "EditProfileSteps.i_launch_the_chrome()"
});
formatter.result({
  "duration": 4242730980,
  "status": "passed"
});
formatter.match({
  "location": "EditProfileSteps.i_open_the_website_and_logs_in()"
});
formatter.result({
  "duration": 32574172116,
  "status": "passed"
});
formatter.match({
  "location": "EditProfileSteps.i_open_the_edit_personal_details_page()"
});
formatter.result({
  "duration": 24515983303,
  "status": "passed"
});
formatter.match({
  "location": "EditProfileSteps.i_edit_and_personal_details_and_updates()"
});
formatter.result({
  "duration": 15382924850,
  "status": "passed"
});
formatter.match({
  "location": "EditProfileSteps.i_closes_the_browser()"
});
formatter.result({
  "duration": 2265896984,
  "status": "passed"
});
formatter.scenario({
  "line": 37,
  "name": "User deletes the saved search",
  "description": "",
  "id": "oxford-academy-website;user-deletes-the-saved-search",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 36,
      "name": "@tc04_Oxford_Academy_Delete_saved_search"
    }
  ]
});
formatter.step({
  "line": 39,
  "name": "The user should launch the chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 40,
  "name": "user should open the website and logs in",
  "keyword": "When "
});
formatter.step({
  "line": 41,
  "name": "user should open the saved search",
  "keyword": "Then "
});
formatter.step({
  "line": 42,
  "name": "user should delete the saved search",
  "keyword": "Then "
});
formatter.step({
  "line": 43,
  "name": "user should close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "DeleteSavedSearchSteps.the_user_should_launch_the_chrome_browser()"
});
formatter.result({
  "duration": 4983084588,
  "status": "passed"
});
formatter.match({
  "location": "DeleteSavedSearchSteps.user_should_open_the_website_and_logs_in()"
});
formatter.result({
  "duration": 28947503906,
  "status": "passed"
});
formatter.match({
  "location": "DeleteSavedSearchSteps.user_should_open_the_saved_search()"
});
formatter.result({
  "duration": 20753915554,
  "status": "passed"
});
formatter.match({
  "location": "DeleteSavedSearchSteps.user_should_delete_the_saved_search()"
});
formatter.result({
  "duration": 3486357415,
  "status": "passed"
});
formatter.match({
  "location": "DeleteSavedSearchSteps.user_should_close_the_browser()"
});
formatter.result({
  "duration": 2171117673,
  "status": "passed"
});
formatter.scenario({
  "line": 46,
  "name": "User checks if the search is saved",
  "description": "",
  "id": "oxford-academy-website;user-checks-if-the-search-is-saved",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 45,
      "name": "@tc05_Oxford_Academy_count_subscription"
    }
  ]
});
formatter.step({
  "line": 48,
  "name": "launching the browser",
  "keyword": "Given "
});
formatter.step({
  "line": 49,
  "name": "opening the webpage and logs in",
  "keyword": "When "
});
formatter.step({
  "line": 50,
  "name": "user counts the subscription and prints",
  "keyword": "Then "
});
formatter.step({
  "line": 51,
  "name": "user closes the webpage",
  "keyword": "And "
});
formatter.match({
  "location": "CountSubscriptionSteps.launching_the_browser()"
});
formatter.result({
  "duration": 4186720509,
  "status": "passed"
});
formatter.match({
  "location": "CountSubscriptionSteps.opening_the_webpage_and_logs_in()"
});
formatter.result({
  "duration": 28590303868,
  "status": "passed"
});
formatter.match({
  "location": "CountSubscriptionSteps.user_searches_a_journal_and_saves()"
});
formatter.result({
  "duration": 16429168154,
  "status": "passed"
});
formatter.match({
  "location": "CountSubscriptionSteps.user_closes_the_webpage()"
});
formatter.result({
  "duration": 484064347,
  "status": "passed"
});
});