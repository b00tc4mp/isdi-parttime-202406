
function NotAnIntegerError(message) {
    const instance = new Error(message);
    Object.setPrototypeOf(instance, Object.getPrototypeOf(this));
    if (Error.captureStackTrace) {
        Error.captureStackTrace(instance, NotAnIntegerError);
    }
    return instance;
}

NotAnIntegerError.prototype = Object.create(error.prototype);

NotAnIntegerError.prototype.name = "NotAnIntegerError";

module.exports = NotAnIntegerError;
