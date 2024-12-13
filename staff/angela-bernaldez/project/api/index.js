import express, { json } from 'express'
import mongoose from 'mongoose'
import handlers from './handlers/index.js'
import { verifyToken } from './middlewares/index.js'
import 'dotenv/config'


mongoose.connect(process.env.MONGO_URI)
.then(() => {
    console.info(`connected to db: ${process.env.MONGO_URI}`)

    const server = express()
    const jsonBodyParser = json()

    server.post('/users', jsonBodyParser, handlers.registerUser)

    server.post('/users/auth', jsonBodyParser, handlers.authenticateUser)

    server.delete('/users', verifyToken, jsonBodyParser, handlers.deleteUser)

    server.listen(process.env.PORT, () => {
        console.info(`Server running on port: ${process.env.PORT}`)
    })

})

