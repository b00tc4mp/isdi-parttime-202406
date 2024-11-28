import mongoose from "mongoose"

const { Schema, Types } = mongoose

const UserSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    dateOfBirth: {
        type: Date,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    avatar: {
        type: String
    }
})

const User = mongoose.model('User', UserSchema)

/* TODO: POST: Crear el esquema
    ¿Qué incluye? ¿autor, contenido, fecha, comentarios?
    PISTA PARA AUTHOR: usar ref para poder usar populate
    https://mongoosejs.com/docs/populate.html
*/

export default {
    User
}