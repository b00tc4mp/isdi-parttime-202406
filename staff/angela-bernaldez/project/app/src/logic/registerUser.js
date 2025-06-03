import { Validator, Errors } from 'common'

const registerUser = ( username, email, password, repeatPassword ) => {
    
    Validator.username(username)
    Validator.email(email)
    Validator.password(password)
    Validator.password(repeatPassword)
    Validator.confirmationPassword(password, repeatPassword)

    const user = {
        username,
        email,
        password
    }

    return fetch(`${import.meta.env.VITE_API_URL}users`, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(user)
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

export default registerUser