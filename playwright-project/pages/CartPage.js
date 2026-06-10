import { expect } from '@playwright/test';
import BasePage from './BasePage.js';

export default class CartPage extends BasePage {

    constructor(page) {
        super(page);
        this.cartCount =
            page.locator('#nav-cart-count');
    }

    async verifyCartHasItems() {
        const count =
            await this.cartCount.textContent();

        expect(
            Number(count)
        ).toBeGreaterThan(0);
    }

    async getCartCount() {

        return await this.cartCount.textContent();
    }
}