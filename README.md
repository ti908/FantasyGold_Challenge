# FantasyGold Challenge

FantasyGold Challenge is a Cypress end-to-end test automation project for a sample e-commerce application. It demonstrates a maintainable BDD framework using JavaScript, Cucumber, the Page Object Model, reusable commands, fixture-based test data, tagged test scenarios, and HTML reporting.

## Project Overview

The automated scenarios cover key customer journeys, including:

- Completing and validating the registration form
- Navigating from the home page to the shop
- Selecting products and adding them to the cart
- Verifying that individual product prices match the displayed total
- Selecting a delivery country and completing checkout
- Confirming that the order submission is successful

## Technologies and Practices

- **Cypress** for browser-based end-to-end testing
- **JavaScript** for test implementation
- **Cucumber/Gherkin** for behaviour-driven development (BDD)
- **Page Object Model** for separating selectors from test logic
- **Custom Cypress commands** for reusable product-selection actions
- **Fixtures and data tables** for data-driven testing
- **Smoke and regression tags** for scenario organisation
- **Multiple Cucumber HTML Reporter** for readable execution reports

## Project Structure

```text
FantasyGold_Challenge/
├── cypress/
│   ├── fixtures/                  # Test data
│   ├── integration/examples/BDD/ # Feature files and step definitions
│   ├── support/pageObjects/       # Page Object classes
│   ├── support/commands.js        # Reusable Cypress commands
│   └── cucumberReports/           # Cucumber JSON and HTML reports
├── cucumber-html-report.js        # HTML report configuration
├── cypress.config.js              # Cypress and Cucumber configuration
└── package.json                   # Dependencies and test scripts
```

## Getting Started

### Prerequisites

Install the following before running the project:

- [Node.js](https://nodejs.org/) and npm
- Google Chrome, if running the Chrome-specific command

### Installation

Clone the repository and install its dependencies:

```bash
git clone https://github.com/ti908/FantasyGold_Challenge.git
cd FantasyGold_Challenge
npm install
```

## Running the Tests

Run all tests in headless mode:

```bash
npm test
```

Run tests in headed mode:

```bash
npm run headTest
```

Run tests in Google Chrome:

```bash
npm run chromeTest
```

## Test Scenarios

The Gherkin feature file contains two primary scenarios:

- `@Smoke` — validates registration-form behaviour and shop navigation
- `@Regression` — validates product selection, cart totals, delivery-country selection, checkout, and the success confirmation

## Author

**Martin Walter Ampah**  
Software Quality Engineer | Machine Learning Researcher

- GitHub: [@ti908](https://github.com/ti908)
