import { Errors } from 'common'

const registerUser = ( username, email, password, repeatPassword ) => {
    // TODO: add validators

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
        body: JSON.stringify({
            username,
            email,
            password
        })
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
        if (error instanceof TypeError)
          throw new Errors.ServerError('Server in not connected')
        throw error
    })
}

export default registerUser