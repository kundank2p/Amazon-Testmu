import { defineConfig } from '@playwright/test';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.resolve(__dirname, '.env') });

const username = process.env.LT_USERNAME?.trim();
const accessKey = process.env.LT_ACCESS_KEY?.trim();

if (!username || !accessKey) {
    console.error('\nLT_USERNAME or LT_ACCESS_KEY is missing from your .env file!\n');
    process.exit(1);
}

const ltCapabilities = {
    browserName: 'Chrome',
    browserVersion: 'latest',
    'LT:Options': {
        platform: 'Windows 10',
        build: process.env.LT_BUILD_NAME,
        project: 'Amazon Cart Automation',
        user: username,
        accessKey: accessKey,
        video: true,
        network: true,
        console: true,
        geoLocation: 'IN',
        tunnel: false,
        terminal: true,
        commandLog: true,
    },
};

const wsEndpoint =
    'wss://cdp.lambdatest.com/playwright?capabilities=' +
    encodeURIComponent(JSON.stringify(ltCapabilities));

export default defineConfig({
    testDir: './tests',
    fullyParallel: false,
    workers: 1,
    retries: 0,
    timeout: 60000,

    reporter: [['list'], ['html', { outputFolder: 'reports/lt-report', open: 'never' }]],

    use: {
        baseURL: process.env.BASE_URL,
        screenshot: 'off',
        trace: 'off',
        video: 'off',
        connectOptions: {
            wsEndpoint,
            timeout: 120000,
        },
    },

    projects: [{ name: 'lambdatest-chrome' }],
    outputDir: 'test-results/lt',
});
