import { Validator, Errors } from "common";

const createBooking = ({ dogIds, startDate, endDate }) => {
  // Validator.array(dogIds, "Dog IDs");
  Validator.startDate(startDate, "Start Date");
  Validator.endDate(endDate, "End Date");

  const token = sessionStorage.getItem("token");

  console.log("LO QUE ENVIA EL FETCH INICIO: ", startDate);
  console.log("LO QUE ENVIA EL FETCH FIN: ", endDate);
  return fetch(`${import.meta.env.VITE_APP_API_URL}users/booking`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ dogIds, startDate, endDate }),
  })
    .then((res) => {
      if (res.status === 201) return;
      return res.json().then((body) => {
        const constructor = Errors[body.name];
        throw new constructor(`${body.message}`);
      });
    })
    .catch((error) => {
      if (error instanceof TypeError)
        throw new Errors.ServerError("Server is not connected");
      throw error;
    });
};

export default createBooking;
