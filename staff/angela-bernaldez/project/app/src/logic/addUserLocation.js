import { Errors } from 'common'

const addUserLocation = (locationData) => {
    // include validators 

    const token = sessionStorage.getItem("token")

    // aqui hago llamada a la api
    return fetch(`${import.meta.env.VITE_API_URL}users/locations`, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({ locationData: locationData })
    })
        .then((res) => {
            if (res.status === 201) return
            return res.json()
                .then(body => {
                    const constructor = Errors[body.name]
                    throw new constructor(`${body.message}`)
                })
        })
        .catch((error) => {
            if (error instanceof Errors.BadRequestError)
                throw new Errors.ServerError("Server in not connected");
            throw error
        })
}

export default addUserLocation