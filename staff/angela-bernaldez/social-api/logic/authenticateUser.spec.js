import 'dotenv/config';
import authenticateUser from './authenticateUser.js';
import { describe, it } from 'mocha';
import models from '../data/models.js';
import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import { expect } from 'chai'

const { User } = models

//TODO: SPECS: analizando lo documentado en este, intentar hacer el de alguna otra logica.

describe('Authenticate user', () => {

    before(() => mongoose.connect(process.env.MONGO_URI_TEST))
    afterEach(() => User.deleteMany())

    // Happy path --> cuando testeamos un happy path (todo sale bien) asincrono,
    // los expects deben ubicarse en el .then(() => { }).
    // En caso de que la función falle por algún motivo,
    // como no manejamos el catch() el test no pasará (y tendrá problemas de promesa sin manejar).
    // ¿Porque no manejar la promesa con el catch? Porque aquí testeamos unicamente lo que sale bien,
    // Para manejar el catch usaremos otros tests (otros 'it')

    it('returns id if user exist and password is correct', function (done) {
        return bcrypt.hash('123456789', 1)
        .then((cryptPassword) => {
                const user = {
                    username: 'NombreTest',
                    dateOfBirth: new Date('07/20/1995'),
                    email: 'nombre@mail.com',
                    password: cryptPassword
                }
                return User.create(user)
                    .then((user) => {
                        return authenticateUser('nombre@mail.com', '123456789')
                            .then(() => {
                                expect(id).to.equal(user._id.toString())
                            })
                    })
        })
    })

    // Unhappy paths asincronos --> cuando testeamos un error asincrono,
    // los expects deben ubicarse en el .catch(() => { }).
    // Como estamos forzando el fallo, el then puede estar vacio.
    it('throws "Wrong password" if password is wrong', () => {
        return bcrypt.hash('123456789', 1)
            .then((cryptPassword) => {
                const user = {
                    username: 'NombreTest',
                    dateOfBirth: new Date('07/20/1995'),
                    email: 'nombre@mail.com',
                    password: cryptPassword
                };
                return User.create(user)
                    .then((user) => {
                        return authenticateUser('nombre@mail.com', 'contraseña-incorrecta')
                            .then(() => { })
                            .catch(error => {
                                expect(error.message).to.be.equal('Wrong Password')
                            })
                    })
            })
        })
})
