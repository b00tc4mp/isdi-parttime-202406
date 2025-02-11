import * as Errors from "./errors.js";
import mongoose from "mongoose";

class Validator {
  ///////////////////////////// USER VALIDATORS /////////////////////////////
  static username(value) {
    if (typeof value !== "string")
      throw new TypeError("Username is not a string");
    const regExp = /^[A-Z][a-zA-Z0-9]{0,11}$/;

    if (!regExp.test(value)) {
      throw new Errors.UsernameNotValidError(" Username format is not valid");
    }
    return true;
  }

  static surname(value) {
    if (typeof value !== "string")
      throw new TypeError("Surname is not a string");
    const regExp = /^[A-Z][a-zA-Z0-9]{0,11}$/;

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
    if (value.trim().length === 0) throw new Errors.ContentError("Id is empty");
    if (!mongoose.Types.ObjectId.isValid(value)) {
      throw new Errors.CredentialsError("Invalid ID format");
    }
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

  ///////////////////////////// DOG VALIDATORS /////////////////////////////

  static chip(value) {
    if (typeof value === "number") {
      value = value.toString();
      console.log("Converted chip to string:", value);
    }

    if (typeof value !== "string") {
      throw new TypeError("Chip is not a string");
    }

    if (value.trim().length <= 0) {
      throw new Errors.ContentError("Chip is empty");
    }

    const regExp = /^\d{15}$/;
    if (!regExp.test(value)) {
      throw new Errors.ContentError("Chip format is not valid");
    }

    return true;
  }

  static dogName(value) {
    if (typeof value !== "string")
      throw new TypeError("Dog's name is not a string");
    if (value.trim().length <= 0)
      throw new Errors.ContentError("Dog's name is empty");
    if (value.length > 30)
      throw new Errors.ContentError("Dog's name is too long");
    return true;
  }

  static breed(value) {
    if (typeof value !== "string") throw new TypeError("Breed is not a string");
    if (value.trim().length <= 0)
      throw new Errors.ContentError("Breed is empty");
    if (value.length > 50) throw new Errors.ContentError("Breed is too long");
    return true;
  }

  static birthDate(value) {
    if (typeof value === "string") {
      value = new Date(value);
    }

    if (!(value instanceof Date) || isNaN(value.getTime())) {
      throw new TypeError("Birth date is not a valid date");
    }

    const currentDate = new Date();
    if (value > currentDate) {
      throw new Errors.DateOfBirthNotValidError(
        "Birth date cannot be in the future"
      );
    }

    return true;
  }

  static sociability(value) {
    if (typeof value !== "boolean")
      throw new TypeError("Sociability is not a boolean");
    return true;
  }

  static disease(value) {
    if (typeof value !== "string")
      throw new TypeError("Disease is not a string");
    return true;
  }

  static allergy(value) {
    if (typeof value !== "string")
      throw new TypeError("Allergy is not a string");
    return true;
  }

  /////////////////////// BOOKING VALIDATORS ///////////////////////
  /*
  static bookingDogs(value) {
    if (!Array.isArray(value)) {
      throw new TypeError("Dogs must be an array");
    }

    if (value.length === 0) {
      throw new Errors.ContentError(
        "At least one dog is required for a booking."
      );
    }

    for (const dogId of value) {
      Validator.id(dogId);
    }
    return true;
  }*/
  /*
  static owner(value) {
    if (!Array.isArray(value)) {
      throw new TypeError("Owner must be an array");
    }
    if (value.length === 0) {
      throw new Errors.ContentError(
        "At least one owner is required for a booking."
      );
    }

    for (const ownerId of value) {
      Validator.id(ownerId);
    }
    return true;
  }*/

  static startDate(value) {
    if (typeof value === "string") {
      value = new Date(value);
    }

    if (!(value instanceof Date) || isNaN(value.getTime())) {
      throw new TypeError("Start date is not a valid date");
    }

    const currentDate = new Date();
    if (value < currentDate) {
      throw new Errors.DateNotValidError("Start date cannot be in the past");
    }

    return true;
  }

  static endDate(value) {
    if (typeof value === "string") {
      value = new Date(value);
    }
    if (!(value instanceof Date) || isNaN(value.getTime())) {
      throw new TypeError("End date is not a valid date");
    }

    const currentDate = new Date();
    if (value < currentDate) {
      throw new Errors.DateNotValidError("End date cannot be in the past");
    }
    return true;
  }
}

export default Validator;
