export default class BasePage {
    constructor(page) {
        this.page = page;
    }

    async navigate(url) {
        await this.page.goto(url);
    }

    async click(locator) {
        await locator.click();
    }

    async fill(locator, text) {
        await locator.fill(text);
    }

    async getText(locator) {
        return await locator.textContent();
    }

    async waitForDomLoaded() {
        await this.page.waitForLoadState('domcontentloaded');
    }
}
