import { Errors, Validator } from "social-common"

export default (avatar) => {
    Validator.img(avatar);

    const token = sessionStorage.getItem("token");

    return fetch(`${process.env.REACT_APP_API_URL}users/avatar`, {
        method: 'PATCH',
        headers: {
            'Content-type': 'application/json',
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({ avatar: avatar })
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
