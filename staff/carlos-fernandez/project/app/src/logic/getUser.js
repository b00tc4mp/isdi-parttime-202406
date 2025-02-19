export default () => {
  const token = sessionStorage.getItem("token");

  return fetch(`${import.meta.env.VITE_APP_API_URL}users/me`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }).then((res) => {
    if (res.status === 200)
      return res.json().then((data) => {
        if (data) {
          console.log("DATAAAAAA", data);
          return data.user;
        } else {
          console.error(data.error);
        }
      });
  });
};
