Feature: Google Search

  Scenario: Search for Cqlsys mohali
    Given I open the Google homepage
    When I type "Cqlsys mohali" in the search box
    And I press Enter
    Then I should be redirected to the search results page
