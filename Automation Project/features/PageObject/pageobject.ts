class AutomationPracticePage {
    radioButtonOption(option: string) {
        return $(`[value="${option.toLowerCase()}"]`);
    }    

    get dropdownMenu() {
        return $('#dropdown-class-example');
    }

    checkbox(option: string) {
        return $(`#checkBox${option}`);
    }

    get webTable() {
        return $(`(//table)[2]`);
    }

    tableCellText(text: string) {
        return $(`(//table)[2]//*[text()='${text}']`);
    }

    button(id: string) {
        return $(`#${id.toLowerCase().replace(' ', '')}`);
    }

    get alertInput() {
        return $('#name');
    }

    get alertButton() {
        return $('#alertbtn');
    }

    async open() {
        await browser.url('https://rahulshettyacademy.com/AutomationPractice/');
    }

    async selectRadioButton(option: string) {
        await this.radioButtonOption(option).click();
    }

    async isRadioButtonSelected(option: string): Promise<boolean> {
        return await this.radioButtonOption(option).isSelected();
    }

    async selectFromDropdown(option: string) {
        await this.dropdownMenu.selectByVisibleText(option);
    }

    async getSelectedDropdownValue(): Promise<string> {
        return await this.dropdownMenu.getValue();
    }

    async checkCheckbox(option: string) {
        await this.checkbox(option).click();
    }

    async isCheckboxSelected(option: string): Promise<boolean> {
        return await this.checkbox(option).isSelected();
    }

    async scrollToWebTable() {
        await this.webTable.scrollIntoView();
    }

    async isTextInTableVisible(text: string): Promise<boolean> {
        return await this.tableCellText(text).isDisplayed();
    }

    async clickButton(buttonId: string) {
        await this.button(buttonId).click();
    }

    async getAlertTexts(): Promise<string> {
        return await browser.getAlertText();
    }

    async acceptAlert() {
        await browser.acceptAlert();
    }

    async setAlertInput(value: string) {
        await this.alertInput.setValue(value);
    }
}

export default new AutomationPracticePage();
