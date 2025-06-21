const { users } = require("../../scripts");
const fs = require("fs");
const path = require("path");
const { assert } = require("chai");

describe("Users scripts", function () {
  describe("#deleteOne", function () {
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

      it("Delete user with provided id", function (done) {
        users.deleteOne(user.id, user.password, (err, ok) => {
          if (err) throw err;

          assert.isTrue(ok, "Response is not true");

          fs.readFile(
            path.join(__dirname, "../../database/users.json"),
            "utf-8",
            (err, _data) => {
              if (err) throw err;
              const data = JSON.parse(_data);
              const foundUser = data.users.filter(
                (_user) => _user.id === user.id
              )[0];
              assert.notExists(foundUser, "User has not been removed");
              done();
            }
          );
        });
      });
    });
  });
});