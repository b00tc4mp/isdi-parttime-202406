function DniInvalidFormatError(message) {
  const instance = new Error(message);
  Object.setPrototypeOf(instance, Object.getPrototypeOf(this));
  if (Error.captureStackTrace) {
    Error.captureStackTrace(instance, DniInvalidFormatError);
  }
  return instance;
}

DniInvalidFormatError.prototype = Object.create(Error.prototype);

DniInvalidFormatError.prototype.name = "DniInvalidFormatError";

module.exports = DniInvalidFormatError;
