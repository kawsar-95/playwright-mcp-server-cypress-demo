import { HomePage } from '../support/pages/HomePage';
import { LoginPage } from '../support/pages/LoginPage';

describe('Login with Existing User', () => {
  const homePage = new HomePage();
  const loginPage = new LoginPage();

  beforeEach(() => {
    cy.task('log', 'Starting Login with Existing User test');
  });

  it('should login with existing user successfully', () => {
    // Step 1: Launch browser and navigate to home page
    cy.task('logAction', 'Launching browser and navigating to home page');
    homePage.visit();

    // Step 2: Validate home page is visible
    homePage.verifyHomePageIsVisible();

    // Step 3: Click 'Signup / Login'
    homePage.clickSignupLogin();

    // Step 4: Confirm 'Login to your account' is visible
    loginPage.verifyLoginToAccountIsVisible();

    // Step 5: Enter valid email and password credentials
    cy.fixture('testData').then((data) => {
      cy.task('logAction', `Logging in with email: ${data.validUser.email}`);
      loginPage.enterLoginCredentials(data.validUser.email, data.validUser.password);
    });

    // Step 6: Click 'Login'
    loginPage.clickLogin();

    // Step 7: Verify 'Logged in as username' is shown
    cy.task('logAssertion', 'Verifying user is logged in successfully');
    cy.contains('Logged in as TestUserLogin').should('be.visible');

    cy.task('log', 'Login with Existing User test completed successfully');
  });

  it('should show error for invalid credentials', () => {
    // Step 1: Launch browser and navigate to home page
    cy.task('logAction', 'Launching browser and navigating to home page');
    homePage.visit();

    // Step 2: Validate home page is visible
    homePage.verifyHomePageIsVisible();

    // Step 3: Click 'Signup / Login'
    homePage.clickSignupLogin();

    // Step 4: Confirm 'Login to your account' is visible
    loginPage.verifyLoginToAccountIsVisible();

    // Step 5: Enter invalid credentials
    cy.task('logAction', 'Entering invalid credentials');
    loginPage.enterLoginCredentials('invalid@email.com', 'wrongpassword');

    // Step 6: Click 'Login'
    loginPage.clickLogin();

    // Step 7: Verify error message
    loginPage.verifyInvalidCredentialsError();

    cy.task('log', 'Invalid credentials test completed successfully');
  });
}); 