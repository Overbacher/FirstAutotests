import { test, expect } from '@playwright/test';
import LoginPage from '../pages/loginPage';
import InventoryPage from '../pages/inventoryPage';

test.describe('Тесты входа на сайт', () => {
    let loginPage: LoginPage;
    let inventoryPage: InventoryPage;

    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page);
        await loginPage.navigate('https://www.saucedemo.com');
    });

    test('Успешный логин с стандартными логином и паролем', async ({ page }) => {
        inventoryPage = new InventoryPage(page);
        
        await loginPage.login('standard_user', 'secret_sauce');
        await inventoryPage.verifyPageLoaded();
    });

    test('Ошибка при входе с неверным паролем', async () => {
        await loginPage.login('invalid_user', '1122334455');
        await loginPage.verifyErrorMessage('Epic sadface: Username and password do not match any user in this service');
    });
});