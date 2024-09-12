const { users } = require("../../scripts");
const fs = require("fs");
const path = require("path");
const { assert } = require("chai");
const { EmailNotValidError } = require("../../errors");

describe("Users scripts", function () {
  describe("#createOne", function () {
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

    // happy path
    it("Create a user with reasonable data", function (done) {
      const data = {
        name: "Angela",
        birthDate: "2000-01-01",
        phone: "+34 123456789",
        email: "angela@gmail.com",
        password: "123456789",
      };
      users.createOne(data, (id) => {
        assert.isNumber(id, "id is not a number");
        fs.readFile(
          path.join(__dirname, "../../database/users.json"),
          "utf-8",
          (err, _data) => {
            if (err) throw err;
            const data = JSON.parse(_data);
            const user = data.users.filter((_user) => _user.id === id)[0];
            assert.isObject(user);
            assert.equal(Object.keys(user).length, 6);
            assert.isString(user.name);
            assert.equal(user.name, "Angela");
            assert.isString(user.birth_date);
            assert.equal(user.birth_date, "2000-01-01");
            assert.isString(user.phone);
            assert.equal(user.phone, "+34 123456789");
            assert.isString(user.email);
            assert.equal(user.email, "angela@gmail.com");
            assert.isString(user.password);
            assert.equal(user.password, "123456789");
            done();
          }
        );
      });
    });

    it("Create a user with invalid email", function (done) {
      const data = {
        name: "Angela",
        birthDate: "2000-01-01",
        phone: "+34 123456789",
        email: "angela    @gmail.com",
        password: "123456789",
      };
      try {
        users.createOne(data, () => {});
      } catch (err) {
        assert.isTrue(err instanceof EmailNotValidError);
        assert.equal(err.message, "Email is not valid");
        done();
      }
    });
  });
});
