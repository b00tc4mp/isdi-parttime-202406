import cors from 'cors'
import 'dotenv/config'
import express, { json } from 'express'
import fs from 'fs'
import handlers from './handlers/index.js'
import { errorHandler } from './middlewares/index.js'

const server = express()

const jsonBodyParser = json()

server.use(cors())

server.post('/users', jsonBodyParser, handlers.registerUser)

server.post('/users/auth', jsonBodyParser, handlers.authenticateUser)

server.get('/users/auth', handlers.getAuthUser)

server.get('/users', handlers.getAllUsers)

server.get('/users/:username', handlers.getOneUser)

server.patch('/users/email', jsonBodyParser, handlers.updateEmail);

server.patch('/users/password', jsonBodyParser, handlers.updatePassword)

server.patch('/users/username', jsonBodyParser, handlers.updateUsername)

server.use(errorHandler)

//TODO: Añadir un delete


server.listen(process.env.PORT, () => {
    console.log(`Server running on port:`, process.env.PORT)
})