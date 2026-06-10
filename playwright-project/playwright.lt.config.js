import { defineConfig } from '@playwright/test';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Explicitly point to the .env file
dotenv.config({ path: path.resolve(__dirname, '.env') });

// Clean string formatting to remove any accidental spaces/newlines from the env file
const username = process.env.LT_USERNAME?.trim();
const accessKey = process.env.LT_ACCESS_KEY?.trim();

if (!username || !accessKey) {
  console.error('\n❌ CRITICAL: LT_USERNAME or LT_ACCESS_KEY is missing from your .env file!\n');
  process.exit(1); 
}

const ltCapabilities = {
  browserName: 'Chrome',
  browserVersion: 'latest',
  'LT:Options': {
    platform: 'Windows 10',
    build: process.env.LT_BUILD_NAME ,
    project: 'Amazon Cart Automation',
    user: username,
    accessKey: accessKey,
    video: true,
    network: true,
    console: true,
    geoLocation: 'IN', 
    tunnel: false,
    terminal: true,
    commandLog: true
  },
};

const wsEndpoint =
  'wss://cdp.lambdatest.com/playwright?capabilities=' +
  encodeURIComponent(JSON.stringify(ltCapabilities));

export default defineConfig({
  testDir: './tests',
  fullyParallel: false, // Forces predictable sequential execution during debugging
  workers: 1, 
  retries: 0,
  timeout: 60000, 

  reporter: [['list'], ['html', { outputFolder: 'reports/lt-report', open: 'never' }]],

  use: {
    baseURL: process.env.BASE_URL,
    screenshot: 'on',
    video: 'on',
    trace: 'on',
    // Hard connection timeout: abort if cloud connection takes more than 20 seconds
    connectOptions: { 
      wsEndpoint,
      timeout: 120000 
    },
  },

  projects: [{ name: 'lambdatest-chrome' }],
  outputDir: 'test-results/lt',
});