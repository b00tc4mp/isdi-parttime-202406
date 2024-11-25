import logic from "../logic/index.js"

export default (req, res, next) => {
const id = req.id
    const { username } = req.body

    try {
     logic.updateUsername(id, username)
     .then(() => {
         res.status(200).send();
     })
     .catch(error => next(error))
   } catch(error) {
        next(error)
   }
}




