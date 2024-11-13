import * as Errors from "./errors.js";


class Validator {
  static email(value) {
    if (typeof value !== 'string') throw new TypeError("Email is not a string");
    if (value.trim().length <= 0) throw new Errors.ContentError("Email is empty");

    const regExp = new RegExp(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );

    if (!regExp.test(value)) throw new Errors.EmailNotValidError("Email format is not valid");

  }

  static password(value) {
    if (typeof value !== 'string') throw new TypeError("Password is not a string");
    if (value.trim().length <= 0) throw new Errors.ContentError("Password is empty");

    /*const regExp = new RegExp(
      /^(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}[\]:;"'<>?,./~`-])(?=.{8,})/
    );
    return regExp.test(value);*/
  }

  static username(value) {
    if (typeof value !== 'string') throw new TypeError("Username is not a string");
    if (value.trim().length <= 0) throw new Errors.ContentError("Username is empty");
    const regExp = new RegExp(/^[a-zA-Z0-9]{1,12}$/);
    if (!regExp.test(value)) throw new Errors.UsernameNotValidError("Username format is not valid")
  }

  static dateOfBirth(value) {
    if (typeof value !== 'string') throw new TypeError("Date is not a string");
    if (value.trim().length <= 0) throw new Errors.ContentError("Date is empty");

    /*TODO: (FLORS) que hace este regex?!?
    
    const dateOfBirthRegExp =
      /^(0[1-9]|1[0-2])\/(0[1-9]|1[0-9]|2[0-9]|3[01])\/\d{4}$/;
    if (!dateOfBirthRegExp.test(value)) throw new Errors.DateOfBirthNotValidError("Date format is not valid"); // Invalid format
    const [day, month, year] = value.split("/").map(Number);
    const today = new Date();
    const birthDate = new Date(year, month - 1, day); // Months are 0-indexed
    const age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (age < 18 || (age === 18 && monthDiff < 0)) throw new RangeError("Age not allowed");*/
  }
}

export default Validator;