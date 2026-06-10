# Amazon Playwright Automation Framework

## Overview

This project is an automated testing framework built using **Playwright with JavaScript** to automate Amazon shopping workflows.

The framework was developed as part of an Automation Engineering Assessment and demonstrates:

* End-to-End UI Automation
* Page Object Model (POM) Design Pattern
* Parallel Test Execution
* Environment Configuration using dotenv
* GitHub Actions CI/CD Integration
* LambdaTest Cloud Execution
* HTML Reporting, Screenshots, Videos, and Traces

---

## Assignment Scenarios

### Test Case 1

1. Navigate to Amazon India
2. Search for an iPhone device
3. Retrieve and print the product price
4. Open the product details page
5. Validate successful navigation

### Test Case 2

1. Navigate to Amazon India
2. Search for a Samsung Galaxy device
3. Retrieve and print the product price
4. Open the product details page
5. Validate successful navigation

---

## Technology Stack

| Component            | Technology              |
| -------------------- | ----------------------- |
| Language             | JavaScript              |
| Automation Framework | Playwright 1.55.0       |
| Design Pattern       | Page Object Model (POM) |
| Test Runner          | Playwright Test         |
| Reporting            | HTML Report             |
| CI/CD                | GitHub Actions          |
| Cloud Execution      | LambdaTest              |
| Configuration        | dotenv                  |

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

The framework is configured to execute test cases in parallel.

Configuration:

```javascript
fullyParallel: true,
workers: 2
```

This allows both Amazon search scenarios to execute concurrently.

### Logging

A reusable logging utility is implemented to provide readable execution logs.

### Reporting

The framework automatically generates:

* HTML Reports
* Screenshots on Failure
* Videos on Failure
* Playwright Traces

---

## Prerequisites

* Node.js 18+
* npm

---

## Installation

Clone the repository:

```bash
git clone <repository-url>
cd playwright-project
```

Install dependencies:

```bash
npm install
```

Install Playwright browsers:

```bash
npx playwright install
```

---

## Environment Configuration

Create a `.env` file using `.env.example`.

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

## Execution Commands

### Run Tests Locally

```bash
npm test
```

### Run in Headed Mode

```bash
npm run test:headed
```

### Run on LambdaTest

```bash
npm run test:lt
```

### Open HTML Report

```bash
npm run report
```

---

## LambdaTest Integration

This framework supports execution on LambdaTest Cloud using Playwright CDP connections.

### Required Configuration

Add the following credentials:

```env
LT_USERNAME=your_username
LT_ACCESS_KEY=your_access_key
```

### Execute on LambdaTest

```bash
npm run test:lt
```

---

## GitHub Actions CI/CD

The project includes a GitHub Actions workflow for automated execution.

Pipeline Features:

* Install Dependencies
* Install Playwright Browsers
* Execute Playwright Tests
* Publish HTML Reports
* Execute Tests on LambdaTest Cloud
* Store Test Artifacts

### Repository Secrets

Configure the following secrets:

```text
LT_USERNAME
LT_ACCESS_KEY
```

### Repository Variables

```text
LT_ENABLED=true
```

---

## Assumptions

* Amazon UI may vary based on region and time.
* Product availability and pricing are dynamic.
* Tests are executed against Amazon India (amazon.in).
* LambdaTest credentials are supplied via environment variables or GitHub Secrets.
* Browser execution is supported locally and on LambdaTest Cloud.

---

## Design Considerations

* Page Object Model Architecture
* Reusable Components
* Externalized Test Data
* Cloud Execution Support
* CI/CD Ready Framework
* Maintainable and Scalable Structure
* Environment-Based Configuration

---

## Author

**Kundan Prasad**

Software Development Engineer in Test (SDET)

Skills:

* Playwright
* Selenium
* API Automation
* JavaScript
* Java
* CI/CD
* Test Framework Design

