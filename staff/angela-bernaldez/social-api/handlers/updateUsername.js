import logic from "../logic/index.js"

export default (req, res, next) => {
    const { authorization } = req.headers

    const idLogged = Number(authorization.split(" ")[1])
    const { username } = req.body

    try {
        logic.updateUsername(idLogged, username)

        console.log('entro aqui')

        res.status(200).send()
   } catch(error) {
        next(error)
   }
}




