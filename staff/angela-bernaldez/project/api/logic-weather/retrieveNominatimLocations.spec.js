import 'dotenv/config'
import retrieveNominatimLocations from './retrieveNominatimLocations.js'
import { describe, it } from 'mocha'
import { expect } from 'chai'
import models from '../data/models.js'
import mongoose from 'mongoose'

const { User } = models

describe('retrieveNominatimLocations', () => {

    it('retrieve locations when a string is passed', () => {
        return retrieveNominatimLocations('Brighton')
        .then((locationsRetrieved) => {
            console.log(locationsRetrieved)
            // as limit has been set to 5, first 5 locations found should be retrieved
            expect(locationsRetrieved).to.have.lengthOf(5)
        })
    })
})





