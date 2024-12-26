import cors from 'cors'
import express, { json } from 'express'
import mongoose from 'mongoose'
import handlers from './handlers/index.js'
import { errorHandler, verifyToken } from './middlewares/index.js'
import 'dotenv/config'


mongoose.connect(process.env.MONGO_URI)
.then(() => {
    console.info(`connected to db: ${process.env.MONGO_URI}`)

    const server = express()
    const jsonBodyParser = json()
    server.use(cors())

    server.post('/users', jsonBodyParser, handlers.registerUser)

    server.post('/users/auth', jsonBodyParser, handlers.authenticateUser)

    // review paths here
    server.get('/users/:userId/locations', verifyToken, handlers.getAllUserLocations)

    server.post('/locations/:userId/', verifyToken, jsonBodyParser, handlers.addUserLocation)

    server.delete('/users', verifyToken, jsonBodyParser, handlers.deleteUser)

    server.use(errorHandler)

    server.listen(process.env.PORT, () => {
        console.info(`Server running on port: ${process.env.PORT}`)
    })

})

