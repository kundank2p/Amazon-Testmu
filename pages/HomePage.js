class HomePage {
    constructor(page) {
        this.page = page;
        this.searchBox = page.locator('#twotabsearchtextbox');
        this.searchButton = page.locator('#nav-search-submit-button');
    }

    async navigate() {
        await this.page.goto('/');
    }

    async dismissLocationPopup() {
        const dismissButton = this.page.getByRole('button', { name: /dismiss/i });
        try {
            await dismissButton.waitFor({ state: 'visible', timeout: 3000 });
            await dismissButton.click();
        } catch (e) {}
    }

    async searchProduct(productName) {
        await this.searchBox.waitFor({
            state: 'visible',
            timeout: 30000,
        });

        await this.searchBox.fill(productName);
        await this.searchButton.click();
        await this.page.waitForLoadState('domcontentloaded');
    }

    async search(productName) {
        await this.navigate();
        await this.dismissLocationPopup();
        await this.searchProduct(productName);
    }
}

export default HomePage;
