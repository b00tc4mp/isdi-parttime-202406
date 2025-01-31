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

    server.get('/users/auth', verifyToken, handlers.getUser)

    // review paths here

    // da igual que toods los usaruios tengan la misma ruta
    // porque entro con un otken asociado a mi usuario
    // eñ id lo extrae del token
    // no hace falta sacar el id en el front 

    // pasar el id solo lo haria si quisiera acceder a la info de otro usuario (id diferente)
    // x ejemplo si quisiera acceder a las localizaciones de mis amigos 
    // desde el front lo haria accediendo a la info del usuario desde la base de datos 
    server.get('/users/locations', verifyToken, handlers.getAllUserLocations)

    server.post('/users/locations', verifyToken, jsonBodyParser, handlers.addUserLocation)

    server.delete('/users', verifyToken, jsonBodyParser, handlers.deleteUser)

    server.get('/users/nominatim-locations/', verifyToken, jsonBodyParser, handlersWeather.retrieveNominatimLocations)

    server.use(errorHandler)

    server.listen(process.env.PORT, () => {
        console.info(`Server running on port: ${process.env.PORT}`)
    })

})

