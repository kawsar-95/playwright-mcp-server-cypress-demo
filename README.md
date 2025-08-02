# Automation Exercise - Cypress Framework

A comprehensive Cypress automation framework for testing the Automation Exercise website, built with TypeScript and following the Page Object Model (POM) design pattern.

## 🚀 Tech Stack

- **Cypress**: End-to-end testing framework
- **TypeScript**: Type-safe JavaScript
- **Page Object Model**: Design pattern for better test maintenance
- **GitHub Actions**: CI/CD pipeline

## 📁 Project Structure

```
automation-exercise-cypress/
├── cypress/
│   ├── e2e/                    # Test files
│   │   ├── register-user.cy.ts # Register new user test
│   │   └── login-user.cy.ts    # Login with existing user test
│   ├── fixtures/               # Test data
│   │   ├── testData.json       # Reusable test data
│   │   └── cypress.env.json    # Credentials and secrets
│   └── support/
│       ├── pages/              # Page Object Model classes
│       │   ├── HomePage.ts
│       │   ├── LoginPage.ts
│       │   └── SignupPage.ts
│       ├── commands.ts         # Custom Cypress commands
│       └── e2e.ts             # Support file
├── .github/
│   └── workflows/
│       └── cypress-tests.yml   # GitHub Actions workflow
├── cypress.config.ts           # Cypress configuration
├── package.json               # Project dependencies
├── tsconfig.json             # TypeScript configuration
├── .gitignore                # Git ignore rules
└── README.md                 # Project documentation
```

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd automation-exercise-cypress
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   - Copy `cypress/fixtures/cypress.env.json` and update with your credentials
   - Ensure the file is in `.gitignore` to keep credentials secure

## 🧪 Running Tests

### Open Cypress Test Runner
```bash
npm run cypress:open
```

### Run Tests in Headless Mode
```bash
npm run cypress:run
```

### Run Tests with Headed Browser
```bash
npm run test:headed
```

## 📋 Test Scenarios

### Scenario 1: Register New User
1. Navigate to home page
2. Validate home page is displayed
3. Click 'Signup / Login'
4. Verify 'New User Signup!' is visible
5. Enter name and email
6. Click 'Signup'
7. Verify 'ENTER ACCOUNT INFORMATION' is visible
8. Fill account details and create account
9. Verify account creation success
10. Verify user is logged in

### Scenario 2: Login with Existing User
1. Navigate to home page
2. Validate home page is visible
3. Click 'Signup / Login'
4. Verify 'Login to your account' is visible
5. Enter valid credentials
6. Click 'Login'
7. Verify 'Logged in as username' is shown

## 🔧 Configuration

### Cypress Configuration
- **Base URL**: https://www.automationexercise.com
- **Viewport**: 1280x720
- **Default Timeout**: 10 seconds
- **Video Recording**: Disabled
- **Screenshots**: Enabled on failure

### Custom Tasks
The framework includes custom Cypress tasks for detailed logging:
- `logAction`: Logs user actions
- `logAssertion`: Logs test assertions
- `log`: General logging

## 🚀 CI/CD Pipeline

The project includes a GitHub Actions workflow that:
- Runs on push to master branch
- Installs dependencies
- Runs Cypress tests in headless mode
- Uploads screenshots and videos as artifacts
- Uses Ubuntu latest with Node.js 18

## 📊 Test Data Management

### Fixtures
- `testData.json`: Contains reusable test data including user details and expected messages
- `cypress.env.json`: Stores sensitive information like credentials

### Environment Variables
- `validEmail`: Email for existing user login
- `validPassword`: Password for existing user login

## 🎯 Page Object Model

The framework follows the Page Object Model pattern with separate classes for:
- **HomePage**: Home page interactions
- **LoginPage**: Login and signup form interactions
- **SignupPage**: Account creation form interactions

## 🔍 Custom Commands

- `waitForPageLoad()`: Waits for page to load completely
- `clearBrowserData()`: Clears cookies, localStorage, and sessionStorage
- `takeScreenshot(name)`: Takes timestamped screenshots

## 📝 Logging

The framework provides detailed console logging for:
- All user actions
- Test assertions
- Test execution flow
- Error scenarios

## 🛡️ Security

- Credentials are stored in `cypress.env.json` (excluded from git)
- Sensitive data is not logged to console
- Environment variables are used for dynamic data

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests for new functionality
5. Ensure all tests pass
6. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

For issues and questions:
1. Check the existing test cases
2. Review the Cypress documentation
3. Create an issue in the repository

---

**Note**: This framework was generated using Playwright MCP Server and converted to Cypress with TypeScript support. 