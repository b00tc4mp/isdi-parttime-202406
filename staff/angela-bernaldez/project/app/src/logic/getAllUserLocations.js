import { Errors } from 'common'

const getAllUserLocations = () => {

    // tengo que pasar un isUserLoggedIn o algo asi para asegurarme de que solo sea con la sesion iniciada?

    return fetch(`${import.meta.env.VITE_API_URL}/users/locations`, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${token}`
        },
    })
    .then((res) => {
        if (res.status === 200) return res.json()
            .then(body => body.user.favLocations)
                return res.json()
                    .then(body => {
                        const constructor = Errors[body.name]
                        throw new constructor(`${body.message}`)
                    })
    })
    .catch((error) => {
        if (error instanceof Errors.BadRequestError)
            throw new Errors.ServerError("Server in not connected")
        throw error
    })
}

export default getAllUserLocations