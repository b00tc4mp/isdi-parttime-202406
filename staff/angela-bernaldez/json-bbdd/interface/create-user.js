const { users } = require("../scripts")

users.createOne({
    name: "pepito", 
    birthDate: "2020-01-01", 
    phone: "123456789", 
    email: "hola@gmail.com", 
    password: "passswordddd"
})