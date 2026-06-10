import { expect } from '@playwright/test';
import BasePage from './BasePage.js';

export default class SearchResultsPage extends BasePage {
    constructor(page) {
        super(page);
        this.productPrices = page.locator('.a-price .a-offscreen');
        this.productLinks = page.locator('[data-component-type="s-search-result"] a.a-link-normal');
    }

    async getDisplayedPrice() {
        await expect(this.productPrices.first()).toBeVisible();
        return await this.productPrices.first().textContent();
    }

    async openFirstProduct() {
        await expect(this.productLinks.first()).toBeVisible({
            timeout: 30000,
        });
        await this.productLinks.first().click();
        await this.waitForDomLoaded();
    }

    async searchAndValidate() {
        const price = await this.getDisplayedPrice();
        console.log(`Product Price: ${price}`);
        await this.openFirstProduct();
        expect(price).not.toBeNull();
        return price;
    }
}
