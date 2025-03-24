Feature: Automation Practice Page Testing

  Scenario: Select a radio button
    Given I open the Automation Practice page
    When I select the radio button option "Radio2"
    Then the selected radio button should be "Radio2"

  Scenario: Select an option from the dropdown
    Given I open the Automation Practice page
    When I select "Option3" from the dropdown menu
    Then the selected option should be "Option3"

  Scenario: Check multiple checkboxes
    Given I open the Automation Practice page
    When I check the checkbox for "Option1"
    When  I check the checkbox for "Option3"
    Then the selected checkboxes should include "Option1" and "Option3"

  Scenario: Verify table content
    Given I open the Automation Practice page
    When I view the web table
    Then I should see "Engineer" in the table

  Scenario: Handle a new tab
    Given I open the Automation Practice page
    When I click the "Open Tab" button
    Then a new tab should open with the URL "https://www.qaclickacademy.com/"

  Scenario: Handle an alert
    Given I open the Automation Practice page
    When I enter "Test User" in the alert input field
    When  I click the Alert button
    Then the alert should display the message "Hello Test User, share this practice page and share your knowledge"
