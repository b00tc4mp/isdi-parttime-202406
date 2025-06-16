import * as Errors from './errors.js';

class Validator {
    static email(value) {
      if (typeof value !== 'string') throw new TypeError("Email is not a string");
      if (value.trim().length <= 0) throw new Errors.ContentError("Email is empty");
  
      const regExp = new RegExp( 
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/
);
  
      if (!regExp.test(value)) throw new Errors.EmailNotValidError("Email format is not valid");
  
      return true;
    }
  
    static password(value) {
      if (typeof value !== 'string') throw new TypeError("Password is not a string");
      if (value.trim().length <= 0) throw new Errors.ContentError("Password is empty");
  
    const regExp = new RegExp(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/
      );
  
      if (!regExp.test(value)) throw new Errors.PasswordNotValidError("Email format is not valid");
  
      return true;
    }
}  

export default Validator;