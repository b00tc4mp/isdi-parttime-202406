export * as Errors from "./errors.js"; //Exportamos todo lo que hay en errors.js como Errors
// eslint-disable-next-line import/first
import _Validator from "./validator.js"; // Nos traemos lo que hay en validator.js como _Validator 
export const Validator = _Validator; // Lo exportamos como Validator
