function CredencialsError(message) {
  const instance = new Error(message);
  Object.setPrototypeOf(instance, Object.getPrototypeOf(this));
  if (Error.captureStackTrace) {
    Error.captureStackTrace(instance, CredencialsError);
  }
  return instance;
}

CredencialsError.prototype = Object.create(Error.prototype);

CredencialsError.prototype.name = "CredencialsError";

module.exports = CredencialsError;
