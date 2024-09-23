function CredentialsError(message) {
    const instance = new Error(message);
    Object.setPrototypeOf(instance, Object.getPrototypeOf(this));
    if (Error.captureStackTrace) {
      Error.captureStackTrace(instance, CredentialsError);
    }
    return instance;
}
  
CredentialsError.prototype = Object.create(Error.prototype);

CredentialsError.prototype.name = "CredentialsError"

module.exports = CredentialsError