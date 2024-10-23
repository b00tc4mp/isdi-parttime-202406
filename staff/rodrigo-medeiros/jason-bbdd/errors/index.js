const NotFoundError = require("./not-found.js");
const EmailNotValidError = require("./email-not-valid.js");
const NotAnIntegerError = require("./not-an-integer.js");
const CredencialsError = require("./credentials.js");
const DniInvalidFormatError = require("./dni-invalid-format.js");

DniInvalidFormatError;
module.exports = {
  EmailNotValidError,
  NotFoundError,
  NotAnIntegerError,
  CredencialsError,
  DniInvalidFormatError,
};
