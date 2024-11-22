import 'dotenv/config';
import authenticateUser from './authenticateUser.js';
import { describe, it } from 'mocha';
import models from '../data/models.js';
import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import { expect } from 'chai'

const { User } = models;

//TODO: SPECS: analizando lo documentado en este, intentar hacer el de alguna otra logica.

describe('authenticateUser', () => {

    before(() => mongoose.connect(process.env.MONGO_URI_TEST));
    afterEach(() => User.deleteMany());

    // Happy path --> cuando testeamos un happy path (todo sale bien) asincrono,
    // los expects deben ubicarse en el .then(() => { }).
    // En caso de que la función falle por algún motivo,
    // como no manejamos el catch() el test no pasará (y tendrá problemas de promesa sin manejar).
    // ¿Porque no manejar la promesa con el catch? Porque aquí testeamos unicamente lo que sale bien,
    // Para manejar el catch usaremos otros tests (otros 'it')
    it('returns id if user exist and password is correct', () => {
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
                        return authenticateUser('nombre@mail.com', '123456789')
                            .then((id) => {
                                expect(id).to.equal(user._id.toString());
                            })
                    })
            })
    })

    // Unhappy paths asincronos --> cuando testeamos un error asincrono,
    // los expects deben ubicarse en el .catch(() => { }).
    // Como estamos forzando el fallo, el then puede estar vacio.
    it('throws "No user with this email" if user does not exist', () => {
        return authenticateUser('nombre@mail.com', 'contraseña-aleatoria1')
            .then(() => { })
            .catch(error => {
                expect(error.message).to.be.equal('No user with this email')
            })
    })

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

    // Unhappy paths sincronos --> cuando testeamos un error sincrono (como los validadores, que no entran en la db),
    // podemos capturarlo únicamente con un try/catch
    //(con el then/catch fallaria porque nunca llegamos a devolver la promesa)
    it('throws "Email is not a string" if email is wrong type', () => {
        try {
            authenticateUser(12345, 'contraseña-aleatoria1')
        } catch (error) {
            expect(error.message).to.be.equal('Email is not a string')
        }
    })

    it('throws "Email is empty" if email is empty', () => {
        try {
            authenticateUser('  ', 'contraseña-aleatoria1')
        } catch (error) {
            expect(error.message).to.be.equal('Email is empty')
        }
    })

    it('throws "Email format is not valid" if email does not follow email regex format', () => {
        try {
            authenticateUser('i am not an email :D', 'contraseña-aleatoria1')
        } catch (error) {
            expect(error.message).to.be.equal('Email format is not valid')
        }
    })

    it('throws "Password is not a string" if password is not type string', () => {
        try {
            authenticateUser('email@mail.com', 12345)
        } catch (error) {
            expect(error.message).to.be.equal('Password is not a string')
        }
    })

    it('throws "Password is empty" if password is an empty string', () => {
        try {
            authenticateUser('email@mail.com', '     ')
        } catch (error) {
            expect(error.message).to.be.equal('Password is empty')
        }
    })

})