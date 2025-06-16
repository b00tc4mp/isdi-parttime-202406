function NotFoundError(message) {
    const instance = new Error(message);
    Object.setPrototypeOf(instance, Object.getPrototypeOf(this));
    if (Error.captureStackTrace) {
      Error.captureStackTrace(instance, NotFoundError);
    }
    return instance;
  }
  
  NotFoundError.prototype = Object.create(Error.prototype, {
    constructor: {
      value: Error,
    },
  });
  
  NotFoundError.prototype.name = "NotFoundError";
  
  module.exports = NotFoundError;