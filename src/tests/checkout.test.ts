import { test, expect } from '@playwright/test';
import LoginPage from '../pages/loginPage';
import InventoryPage from '../pages/inventoryPage';
import CartPage from '../pages/cartPage';
import CheckoutPage from '../pages/checkoutPage';

test.describe('Тест завершения покупки', () => {
    let loginPage: LoginPage;
    let inventoryPage: InventoryPage;
    let cartPage: CartPage;
    let checkoutPage: CheckoutPage;

    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page);
        await loginPage.navigate('https://www.saucedemo.com');
        await loginPage.login('standard_user', 'secret_sauce');
    });

    test('Совершаем покупку', async ({ page }) => {
        inventoryPage = new InventoryPage(page);
        checkoutPage = new CheckoutPage(page);
        cartPage = new CartPage(page);

        await inventoryPage.addBackpackToCart();
        await inventoryPage.goToShoppingCart();
        await cartPage.clickCheckoutButton();
        await checkoutPage.checkout('Lois', 'Buttler', '111121');
        await checkoutPage.checkoutReady();
    });

});