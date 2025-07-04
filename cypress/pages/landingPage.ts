/// <reference types="cypress" />

export class LandingPage {

      get menuFlights(): Cypress.Chainable<JQuery<HTMLElement>>  {
        return cy.get("#flights")
      }

      get menuFlightsHotels(): Cypress.Chainable<JQuery<HTMLElement>>  {
        return cy.get("#packages")
      }

      get menuStays(): Cypress.Chainable<JQuery<HTMLElement>>  {
        return cy.get("#accommodations")
      }

      get menuCarRentals(): Cypress.Chainable<JQuery<HTMLElement>>  {
        return cy.get("#cars")
      }

      get menuAttractions(): Cypress.Chainable<JQuery<HTMLElement>>  {
        return cy.get("#attractions")
      }

      get menuaAirportTaxis(): Cypress.Chainable<JQuery<HTMLElement>>  {
        return cy.get("#airport_taxis")
      }   
}
export const landingPage = new LandingPage()