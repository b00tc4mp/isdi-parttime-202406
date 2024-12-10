import * as Errors from "./errors.js";

class Validator {
  static username(value) {
    if (typeof value !== "string")
      throw new TypeError("Username is not a string");
    const regExp = /^[A-Z][a-z]+$/;

    if (!regExp.test(value)) {
      throw new Errors.UsernameNotValidError(" Username format is not valid");
    }
    return true;
  }

  static surname(value) {
    if (typeof value !== "string")
      throw new TypeError("Surname is not a string");
    const regExp = /^[A-Z][a-z]+$/;

    if (!regExp.test(value)) {
      throw new Errors.SurnameNotValidError(" Surname format is not valid");
    }

    return true;
  }

  static phoneNumber(value) {
    if (typeof value !== "string")
      throw new TypeError("Phone number is not a string");
    if (value.trim().length <= 0)
      throw new Errors.ContentError("Phone number is empty");

    const strictPhoneRegex = /^\+?\d{1,3}\s?\(?\d{1,4}\)?[-.\s]?\d{3,10}$/;

    if (!strictPhoneRegex.test(value))
      throw new Errors.PhoneNumberNotValidError(
        "Phone number format is not valid"
      );

    return true;
  }

  static nif(value) {
    if (typeof value !== "string") throw new TypeError("DNI is not a string");
    if (value.length !== 9) {
      throw new Error("DNI must have 9 characters");
    }

    // Extract the number and letter
    const number = value.substring(0, 8);
    const letter = value.charAt(8).toUpperCase();

    // Calculate the control letter
    const letters = "TRWAGMYFPDXBNJZSQVHLCKE";
    const rest = number % 23;
    const calculatedLetter = letters.charAt(rest);
    // Compare the calculated letter with the provided letter
    if (letter !== calculatedLetter) {
      throw new Error("DNI is not valid");
    }

    return true;
  }

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

    const regExp = new RegExp(
      /^(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}[\]:;"'<>?,./~`-])(?=.{8,})/
    );
    return regExp.test(value);

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
