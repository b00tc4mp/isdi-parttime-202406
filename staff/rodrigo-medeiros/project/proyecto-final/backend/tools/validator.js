import {
  EmailNotValidError,
  PasswordNotValidError,
  UsernameNotValidError,
} from "./errors.js";

class Validator {
  static email(value) {
    const regExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regExp.test(value)) {
      throw new EmailNotValidError("Invalid email format");
    }
  }

  static password(value) {
    const regExp =
      /^(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}[\]:;"'<>?,./~`-])(?=.{8,})/;
    if (!regExp.test(value)) {
      throw new PasswordNotValidError(
        "Password must have at least 8 characters, one uppercase letter, and one special character"
      );
    }
  }

  static username(value) {
    const regExp = /^[a-zA-Z0-9]{1,12}$/;
    if (!regExp.test(value)) {
      throw new UsernameNotValidError(
        "Username must be alphanumeric and between 1 to 12 characters"
      );
    }
  }
}

export default Validator;
