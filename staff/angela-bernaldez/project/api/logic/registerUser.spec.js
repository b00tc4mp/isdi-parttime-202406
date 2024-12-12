import 'dotenv/config'
import registerUser from './registerUser.js'
import { describe, it } from 'mocha'
import models from '../data/models.js'
import mongoose, { Types } from 'mongoose'
import { expect } from 'chai'

const { User } = models
const { ObjectId } = Types

describe('registerUser', () => {

    before(() => mongoose.connect(process.env.MONGO_URI_TEST))
    afterEach(() => User.deleteMany())
    after(() => mongoose.disconnect(process.env.MONGO_URI_TEST))

    it('creates an user', () => {
        return registerUser('example', 'mail@mail.com', 'contraseña!2')
            .then(() => {
                return User.findOne({ email: 'mail@mail.com' })
                    .then((user) => {
                        expect(user.username).to.equal('example')
                        expect(user.email).to.equal('mail@mail.com')
                        expect(user._id).to.be.instanceOf(ObjectId)
                    })
            })
    })

    // añadir intentar usuario ya registrado
    // no puedo llamar a la logica dos veces
    // User.create() hago esto al principio
    // lo cojo en el .catch()

    // añadir intentar registrar usuario con email formato invalido
    // añadir intentar registrar usuario con username formato invalido
})
