export class SignupPage {
  // Selectors
  private readonly titleMr = 'input[value="Mr"]';
  private readonly titleMrs = 'input[value="Mrs"]';
  private readonly passwordInput = 'input[data-qa="password"]';
  private readonly daysSelect = 'select[data-qa="days"]';
  private readonly monthsSelect = 'select[data-qa="months"]';
  private readonly yearsSelect = 'select[data-qa="years"]';
  private readonly newsletterCheckbox = '#newsletter';
  private readonly optinCheckbox = '#optin';
  private readonly firstNameInput = 'input[data-qa="first_name"]';
  private readonly lastNameInput = 'input[data-qa="last_name"]';
  private readonly companyInput = 'input[data-qa="company"]';
  private readonly addressInput = 'input[data-qa="address"]';
  private readonly address2Input = 'input[data-qa="address2"]';
  private readonly countrySelect = 'select[data-qa="country"]';
  private readonly stateInput = 'input[data-qa="state"]';
  private readonly cityInput = 'input[data-qa="city"]';
  private readonly zipcodeInput = 'input[data-qa="zipcode"]';
  private readonly mobileNumberInput = 'input[data-qa="mobile_number"]';
  private readonly createAccountButton = 'button[data-qa="create-account"]';
  private readonly accountCreatedText = 'h2';
  private readonly continueButton = 'a[data-qa="continue-button"]';

  // Actions
  verifyEnterAccountInformationIsVisible() {
    cy.task('logAssertion', 'Verifying "Enter Account Information" is visible');
    cy.get(this.accountCreatedText).should('contain', 'Enter Account Information');
  }

  selectTitle(title: string) {
    cy.task('logAction', `Selecting title: ${title}`);
    if (title === 'Mr') {
      cy.get(this.titleMr).click();
    } else if (title === 'Mrs') {
      cy.get(this.titleMrs).click();
    }
  }

  enterPassword(password: string) {
    cy.task('logAction', 'Entering password');
    cy.get(this.passwordInput).type(password);
  }

  selectDateOfBirth(day: string, month: string, year: string) {
    cy.task('logAction', `Selecting date of birth: ${day}/${month}/${year}`);
    cy.get(this.daysSelect).select(day);
    cy.get(this.monthsSelect).select(month);
    cy.get(this.yearsSelect).select(year);
  }

  checkNewsletter() {
    cy.task('logAction', 'Checking newsletter checkbox');
    cy.get(this.newsletterCheckbox).check();
  }

  checkOptin() {
    cy.task('logAction', 'Checking optin checkbox');
    cy.get(this.optinCheckbox).check();
  }

  enterAddressInformation(userDetails: any) {
    cy.task('logAction', 'Entering address information');
    cy.get(this.firstNameInput).type(userDetails.firstName);
    cy.get(this.lastNameInput).type(userDetails.lastName);
    cy.get(this.companyInput).type(userDetails.company);
    cy.get(this.addressInput).type(userDetails.address);
    cy.get(this.address2Input).type(userDetails.address2);
    cy.get(this.countrySelect).select(userDetails.country);
    cy.get(this.stateInput).type(userDetails.state);
    cy.get(this.cityInput).type(userDetails.city);
    cy.get(this.zipcodeInput).type(userDetails.zipcode);
    cy.get(this.mobileNumberInput).type(userDetails.mobileNumber);
  }

  clickCreateAccount() {
    cy.task('logAction', 'Clicking create account button');
    cy.get(this.createAccountButton).click();
  }

  verifyAccountCreated() {
    cy.task('logAssertion', 'Verifying account created successfully');
    cy.get(this.accountCreatedText).should('contain', 'Account Created!');
  }

  clickContinue() {
    cy.task('logAction', 'Clicking continue button');
    cy.get(this.continueButton).click();
  }

  verifyLoggedInAs(username: string) {
    cy.task('logAssertion', `Verifying logged in as: ${username}`);
    cy.contains(`Logged in as ${username}`).should('be.visible');
  }
} 