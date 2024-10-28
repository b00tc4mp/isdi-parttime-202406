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
}

export default Validator;
