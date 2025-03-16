import { Errors } from 'common'

const updatePassword = (oldPassword, newPassword) => {

    const token = sessionStorage.getItem("token")

    return fetch(`${import.meta.env.VITE_API_URL}users/password`, {
        method: 'PATCH',
        headers: {
            'Content-type': 'application/json',
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({ oldPassword, newPassword })
        // preguntar si puedo usar camelCase o tengo que usar: 'old-password': oldPassword
    })
    .then((res) => {
        if (res.status === 200) return res.json()
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

export default updatePassword