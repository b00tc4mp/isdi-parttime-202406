import cors from 'cors'
import express, { json } from 'express'
import mongoose from 'mongoose'
import handlers from './handlers/index.js'
import handlersWeather from './handlers-weather/index.js'
import { errorHandler, verifyToken } from './middlewares/index.js'
import 'dotenv/config'

// change port from 4321 to another number :)

mongoose.connect(process.env.MONGO_URI)
.then(() => {
    console.info(`connected to db: ${process.env.MONGO_URI}`)

    const server = express()
    const jsonBodyParser = json()
    server.use(cors())

    server.post('/users', jsonBodyParser, handlers.registerUser)

    server.post('/users/auth', jsonBodyParser, handlers.authenticateUser)

    server.delete('/users', verifyToken, jsonBodyParser, handlers.deleteUser)

    server.patch('/users/username', verifyToken, jsonBodyParser, handlers.updateUsername)

    server.patch('/users/password', verifyToken, jsonBodyParser, handlers.updatePassword)

    server.get('/users/auth', verifyToken, handlers.getUser)

    server.get('/users/locations', verifyToken, handlers.getAllUserLocations)

    server.post('/users/locations', verifyToken, jsonBodyParser, handlers.addUserLocation)

    server.delete('/users/locations', verifyToken, jsonBodyParser, handlers.deleteUserLocation)

    server.post('/users/nominatim-locations', verifyToken, jsonBodyParser, handlersWeather.retrieveNominatimLocations)

    server.post('/users/current-location', verifyToken, jsonBodyParser, handlersWeather.getLocationFromIp)

    server.post('/users/weather-data', verifyToken, jsonBodyParser, handlersWeather.retrieveWeatherData)

    server.patch('/users/weather-data', verifyToken, jsonBodyParser, handlersWeather.updateWeatherForLocation)

    server.use(errorHandler)

    server.listen(process.env.PORT, () => {
        console.info(`Server running on port: ${process.env.PORT}`)
    })

})

