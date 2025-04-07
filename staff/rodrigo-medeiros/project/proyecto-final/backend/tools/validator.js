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
  static dateOfBirth(value) {
    const birthDate = new Date(value);
    if (isNaN(birthDate.getTime())) {
      throw new BadRequestError("Invalid date format");
    }

    const today = new Date();
    const age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    const dayDiff = today.getDate() - birthDate.getDate();

    if (
      age < 18 ||
      (age === 18 && (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)))
    ) {
      throw new BadRequestError("User must be at least 18 years old");
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
