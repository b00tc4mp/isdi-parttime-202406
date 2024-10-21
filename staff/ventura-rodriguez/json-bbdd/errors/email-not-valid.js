function EmailNotValidError(message) {
  const instance = new Error(message);
  Object.setPrototypeOf(instance, Object.getPrototypeOf(this));
  if (Error.captureStackTrace) {
    Error.captureStackTrace(instance, EmailNotValidError);
  }
  return instance;
}

EmailNotValidError.prototype = Object.create(Error.prototype);

EmailNotValidError.prototype.name = "EmailNotValidError";

module.exports = EmailNotValidError;
