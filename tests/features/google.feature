Feature: Google Search

  Scenario: Search for Google Office
    Given I open the Google homepage
    When I type "Google Office" in the search box
    And I press Enter
    Then I should be redirected to the search results page
