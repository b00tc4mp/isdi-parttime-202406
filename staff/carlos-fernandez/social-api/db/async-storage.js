import fs from "fs";

export default {
  getUsers(callback) {
    fs.readFile("./db/users.json", "utf-8", (error, data) => {
      if (error) {
        console.error("Error reading users data:", error);
        return callback(error);
      }
      try {
        const users = JSON.parse(data);
        callback(null, users); // Devuelve users si todo ok
      } catch (error) {
        console.error("Error parsing users data:", error);
        callback(error);
      }
    });
  },

  addUser(user, callback) {
    fs.readFile("./db/users.json", "utf-8", (error, data) => {
      if (error) {
        console.error("Error reading users data:", error);
        return callback(error);
      }

      try {
        const users = JSON.parse(data);
        users.push(user);

        const json = JSON.stringify(users, null, 2);
        fs.writeFile("./db/users.json", json, (error) => {
          if (error) {
            console.error("Error writing users data:", error);
            return callback(error);
          }
          callback(null); // Devuelve nada si todo ok
        });
      } catch (error) {
        console.error("Error parsing users data:", error);
        callback(error);
      }
    });
  },
};
