import { landingPageHelper } from "cypress/helpers/landingPageHelper"


describe('Verify activity row contents', () => {


  beforeEach(function () {

  })

  it('Verify menus on landingPage', function () {
    landingPageHelper.verifyMenuIsVisible('Flights')
    landingPageHelper.verifyMenuIsVisible('Stays')
    landingPageHelper.verifyMenuIsVisible('FlightHotels')
    landingPageHelper.verifyMenuIsVisible('Attractions')
    landingPageHelper.verifyMenuIsVisible('CarRentals')
    landingPageHelper.verifyMenuIsVisible('AirportTaxis')
  })
})
