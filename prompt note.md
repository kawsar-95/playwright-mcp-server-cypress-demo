1. MCP Integration

Ensure the Playwright MCP Server is active.

Route all browser automation strictly through the MCP Server.

2. Scenario Execution (on Login page)
Scenario 1: Register New User

Launch the browser via MCP.

Navigate to https://www.automationexercise.com/.

Validate that the home page is successfully displayed.

Click on 'Signup / Login'.

Verify 'New User Signup!' is visible.

Enter a name and a new email address.

Click 'Signup'.

Verify that 'ENTER ACCOUNT INFORMATION' is visible.

Scenario 2: Login with Existing User

Launch the browser again via MCP.

Go to https://www.automationexercise.com/.

Validate home page is visible.

Click 'Signup / Login'.

Confirm 'Login to your account' is visible.

Enter valid email and password credentials.

Click 'Login'.

Verify 'Logged in as username' is shown.

🔁 Between scenarios, log out to prevent session/cache interference.

3. Credential Gathering

Scan the website to find the credentials for both scenarios.

4. Cleanup

After test validations, close the browser.

Allow the MCP Server to complete code generation.

Use the code from the temp_codegen folder as a reference.

5. Framework Development (with Cypress + TypeScript)

Convert the Playwright-generated test to a Cypress framework using TypeScript.

Apply Page Object Model (POM) design pattern.

Store test data and reusable content in:

fixtures/ for reusable data

cypress.env.json for credentials/secrets

6. Project Setup

Create a .gitignore file in root (exclude node_modules, cypress.env.json).

Implement a cy.task() to print detailed console logs of actions and assertions in the terminal.

Add a README.md documenting:

How to run the tests

Project structure

Tech stack

7. Test Execution

Install all dependencies.

Run the Cypress tests in headless mode using npx cypress run.

Failures are acceptable, but there should be no framework or configuration issues.

8. CI/CD Integration

Create a GitHub Actions workflow in root:

It must install dependencies

Run the Cypress tests

Note: The default branch is master, not main.

9. Final Push

Push the complete, working Cypress automation framework (with MCP integration) to the existing remote GitHub repo from the MCP Server root directory.