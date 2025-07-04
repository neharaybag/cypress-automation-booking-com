import { defineConfig } from 'cypress'
import * as path from 'path'
import * as fs from 'fs'



const currentDir = process.cwd()
export default defineConfig({
  screenshotsFolder: 'cypress/results/screenshots',
  chromeWebSecurity: true,
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/results',
    reportFilename: '[status]_[datetime]-[name]-report.html',
    timestamp: 'longDate',
    overwrite: true,
    html: true,
    json: true,
  },
  e2e: {
    experimentalModifyObstructiveThirdPartyCode: true,
    viewportHeight: 790,
    viewportWidth: 1512,
    screenshotsFolder: 'cypress/results/screenshots',
    trashAssetsBeforeRuns: true,
    specPattern: 'cypress/e2e/**/*.cy.ts',
    video: true,
    defaultCommandTimeout: 10000,
    setupNodeEvents(on, config) {
      const environment = config.env?.environment || 'test'
      const envFilePath = path.resolve(
        currentDir,
        `cypress.env.${environment}.json`,
      )

      if (fs.existsSync(envFilePath)) {
        const envConfig = JSON.parse(fs.readFileSync(envFilePath, 'utf8'))

        Object.keys(envConfig).forEach((key) => {
          if (!(key in config.env)) {
            config.env[key] = envConfig[key]
          }
        })
      } else {
      }
      return config
    },
  },
})