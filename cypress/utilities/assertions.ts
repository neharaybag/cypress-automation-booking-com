// cypress/support/elementChecks.ts

export class Assertions {
    public checkElementDisplayed(
      selector: Cypress.Chainable<JQuery<HTMLElement>>,
      falseCase = false
    ): Cypress.Chainable<JQuery<HTMLElement>> {
      return falseCase
        ? selector.should('not.be.visible')
        : selector.should('be.visible');
    }
  
    public checkElementEnabled(
      selector: Cypress.Chainable<JQuery<HTMLElement>>,
      falseCase = false
    ): Cypress.Chainable<JQuery<HTMLElement>> {
      return falseCase
        ? selector.should('be.disabled')
        : selector.should('not.be.disabled');
    }
  
    public checkElementExist(
      selector: Cypress.Chainable<JQuery<HTMLElement>>,
      falseCase = false
    ): Cypress.Chainable<JQuery<HTMLElement>> {
      return falseCase
        ? selector.should('not.exist')
        : selector.should('exist');
    }
  
    public checkElementContainText(
      selector: Cypress.Chainable<JQuery<HTMLElement>>,
      expectedText: string
    ): Cypress.Chainable<JQuery<HTMLElement>> {
      return selector.should('contain.text', expectedText);
    }
  
    public checkElementHaveText(
      selector: Cypress.Chainable<JQuery<HTMLElement>>,
      expectedText: string
    ): Cypress.Chainable<JQuery<HTMLElement>> {
      return selector.should('have.text', expectedText);
    }
  
    public checkElementHaveValue(
      selector: Cypress.Chainable<JQuery<HTMLElement>>,
      expectedValue: string
    ): Cypress.Chainable<JQuery<HTMLElement>> {
      return selector.should('have.value', expectedValue);
    }
  
    public checkElementLength(
      selector: Cypress.Chainable<JQuery<HTMLElement>>,
      expectedLength: number
    ): Cypress.Chainable<JQuery<HTMLElement>> {
      return selector.should('have.length', expectedLength);
    }
  }
    export const assertions = new Assertions()