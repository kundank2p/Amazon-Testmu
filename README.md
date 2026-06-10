# Amazon Playwright Automation Framework

## Overview

This project is an automated testing framework developed using **Playwright with JavaScript** to automate Amazon shopping workflows.

The framework was built as part of an Automation Engineering Assessment and demonstrates:

* End-to-end UI automation
* Page Object Model (POM) design pattern
* Parallel test execution
* Environment configuration using dotenv
* CI/CD integration with GitHub Actions
* LambdaTest Cloud execution
* Reporting, screenshots, videos, and traces

---

## Assignment Scenarios

### Test Case 1

1. Navigate to Amazon India
2. Search for an iPhone device
3. Select a product from search results
4. Add the product to cart
5. Retrieve and print the product price

### Test Case 2

1. Navigate to Amazon India
2. Search for a Galaxy device
3. Select a product from search results
4. Add the product to cart
5. Retrieve and print the product price

---

## Technology Stack

| Component            | Technology              |
| -------------------- | ----------------------- |
| Language             | JavaScript              |
| Automation Framework | Playwright              |
| Design Pattern       | Page Object Model (POM) |
| Test Runner          | Playwright Test         |
| Reporting            | HTML Report             |
| CI/CD                | GitHub Actions          |
| Cloud Execution      | LambdaTest              |

---

## Project Structure

```text
playwright-project
│
├── .github
│   └── workflows
│       └── playwright.yml
│
├── pages
│   ├── BasePage.js
│   ├── HomePage.js
│   ├── SearchResultsPage.js
│   ├── ProductPage.js
│   └── CartPage.js
│
├── test-data
│   └── products.json
│
├── tests
│   └── amazon.spec.js
│
├── utils
│   └── logger.js
│
├── playwright.config.js
├── playwright.lt.config.js
├── package.json
├── .env.example
└── README.md
```

---

## Framework Features

### Page Object Model (POM)

The framework follows the Page Object Model design pattern to:

* Improve maintainability
* Reduce code duplication
* Enhance scalability
* Separate test logic from page interactions

### Parallel Execution

Playwright executes the test scenarios in parallel to improve execution speed and validate concurrent execution capabilities.

### Logging

Custom logging utility is implemented to provide readable execution logs.

### Reporting

The framework generates:

* HTML Reports
* Screenshots on Failure
* Videos on Failure
* Playwright Traces

---

## Local Setup

### Prerequisites

* Node.js 18+
* npm

### Clone Repository

```bash
git clone <repository-url>
cd playwright-project
```

### Install Dependencies

```bash
npm install
```

### Install Playwright Browsers

```bash
npx playwright install
```

---

## Environment Configuration

Create a `.env` file from `.env.example`.

Example:

```env
BASE_URL=https://www.amazon.in
HEADLESS=false

LT_USERNAME=your_username
LT_ACCESS_KEY=your_access_key
LT_BUILD_NAME=Amazon Playwright Build

USE_LAMBDATEST=true
```

---

## Running Tests Locally

Execute all tests:

```bash
npx playwright test
```

Run in headed mode:

```bash
npx playwright test --headed
```

Run a specific test:

```bash
npx playwright test tests/amazon.spec.js
```

---

## Viewing Reports

Generate and open report:

```bash
npx playwright show-report
```

---

## LambdaTest Integration

The framework supports execution on LambdaTest Cloud.

### Configure Credentials

Add credentials to the `.env` file:

```env
LT_USERNAME=your_username
LT_ACCESS_KEY=your_access_key
```

### Execute on LambdaTest

```bash
npx playwright test --config=playwright.lt.config.js
```

---

## GitHub Actions CI/CD

The framework includes GitHub Actions integration.

Pipeline capabilities:

* Install dependencies
* Install Playwright browsers
* Execute tests
* Publish reports
* Execute tests on LambdaTest Cloud

### Required GitHub Secrets

Configure the following repository secrets:

```text
LT_USERNAME
LT_ACCESS_KEY
```

### Required Repository Variable

```text
LT_ENABLED=true
```

---

## Design Considerations

* Reusable Page Objects
* Externalized Test Data
* Environment-Based Configuration
* Cloud Execution Support
* CI/CD Ready Architecture
* Clean and Maintainable Code Structure

---

## Author

Kundan Prasad

Software Development Engineer in Test (SDET)

Specializations:

* Playwright
* Selenium
* API Automation
* JavaScript
* Java
* CI/CD
* Test Framework Design
