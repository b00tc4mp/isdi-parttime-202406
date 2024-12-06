import mongoose from "mongoose"
import models from "./models.js"
import bcrypt from "bcrypt"
import 'dotenv/config'

const { User } = models

bcrypt.hash('123456789', 15)
    .then((cryptPassword) => {
        const users = [
            {
                username: "Percy",
                email: "percy@mail.com",
                dateOfBirth: new Date('11/15/1995'),
                password: cryptPassword,
                avatar: "https://github.com/rucev/Percy-the-Dog/blob/main/docs/images/percy.png",
                bio: "I'm a cute dog and a great dancer"
            },
            {
                username: "Cosmo",
                email: "cosmo@mail.com",
                dateOfBirth: new Date('11/15/1991'),
                password: cryptPassword,
                avatar: "https://britishvillage.com.br/en/wp-content/uploads/2024/06/british-shorthair.jpg",
                bio: "Hello, I'm doctor Cosmo"
            }
        ]

        mongoose.connect(process.env.MONGO_URI)
            .then(() => {
                users.forEach((user) => {
                    User.create(user)
                    .then(() => {
                        console.log(user.username, 'created')
                    })
                })
            })
    })