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
  "duration": 13777382800,
  "status": "passed"
});
formatter.match({
  "location": "CountSubscriptionSteps.opening_the_webpage_and_logs_in()"
});
formatter.result({
  "duration": 19087126900,
  "status": "passed"
});
formatter.match({
  "location": "CountSubscriptionSteps.user_searches_a_journal_and_saves()"
});
formatter.result({
  "duration": 9939526200,
  "status": "passed"
});
formatter.match({
  "location": "CountSubscriptionSteps.user_closes_the_webpage()"
});
formatter.result({
  "duration": 863337600,
  "status": "passed"
});
});