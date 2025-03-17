import { Validator, Errors } from 'common'

const updateUsername = (newUsername) => {

    Validator.username(newUsername)

    const token = sessionStorage.getItem("token")
    
    return fetch(`${import.meta.env.VITE_API_URL}users/username`, {
        method: 'PATCH',
        headers: {
            'Content-type': 'application/json',
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({ 'new-username': newUsername })
    })
    .then((res) => {
        if (res.status === 200) return
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

export default updateUsername