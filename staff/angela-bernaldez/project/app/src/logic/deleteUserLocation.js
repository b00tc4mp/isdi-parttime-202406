import { Errors } from 'common'

const deleteUserLocation = ( locationData ) => {
    // TODO: add validators

    const token = sessionStorage.getItem("token")

    return fetch(`${import.meta.env.VITE_API_URL}users/locations`, {
        method: 'DELETE',
        headers: {
            'Content-type': 'application/json',
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({ locationData })
    })
    .then((res) => {
        if (res.status === 200) return 
        return res.json()
            .then(body => {
                const constructor = Errors[body.name]
                throw new constructor(`${body.message}`);
            })
      })
    .catch((err) => {
        if (error instanceof Errors.BadRequestError)
            throw new Errors.ServerError('Server in not connected')
        throw error
    })
}

export default deleteUserLocation