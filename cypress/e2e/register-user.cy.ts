import { HomePage } from '../support/pages/HomePage';
import { LoginPage } from '../support/pages/LoginPage';
import { SignupPage } from '../support/pages/SignupPage';

describe('Register New User', () => {
  const homePage = new HomePage();
  const loginPage = new LoginPage();
  const signupPage = new SignupPage();

  beforeEach(() => {
    cy.task('log', 'Starting Register New User test');
  });

  it('should register a new user successfully', () => {
    // Step 1: Launch browser and navigate to home page
    cy.task('logAction', 'Launching browser and navigating to home page');
    homePage.visit();

    // Step 2: Validate that the home page is successfully displayed
    homePage.verifyHomePageIsVisible();

    // Step 3: Click on 'Signup / Login'
    homePage.clickSignupLogin();

    // Step 4: Verify 'New User Signup!' is visible
    loginPage.verifyNewUserSignupIsVisible();

    // Step 5: Enter a name and a new email address
    const testData = {
      name: 'NewTestUser',
      email: `newtestuser${Date.now()}@test.com` // Unique email to avoid conflicts
    };
    loginPage.enterSignupDetails(testData.name, testData.email);

    // Step 6: Click 'Signup'
    loginPage.clickSignup();

    // Step 7: Verify that 'ENTER ACCOUNT INFORMATION' is visible
    signupPage.verifyEnterAccountInformationIsVisible();

    // Step 8: Fill in account information
    cy.fixture('testData').then((data) => {
      signupPage.selectTitle(data.userDetails.title);
      signupPage.enterPassword(data.newUser.password);
      signupPage.selectDateOfBirth(
        data.userDetails.dayOfBirth,
        data.userDetails.monthOfBirth,
        data.userDetails.yearOfBirth
      );
      signupPage.checkNewsletter();
      signupPage.checkOptin();
      signupPage.enterAddressInformation(data.userDetails);
    });

    // Step 9: Click 'Create Account'
    signupPage.clickCreateAccount();

    // Step 10: Verify 'ACCOUNT CREATED!' is visible
    signupPage.verifyAccountCreated();

    // Step 11: Click 'Continue'
    signupPage.clickContinue();

    // Step 12: Verify 'Logged in as username' is visible
    signupPage.verifyLoggedInAs(testData.name);

    cy.task('log', 'Register New User test completed successfully');
  });
}); 