# AngularTesting
Demonstrates testing of an Angular app with Protractor and Cucumber.

## Idea
Test specifications are written in .feature files, expressing each Scenario with the Given, When, Then keywords.

In this case we will testing for angular website(https://angular.io)  and then search keyword in search input to see some results from the input form.

Feature: Search
  Scenario: Type in a search-term
    Given I am on the angular.io site
    When I type "foo" into the search input field
    Then I should see some results in the search overlay

## Running unit tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).