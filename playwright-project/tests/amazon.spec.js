import { test } from '@playwright/test';
import HomePage from '../pages/HomePage.js';
import SearchResultsPage from '../pages/SearchResultsPage.js';
import products from '../test-data/products.json' assert { type: 'json' };

test.describe('Amazon Search Tests', () => {
    test('Add iPhone to cart', async ({ page }) => {
        const homePage = new HomePage(page);
        const searchPage = new SearchResultsPage(page);
        await homePage.search(products.iphone.searchText);
        await searchPage.searchAndValidate();
    });

    test('Add Samsung Galaxy to cart', async ({ page }) => {
        const homePage = new HomePage(page);
        const searchPage = new SearchResultsPage(page);
        await homePage.search(products.galaxy.searchText);
        await searchPage.searchAndValidate();
    });
});
