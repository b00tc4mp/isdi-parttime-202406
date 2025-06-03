import { Validator, Errors } from 'common'

const updatePassword = (oldPassword, newPassword) => {

    Validator.password(oldPassword)
    Validator.password(newPassword)

    const token = sessionStorage.getItem("token")

    return fetch(`${import.meta.env.VITE_API_URL}users/password`, {
        method: 'PATCH',
        headers: {
            'Content-type': 'application/json',
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({ 'old-password': oldPassword, 'new-password': newPassword })
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
        throw error
    })
}

export default updatePassword