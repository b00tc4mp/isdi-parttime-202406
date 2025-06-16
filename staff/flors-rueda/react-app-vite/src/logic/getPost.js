import { Errors, Validator } from "social-common"

export default (id) => {
    const token = sessionStorage.getItem("token");

    return fetch(`${import.meta.env.VITE_API_URL}posts/post/${id}`, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${token}`
        },
    })
        .then((res) => {
            if (res.status === 200) return res.json()
                .then(body => body.post)
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
