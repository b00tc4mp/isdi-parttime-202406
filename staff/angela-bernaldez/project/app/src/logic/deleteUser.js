import { Validator, Errors } from 'common'

const deleteUser = ( password ) => {
    
    Validator.password(password)

    const token = sessionStorage.getItem("token")

    return fetch(`${import.meta.env.VITE_API_URL}users`, {
        method: 'DELETE',
        headers: {
            'Content-type': 'application/json',
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({ password })
    })
    .then((res) => {
        if (res.status === 200) return 
        return res.json()
            .then(body => {
                const constructor = Errors[body.name]
                throw new constructor(`${body.message}`);
            })
      })
    .catch((error) => {
        throw error
    })
}

export default deleteUser