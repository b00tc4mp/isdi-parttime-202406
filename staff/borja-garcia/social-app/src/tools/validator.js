class Validator {
  static email(value) {
    const regExp = new RegExp(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );

    return regExp.test(value);
  }

  static password(value) {
    const regExp = new RegExp(
      /^(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}[\]:;"'<>?,./~`-])(?=.{8,})/
    );

    return regExp.test(value);
  }

  static username(value) {
    const regExp = new RegExp(/^[a-zA-Z0-9]{1,12}$/);

    return regExp.test(value);
  }
  static dateOfBirth(value) {
    const dateOfBirthRegExp =
      /^(0[1-9]|1[0-2])\/(0[1-9]|1[0-9]|2[0-9]|3[01])\/\d{4}$/;

    if (!dateOfBirthRegExp.test(value)) return false; // Invalid format

    const [day, month, year] = value.split("/").map(Number);
    const today = new Date();
    const birthDate = new Date(year, month - 1, day); // Months are 0-indexed

    const age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();

    if (age < 18 || (age === 18 && monthDiff < 0)) return false; // Not 18 years old yet

    return true;
  }
}

export default Validator;
