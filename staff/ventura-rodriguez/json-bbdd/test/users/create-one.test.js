const { users } = require("../../scripts");
const fs = require("fs");
const path = require("path");

var assert = require("assert");
describe("Users scripts", function () {
  describe("#createOne", function () {
    // el createOne devuelve por callback el id del usuario creado
    it("Create a user with reasonable data", function () {
      const data = {
        name: "Angela",
        birthDate: "2000-01-01",
        phone: "+34 123456789",
        email: "angela@gmail.com",
        password: "123456789",
      };
      users.createOne(data, (id) => {
        assert.equal(typeof id === "number", true);

        fs.readFile(
          path.join(__dirname, "../../database/users.json"),
          "utf-8",
          (err, _data) => {
            if (err) throw err;
            const data = JSON.parse(_data);
            const user = data.users.filter((_user) => _user.id === id)[0];
            assert.equal(user.name, "Angela");
            assert.equal(user.birth_date, "2000-01-01");
            assert.equal(user.phone, "+34 123456789");
            assert.equal(user.email, "angela@gmail.com");
            assert.equal(user.password, "123456789");

            data.users.pop();
            fs.writeFile(
              path.join(__dirname, "../../database/users.json"),
              JSON.stringify({ users: data.users }),
              "utf-8",
              (err) => {
                if (err) throw err;
              }
            );
          }
        );
      });
    });
  });
});
