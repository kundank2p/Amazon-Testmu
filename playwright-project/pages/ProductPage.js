import { expect } from '@playwright/test';
import BasePage from './BasePage.js';

export default class ProductPage extends BasePage {
    constructor(page) {
        super(page);
        this.productTitle = page.locator('#productTitle');
        this.productPrice = page.locator(
            '#corePriceDisplay_desktop_feature_div .a-price .a-offscreen',
        );
        this.addToCartButton = page.locator('#add-to-cart-button');
    }

    async getTitle() {
        await expect(this.productTitle).toBeVisible();
        return (await this.productTitle.textContent()).trim();
    }

    async getPrice() {
        await expect(this.productPrice).toBeVisible();
        return (await this.productPrice.textContent()).trim();
    }

    async addToCart() {
        await expect(this.addToCartButton).toBeVisible();
        await this.addToCartButton.click();
    }
}
