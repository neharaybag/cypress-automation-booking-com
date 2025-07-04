export class Actions {
    /**
     * Clicks the given Cypress element
     */
    public click(
      element: Cypress.Chainable<JQuery<HTMLElement>>
    ): Cypress.Chainable<JQuery<HTMLElement>> {
      return element.click();
    }
  
    /**
     * Force-clicks the given Cypress element
     */
    public forceClick(
      element: Cypress.Chainable<JQuery<HTMLElement>>
    ): Cypress.Chainable<JQuery<HTMLElement>> {
      return element.click({ force: true });
    }
  
    /**
     * Clears the given Cypress input element
     */
    public clear(
      element: Cypress.Chainable<JQuery<HTMLElement>>
    ): Cypress.Chainable<JQuery<HTMLElement>> {
      return element.clear();
    }
  
    /**
     * Clears and types text into the given input element
     */
    public clearAndType(
      element: Cypress.Chainable<JQuery<HTMLElement>>,
      text: string
    ): Cypress.Chainable<JQuery<HTMLElement>> {
      return element.clear().type(text);
    }
  }

  export const actions = new Actions()
  