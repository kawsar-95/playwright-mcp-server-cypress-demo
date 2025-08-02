// Custom commands for Cypress

// Command to wait for page to load completely
Cypress.Commands.add('waitForPageLoad', () => {
  cy.get('body').should('be.visible');
  cy.window().its('document').its('readyState').should('eq', 'complete');
});

// Command to clear browser data between tests
Cypress.Commands.add('clearBrowserData', () => {
  cy.clearCookies();
  cy.clearLocalStorage();
  cy.clearSessionStorage();
});

// Command to take screenshot with timestamp
Cypress.Commands.add('takeScreenshot', (name: string) => {
  const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
  cy.screenshot(`${name}-${timestamp}`);
});

// Extend Cypress namespace
declare global {
  namespace Cypress {
    interface Chainable {
      waitForPageLoad(): Chainable<void>;
      clearBrowserData(): Chainable<void>;
      takeScreenshot(name: string): Chainable<void>;
    }
  }
} 