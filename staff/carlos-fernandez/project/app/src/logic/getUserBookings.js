export default () => {
  const token = sessionStorage.getItem("token");

  return fetch(`${import.meta.env.VITE_APP_API_URL}users/me/mybookings`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((res) => {
      if (res.status === 200) {
        return res.json().then((data) => {
          return data.bookings;
        });
      } else {
        return res.json().then((body) => {
          const error = new Error(body.message);
          error.name = body.name;
          throw error;
        });
      }
    })
    .catch((error) => {
      console.error("Error fetching bookings:", error.message);
      throw error;
    });
};
