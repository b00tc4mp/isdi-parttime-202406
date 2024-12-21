import models from '../data/models.js'

const { User } = models

export default (id) => {

    // add validator id
    const token = sessionStorage.getItem("token")

    return User.findById(id)
        .then((user) => {
            console.log(user)
        })
}