import { Errors } from 'common'

const getAllUserLocations = () => {

    const token = sessionStorage.getItem("token")

    return fetch(`${import.meta.env.VITE_API_URL}users/locations`, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${token}`
        },
    })
    .then((res) => {
        if (res.status === 200) return res.json()
            .then(body => body.favLocations)
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

export default getAllUserLocations