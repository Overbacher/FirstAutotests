import { Page, expect } from '@playwright/test';
import BasePage from './mainPage';

export default class CheckoutPage extends BasePage {
    constructor(page: Page) {
        super(page);
    }

    private readonly firstNameInput = '[data-test="firstName"]';
    private readonly lastNameInput = '[data-test="lastName"]';
    private readonly postalCodeInput = '[data-test="postalCode"]';
    private readonly continueButton = '[data-test="continue"]';
    private readonly finishButton = '[data-test="finish"]';
    private readonly doneLogo = '[data-test="pony-express"]';

    async checkout(firstname: string, lastname: string, postal: string) {
        await this.page.fill(this.firstNameInput, firstname);
        await this.page.fill(this.lastNameInput, lastname);
        await this.page.fill(this.postalCodeInput, postal);
        await this.page.click(this.continueButton);
        await this.page.click(this.finishButton);
    }

    async checkoutReady(){
        await expect(this.page.locator(this.doneLogo)).toBeVisible();
    }

}