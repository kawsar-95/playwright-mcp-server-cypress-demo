export class LoginPage {
  // Selectors
  private readonly loginEmailInput = 'input[data-qa="login-email"]';
  private readonly loginPasswordInput = 'input[data-qa="login-password"]';
  private readonly loginButton = 'button[data-qa="login-button"]';
  private readonly signupNameInput = 'input[data-qa="signup-name"]';
  private readonly signupEmailInput = 'input[data-qa="signup-email"]';
  private readonly signupButton = 'button[data-qa="signup-button"]';
  private readonly loginToAccountText = 'h2';
  private readonly newUserSignupText = 'h2';

  // Actions
  verifyLoginToAccountIsVisible() {
    cy.task('logAssertion', 'Verifying "Login to your account" is visible');
    cy.get(this.loginToAccountText).should('contain', 'Login to your account');
  }

  verifyNewUserSignupIsVisible() {
    cy.task('logAssertion', 'Verifying "New User Signup!" is visible');
    cy.get(this.newUserSignupText).should('contain', 'New User Signup!');
  }

  enterLoginCredentials(email: string, password: string) {
    cy.task('logAction', `Entering login credentials - Email: ${email}`);
    cy.get(this.loginEmailInput).type(email);
    cy.get(this.loginPasswordInput).type(password);
  }

  clickLogin() {
    cy.task('logAction', 'Clicking login button');
    cy.get(this.loginButton).click();
  }

  enterSignupDetails(name: string, email: string) {
    cy.task('logAction', `Entering signup details - Name: ${name}, Email: ${email}`);
    cy.get(this.signupNameInput).type(name);
    cy.get(this.signupEmailInput).type(email);
  }

  clickSignup() {
    cy.task('logAction', 'Clicking signup button');
    cy.get(this.signupButton).click();
  }

  verifyEmailExistsError() {
    cy.task('logAssertion', 'Verifying email already exists error');
    cy.contains('Email Address already exist!').should('be.visible');
  }

  verifyInvalidCredentialsError() {
    cy.task('logAssertion', 'Verifying invalid credentials error');
    cy.contains('Your email or password is incorrect!').should('be.visible');
  }
} 