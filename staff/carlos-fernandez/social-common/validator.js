import * as Errors from "./errors.js";

class Validator {
  static email(value) {
    if (typeof value !== "string") throw new TypeError("Email is not a string");
    if (value.trim().length <= 0)
      throw new Errors.ContentError("Email is empty");

    const regExp = new RegExp(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );

    if (!regExp.test(value))
      throw new Errors.EmailNotValidError("Email format is not valid");

    return true;
  }

  static password(value) {
    if (typeof value !== "string")
      throw new TypeError("Password is not a string");
    if (value.trim().length <= 0)
      throw new Errors.ContentError("Password is empty");

    /*const regExp = new RegExp(
      /^(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}[\]:;"'<>?,./~`-])(?=.{8,})/
    );
    return regExp.test(value);*/

    return true;
  }

  static username(value) {
    if (typeof value !== "string")
      throw new TypeError("Username is not a string");
    if (value.trim().length <= 0)
      throw new Errors.ContentError("Username is empty");
    const regExp = new RegExp(/^[a-zA-Z0-9]{1,12}$/);
    if (!regExp.test(value))
      throw new Errors.UsernameNotValidError("Username format is not valid");

    return true;
  }

  static dateOfBirth(value) {
    if (typeof value !== "string") throw new TypeError("Date is not a string");
    if (value.trim().length <= 0)
      throw new Errors.ContentError("Date is empty");

    const dateOfBirthRegExp =
      /^(0[1-9]|1[0-2])\/(0[1-9]|1[0-9]|2[0-9]|3[01])\/\d{4}$/;

    if (!dateOfBirthRegExp.test(value))
      throw new Errors.DateOfBirthNotValidError("Date format is not valid"); // Invalid format

    const [day, month, year] = value.split("/").map(Number);
    const today = new Date();
    const birthDate = new Date(year, month - 1, day); // Months are 0-indexed

    const age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();

    if (age < 18 || (age === 18 && monthDiff < 0))
      throw new RangeError("Age not allowed");

    return true;
  }

  static confirmationPassword(value1, value2) {
    if (!(value1 === value2))
      throw Errors.ConfirmationError("Passwords do not match");

    return true;
  }

  static id(value) {
    if (typeof value !== "string") throw new TypeError("Id is not a string");
    if (value.trim().length <= 0) throw new Errors.ContentError("Id is empty");

    return true;
  }

  static content(value) {
    if (typeof value !== "string")
      throw new TypeError("Content is not a string");
    if (value.trim().length <= 0)
      throw new Errors.ContentError("Content is empty");
    if (value.length > 120)
      throw new Errors.ContentError("Content is too long");

    return true;
  }

  static img(value) {
    if (typeof value !== "string")
      throw new TypeError("Img link is not a string");
    if (value.trim().length <= 0)
      throw new Errors.ContentError("Img link is empty");
    if (!value.startsWith("http"))
      throw new ValidationError(`Invalid link img`);
    //comprobar que valida tipo .png, .jpg, .webp, .gif

    return true;
  }

  static bio(value) {
    if (typeof value !== "string") throw new TypeError("Bio is not a string");
    if (value.trim().length <= 0) throw new Errors.ContentError("Bio is empty");
    if (value.length > 100) throw new Errors.ContentError("Bio is too long");

    return true;
  }
}

export default Validator;
