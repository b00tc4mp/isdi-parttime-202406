import { Validator, Errors } from 'common'

const authenticateUser = ( email, password ) => {
    
    Validator.email(email)
    Validator.password(password)

    return fetch(`${import.meta.env.VITE_API_URL}users/auth`, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    })
    .then((res) => {
        if (res.status === 200) return res.json()
        .then(body => sessionStorage.setItem('token', body.token))
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

export default authenticateUser
