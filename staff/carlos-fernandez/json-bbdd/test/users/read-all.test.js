const { users } = require("../../scripts");

var assert = require("assert");
describe("Users scripts", function () {
  describe("#readAll", function () {
    it("Should return a user list", function () {
      users.readAll((users) => {
        assert.equal(users instanceof Array, true);

        users.forEach((user) => {
          assert.equal(typeof user.id !== "undefined", true);
          assert.equal(typeof user.name !== "undefined", true);
          assert.equal(typeof user.birth_date !== "undefined", true);
          assert.equal(typeof user.phone !== "undefined", true);
          assert.equal(typeof user.email !== "undefined", true);
          assert.equal(typeof user.password !== "undefined", true);
        });
      });
    });
  });
});
