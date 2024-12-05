import { Errors, Validator } from "social-common"

export default (username) => {
    //Validator.username(username);

    const token = sessionStorage.getItem("token");

    return fetch(`${import.meta.env.VITE_API_URL}users/username`, {
        method: 'PATCH',
        headers: {
            'Content-type': 'application/json',
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({ username: username })
    })
        .then((res) => {
            if (res.status === 200) return;
            return res.json()
                .then(body => {
                    const constructor = Errors[body.name]
                    throw new constructor(`${body.message}`);
                })
        })
        .catch((error) => {
            if (error instanceof Errors.BadRequestError)
                throw new Errors.ServerError("Server in not connected");
            throw error;
        });
}