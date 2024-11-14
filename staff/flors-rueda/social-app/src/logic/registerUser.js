import { Validator, Errors } from 'social-common'

const registerUser = ({
  username,
  dateOfBirth,
  email,
  password,
  repeatPassword,
}) => {
  Validator.username(username);
  Validator.dateOfBirth(dateOfBirth);
  Validator.email(email);
  Validator.password(password);
  Validator.password(repeatPassword);
  Validator.confirmationPassword(password, repeatPassword);

  const user = {
    username,
    'date-of-birth': dateOfBirth,
    email,
    password
  }


  return fetch(`${process.env.REACT_APP_API_URL}users`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(user)
  })
    .then((res) => {
      if (res.status !== 201) throw new Errors.ServerError(res.json());

      return;
    })
    .catch((error) => {
      if (error instanceof TypeError)
        throw new Errors.ServerError("Server in not connected");
      throw error;
    });
};

export default registerUser;
