const { users } = require("../../scripts");
const fs = require("fs");
const path = require("path");
const { assert } = require("chai");

describe("Users scripts", function () {
  describe("#readOne", function () {
    let usersBackup = null;

    before((done) => {
      fs.readFile(
        path.join(__dirname, "../../database/users.json"),
        "utf-8",
        (err, _data) => {
          if (err) throw err;
          const data = JSON.parse(_data);
          usersBackup = data.users;
          done();
        }
      );
    });

    after(() => {
      fs.writeFile(
        path.join(__dirname, "../../database/users.json"),
        JSON.stringify({ users: usersBackup }),
        "utf-8",
        (err) => {
          if (err) throw err;
        }
      );
    });

    context("", () => {
      const user = {
        id: 10000,
        name: "Angela",
        birthDate: "2000-01-01",
        phone: "+34 123456789",
        email: "angela@gmail.com",
        password: "123456789",
      };

      beforeEach((done) => {
        fs.writeFile(
          path.join(__dirname, "../../database/users.json"),
          JSON.stringify({
            users: [...usersBackup, user],
          }),
          "utf-8",
          (err) => {
            if (err) throw err;
            done();
          }
        );
      });

      it("User correctly listed", function (done) {
        users.readOne(user.id, (err, user) => {
          if (err) throw err;
          assert.notExists(err);
          assert.isObject(user);
          done();
        });
      });
    });
  });
});
