import { Page, expect } from '@playwright/test';
import BasePage from './mainPage';

export default class InventoryPage extends BasePage {
    constructor(page: Page) {
        super(page);
    }

    private readonly inventoryContainer = '[data-test="inventory-container"]';
    private readonly appLogo = '.app_logo';
    private readonly addBackpackButton = '[data-test="add-to-cart-sauce-labs-backpack"]';
    private readonly removeBackpackButton = '[data-test="remove-sauce-labs-backpack"]';
    private readonly shoppinCartBadge = '[data-test="shopping-cart-badge"]';

    async verifyPageLoaded() {
        await expect(this.page.locator(this.inventoryContainer)).toBeVisible();
        await expect(this.page.locator(this.appLogo)).toBeVisible();
    }

    async addBackpackToCart() {
        await expect(this.page.locator(this.addBackpackButton)).toBeVisible();
        await this.page.click(this.addBackpackButton);
    }

    async removeBackpackFromCart() {
        await expect(this.page.locator(this.removeBackpackButton)).toBeVisible();
        await this.page.click(this.removeBackpackButton);
    }

    async goToShoppingCart() {
        await this.page.click(this.shoppinCartBadge);
    }
}