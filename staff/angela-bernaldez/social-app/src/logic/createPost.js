import { Errors } from "social-common";

export default (content) => {
    //añadir validadores

    const token = sessionStorage.getItem("token");

    return fetch(`${process.env.REACT_APP_API_URL}posts`, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({ content: content })
    })
        .then((res) => {
            if (res.status === 201) return;
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