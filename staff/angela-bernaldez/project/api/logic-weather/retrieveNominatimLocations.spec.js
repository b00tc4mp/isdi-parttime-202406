import 'dotenv/config'
import retrieveNominatimLocations from './retrieveNominatimLocations.js'
import { describe, it } from 'mocha'
import { expect } from 'chai'


describe('retrieveNominatimLocations', () => {

    it('retrieve locations when a string is passed', () => {
        return retrieveNominatimLocations('Brighton')
        .then((locationsRetrieved) => {
            console.log(locationsRetrieved)
            // as limit has been set to 5, first 5 locations found should be retrieved
            //expect(locationsRetrieved).to.have.lengthOf(5)
        })
    })
})





