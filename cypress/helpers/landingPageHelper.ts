import { landingPage } from "../pages/landingPage";
import { actions } from "../utilities/actions";
import { assertions } from "../utilities/assertions";

class LandingPageHelper {

    /**
     * Verify Menu is visible
     * @param menuName - name of the menu 
     */
    public verifyMenuIsVisible(menuName: string) {
        const menuElementMap: Record<string, Cypress.Chainable<JQuery<HTMLElement>>> = {
            Flights: landingPage.menuFlights,
            Stays: landingPage.menuStays,
            FlightHotels: landingPage.menuFlightsHotels,
            Attractions: landingPage.menuAttractions,
            CarRentals: landingPage.menuCarRentals,
            AirportTaxis: landingPage.menuaAirportTaxis,
          };
          
          const menuElement = menuElementMap[menuName];
          
          if (!menuElement) {
            throw new Error(`Menu "${menuName}" is not recognized.`);
          }
          
          assertions.checkElementDisplayed(menuElement);
          
    }

}
export const landingPageHelper = new LandingPageHelper()