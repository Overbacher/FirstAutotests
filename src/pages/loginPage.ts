import { Page, expect } from '@playwright/test';
import BasePage from './mainPage';

export default class LoginPage extends BasePage {
    constructor(page: Page) {
        super(page);
    }

    // Selectors
    private readonly usernameInput = '#user-name';
    private readonly passwordInput = '#password';
    private readonly loginButton = '#login-button';
    private readonly errorMessage = '[data-test="error"]';

    // Methods
    async enterUsername(username: string) {
        await this.page.fill(this.usernameInput, username);
    }

    async enterPassword(password: string) {
        await this.page.fill(this.passwordInput, password);
    }

    async clickLoginButton() {
        await this.page.click(this.loginButton);
    }

    async verifyErrorMessage(message: string) {
        await expect(this.page.locator(this.errorMessage)).toHaveText(message);
    }

    async login(username: string, password: string) {
        await this.enterUsername(username);
        await this.enterPassword(password);
        await this.clickLoginButton();
    }
}