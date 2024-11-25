import { Errors } from "social-common"

export default() => {
    const token = sessionStorage.getItem("token")

    return fetch(`${process.env.REACT_APP_API_URL}users/auth`, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    .then((res) => {
        if (res.status !== 200) throw new Errors.ServerError();

        return res.json()
    })
    .catch((error) => {
        if (error instanceof TypeError)
            throw new Errors.ServerError("Server in not connected")
        throw error;
    })
}