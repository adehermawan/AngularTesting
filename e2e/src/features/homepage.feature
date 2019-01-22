Feature: Homepage
  Scenario: Type in a search-term
    Given I am on the angular.io site
    When I type "foo" into the search input field
    Then I should see some results in the search overlay
  
  Scenario: Check button Get Started
    Given I am on the angular.io site
    When I click button Get Started
    Then I should on tutorial page

  Scenario: Check features menu
    Given I am on the angular.io site
    When I click "Features" menu
    Then I should on the Features & Benefits page

  Scenario: Check events menu
    Given I am on the angular.io site
    When I click "Events" menu
    Then I should on the Events page