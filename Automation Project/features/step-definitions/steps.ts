import { Given, When, Then } from '@wdio/cucumber-framework';
import AutomationPracticePage from '../PageObject/pageobject.ts';
import { expect } from '@wdio/globals';

Given(`I open the Automation Practice page`, async () => {
    await AutomationPracticePage.open();
});

When(`I select the radio button option {string}`, async (option: string) => {
    await AutomationPracticePage.selectRadioButton(option);
});

Then(`the selected radio button should be {string}`, async (option: string) => {
    const isSelected = await AutomationPracticePage.isRadioButtonSelected(option);
    await expect(isSelected).toEqual(true);
});

When(`I select {string} from the dropdown menu`, async (option: string) => {
    await AutomationPracticePage.selectFromDropdown(option);
});

Then(`the selected option should be {string}`, async (option: string) => {
    const selectedOption = await AutomationPracticePage.getSelectedDropdownValue();
    await expect(selectedOption).toEqual(option.toLowerCase());
});

When(`I check the checkbox for {string}`, async (option: string) => {
    await AutomationPracticePage.checkCheckbox(option);
});

Then(`the selected checkboxes should include {string} and {string}`, async (option1: string, option2: string) => {
    const isSelected1 = await AutomationPracticePage.isCheckboxSelected(option1);
    const isSelected2 = await AutomationPracticePage.isCheckboxSelected(option2);
    await expect(isSelected1).toEqual(true);
    await expect(isSelected2).toEqual(true);
});

When(`I view the web table`, async () => {
    await AutomationPracticePage.scrollToWebTable();
});

Then(`I should see {string} in the table`, async (text: string) => {
    const isVisible = await AutomationPracticePage.isTextInTableVisible(text);
    await expect(isVisible).toEqual(true);
});

When(`I click the {string} button`, async (buttonId: string) => {
    await AutomationPracticePage.clickButton(buttonId);
});

Then(`a new tab should open with the URL {string}`, async (expectedUrl: string) => {
    const windows = await browser.getWindowHandles();
    await browser.switchToWindow(windows[1]);
    const currentUrl = await browser.getUrl();
    await expect(currentUrl).toEqual(expectedUrl);
});

When(`I enter {string} in the alert input field`, async (input: string) => {
    await AutomationPracticePage.setAlertInput(input);
    await browser.pause(10000);
});

When(`I click the Alert button`, async () => {
    await AutomationPracticePage.alertButton.click();
    const IsOpen = await browser.isAlertOpen();
    await expect(IsOpen).toEqual(true);


    // const alertText = await AutomationPracticePage.getAlertText();
    // await expect(alertText).toEqual("Hello Test User, share this practice page and share your knowledge");
    // await AutomationPracticePage.acceptAlert();
});

Then(`the alert should display the message {string}`, async (message: string) => {
    const alertText = await AutomationPracticePage.getAlertTexts();
    await expect(alertText).toEqual(message);
    await AutomationPracticePage.acceptAlert();
});
