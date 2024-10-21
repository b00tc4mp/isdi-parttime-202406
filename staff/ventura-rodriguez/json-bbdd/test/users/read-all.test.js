const { users } = require("../../scripts");
const fs = require("fs");
const path = require("path");
const { assert } = require("chai");

describe("Users scripts", function () {
  describe("#readAll", function () {
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

    it("All database users listed correctly", function (done) {
      users.readAll((err, users) => {
        if (err) throw err;
        assert.notExists(err);
        assert.isArray(users);
        done();
      });
    });
  });
});
