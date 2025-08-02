import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    baseUrl: 'https://www.automationexercise.com',
    viewportWidth: 1280,
    viewportHeight: 720,
    video: false,
    screenshotOnRunFailure: true,
    defaultCommandTimeout: 10000,
    requestTimeout: 10000,
    responseTimeout: 10000,
    setupNodeEvents(on, config) {
      // Custom task to print detailed console logs
      on('task', {
        log(message) {
          console.log(`[Cypress Task] ${new Date().toISOString()}: ${message}`)
          return null
        },
        logAction(action, details = '') {
          console.log(`[ACTION] ${new Date().toISOString()}: ${action} ${details}`)
          return null
        },
        logAssertion(assertion, details = '') {
          console.log(`[ASSERTION] ${new Date().toISOString()}: ${assertion} ${details}`)
          return null
        }
      })
    },
  },
}) 