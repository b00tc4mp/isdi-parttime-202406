import express, { json } from 'express'
import mongoose from 'mongoose'
import handlers from './handlers/index.js'
import 'dotenv/config'


mongoose.connect(process.env.MONGO_URI)
.then(() => {
    console.info(`connected to db: ${process.env.MONGO_URI}`)

    const server = express()
    const jsonBodyParser = json()

    server.post('/users', jsonBodyParser, handlers.registerUser)

    server.listen(process.env.PORT, () => {
        console.info(`Server running on port: ${process.env.PORT}`)
    })

})

