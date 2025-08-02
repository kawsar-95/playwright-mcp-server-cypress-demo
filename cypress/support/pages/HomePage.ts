export class HomePage {
  // Selectors
  private readonly signupLoginLink = 'a[href="/login"]';
  private readonly homePageTitle = 'h1';
  private readonly subscriptionEmail = '#susbscribe_email';
  private readonly subscriptionButton = '#subscribe';

  // Actions
  visit() {
    cy.task('logAction', 'Navigating to home page');
    cy.visit('/');
  }

  clickSignupLogin() {
    cy.task('logAction', 'Clicking Signup/Login link');
    cy.get(this.signupLoginLink).click();
  }

  verifyHomePageIsVisible() {
    cy.task('logAssertion', 'Verifying home page is visible');
    cy.get(this.homePageTitle).should('contain', 'Automation');
    cy.task('logAssertion', 'Home page is successfully displayed');
  }

  subscribeToNewsletter(email: string) {
    cy.task('logAction', `Subscribing to newsletter with email: ${email}`);
    cy.get(this.subscriptionEmail).type(email);
    cy.get(this.subscriptionButton).click();
  }

  verifySubscriptionSuccess() {
    cy.task('logAssertion', 'Verifying subscription success message');
    cy.contains('You have been successfully subscribed!').should('be.visible');
  }
} 