// ***********************************************************
// This support file is automatically loaded before test files.
//
// Good place for global configurations and behaviors.
// ***********************************************************

import './commands'

beforeEach(() => {
  const baseUrl = Cypress.env('baseUrl') as string | undefined;

  if (!baseUrl) {
    throw new Error('Cypress "baseUrl" is not defined. Check your config or env file.');
  }

  cy.log(`🔗 Visiting baseUrl: ${baseUrl}`);

  cy.visit(baseUrl, {
    timeout: 120_000, // Increase timeout for slow-loading apps
    onBeforeLoad(win) {
      // You can set up mocks or modify the window object here
    },
    onLoad(win) {
      // Optional: logging after load
    }
  });
});
