import { Page, expect } from '@playwright/test';
import BasePage from './mainPage';

export default class CartPage extends BasePage {
    constructor(page: Page) {
        super(page);
    }

    private readonly removeBackpackButton = '[data-test="remove-sauce-labs-backpack"]';
    private readonly checkoutButton = '[data-test="checkout"]';

    async removeBackpackFromCart() {
        await expect(this.page.locator(this.removeBackpackButton)).toBeVisible();
        await this.page.click(this.removeBackpackButton);
    }

    async clickCheckoutButton() {
        await this.page.click(this.checkoutButton);
    }
}