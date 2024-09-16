const { users } = require("../../scripts");
const fs = require("fs");
const path = require("path");

var assert = require("assert");
describe("User cripts", function () {
  describe("#createOne", function () {
    it("Should create a user with reasonable data.", function () {
      const data = {
        name: "Carl Cox",
        birthDate: "01/01/1979",
        phoneNumber: "698745210",
        email: "carlcox@gmail.com",
        password: "imcarlcox",
      };
      users.createOne(data, (id) => {
        // testear que id sea tipo number
        assert.equal(typeof id === "number", true);
        // llamar a bbdd y ver si los datos introducidos son correctos
        fs.readFile(
          path.join(__dirname, "../../database/users.json"),
          "utf-8",
          (err, _data) => {
            if (err) throw err;

            const data = JSON.parse(_data);

            const user = data.users.filter((_user) => _user.id === id)[0];

            assert.equal(user.name, "Carl Cox");
            assert.equal(user.birth_date, "01/01/1979");
            assert.equal(user.phone_number, "698745210");
            assert.equal(user.email, "carlcox@gmail.com");
            assert.equal(user.password, "imcarlcox");
            //comprobar si user.name corresponde al user del usuario que hemos creado

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
