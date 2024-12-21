import { Errors } from 'common'

export default (location_name) => {
    // include validators 

    const token = sessionStorage.getItem("token")

    // aqui hago llamada a la api
    return fetch(`${import.meta.env.VITE_API_URL}user/${locationId}`, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({ location_name: location_name })
    })
        .then((res) => {
            if (res.status === 201) return;
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