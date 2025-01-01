import jwt from 'jsonwebtoken'

const getAllUserLocations = () => {
    const token = sessionStorage.getItem("token")

    const { userId } = jwt.verify(token.split(" ")[1], import.meta.env.VITE_JWT_SECRET)

    return fetch(`${import.meta.env.VITE_API_URL}users/:userId/locations`, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
}

export default getAllUserLocations