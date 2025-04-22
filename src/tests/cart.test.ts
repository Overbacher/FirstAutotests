import { test, expect } from '@playwright/test';
import LoginPage from '../pages/loginPage';
import InventoryPage from '../pages/inventoryPage';
import CartPage from '../pages/cartPage';

test.describe('Тесты работы корзины покупок', () => {
    let loginPage: LoginPage;
    let inventoryPage: InventoryPage;
    let cartPage: CartPage;

    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page);
        await loginPage.navigate('https://www.saucedemo.com');
        await loginPage.login('standard_user', 'secret_sauce');
    });

    test('Добавляем товар в корзину', async ({ page }) => {
        inventoryPage = new InventoryPage(page);
        
        await inventoryPage.addBackpackToCart();
        await expect(page.locator('[data-test="shopping-cart-badge"]')).toHaveText('1');
    });

    test('Убираем товар из корзины с главной страницы', async ({ page }) => {
        inventoryPage = new InventoryPage(page);
        
        await inventoryPage.addBackpackToCart();
        await inventoryPage.removeBackpackFromCart();
        await expect(page.locator('.shopping_cart_badge')).toBeHidden();
    });

    test('Убираем товар из корзины с страницы корзины', async ({ page }) => {
        inventoryPage = new InventoryPage(page);
        cartPage = new CartPage(page);
        
        await inventoryPage.addBackpackToCart();
        await inventoryPage.goToShoppingCart();
        await cartPage.removeBackpackFromCart();
        await expect(page.locator('.shopping_cart_badge')).toBeHidden();
    });
});