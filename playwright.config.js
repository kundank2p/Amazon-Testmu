import { defineConfig } from '@playwright/test';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.resolve(__dirname, '.env') });

export default defineConfig({
    testDir: './tests',
    fullyParallel: process.env.CI ? false : true,
    workers: process.env.CI ? 1 : 2,
    timeout: 60000,
    use: {
        baseURL: process.env.BASE_URL,
        headless: process.env.HEADLESS === 'true',
        screenshot: 'only-on-failure',
        video: 'retain-on-failure',
        trace: 'retain-on-failure',
    },
    reporter: [['html'], ['list']],
});
