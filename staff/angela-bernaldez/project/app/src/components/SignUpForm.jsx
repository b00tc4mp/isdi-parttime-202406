import { Link } from 'react-router-dom'
import {
  IconEmail,
  IconHidePassword,
  IconPassword,
  IconShowPassword,
  IconSignUp,
  IconUsername,
} from './icons'
import classNames from 'classnames'
import { useState } from 'react'
import EN from '../locals/en.json'
import { FormErrorsSection } from '.'


function SignUpForm({ className, onSubmit }) {
    const [errors, setErrors] = useState(null);
  
    const submit = (event) => {
      event.preventDefault()
  
      const {
        name: inputUsername,
        email: inputEmail,
        password: inputPassword,
        repeatPassword: inputRepeatPassword,
      } = event.target
  
      /*
      const newErrors = []
  
      if (!(inputPassword.value === inputRepeatPassword.value)) {
        newErrors.push(
          new Errors.PasswordNotValidError("Password and repeatPassword do not match")
        );
        newErrors[newErrors.length - 1].order = 4
        inputPassword.value = ""
        inputRepeatPassword.value = ""
        inputPassword.focus()
      }
  
      if (
        inputPassword.value === inputRepeatPassword.value &&
        !Validator.password(inputPassword.value)
      ) {
        newErrors.push(new Errors.PasswordNotValidError("Password is not valid"))
        newErrors[newErrors.length - 1].order = 4
        inputPassword.focus()
      }
  
      if (!Validator.email(inputEmail.value)) {
        newErrors.push(new Errors.EmailNotValidError("Email is not valid"))
        newErrors[newErrors.length - 1].order = 3
        inputEmail.focus()
      }
  
      if (!Validator.username(inputUsername.value)) {
        newErrors.push(new Errors.UsernameNotValidError("Username is not valid"))
        newErrors[newErrors.length - 1].order = 1
        inputUsername.focus();
      }
  
      setErrors(newErrors.length > 0 ? newErrors : null)
  
      if (newErrors.length === 0) {
        try {
          onSubmit({
            username: inputUsername.value,
            dateOfBirth: date,
            email: inputEmail.value,
            password: inputPassword.value,
            repeatPassword: inputRepeatPassword.value,
          }).catch((err) => {
            if (err instanceof Errors.BadRequestError) return setErrors([err])
            if (err instanceof Errors.ServerError) return setErrors([err])
            setErrors([new Errors.UnexpectedError()])
          });
        } catch (err) {
          err.order = 1;
          setErrors([err])
        }
      }
    */
    }

  
    const showPassword = (buttonSelector, inputSelector) => {
      document
        .querySelectorAll(`[data-${buttonSelector}="true"]`)[0]
        .classList.toggle("swap-active");
      const element = document.getElementById(inputSelector);
      element.type = element.type === "text" ? "password" : "text";
    }
  
    return (
      <>
        <div
          className={classNames(
            "bg-neutral-800 max-w-screen-sm px-9 py-12",
            className
          )}
        >
          <form onSubmit={submit}>
            <div className="grid mb-5">
              <IconSignUp className="place-self-center w-16 h-16" />
            </div>
            <h3 className="text-center mb-8 text-xl">{EN.signupForm.title}</h3>
            <fieldset className="mb-5">
              <legend className="mb-4 text-sm">{EN.signupForm.subtitle}</legend>
              <label className="input input-bordered input-ghost glass flex items-center gap-2 mb-4">
                <IconUsername fill="white" />
                <input
                  type="text"
                  id="username"
                  name="username"
                  placeholder={EN.signupForm.inputUsername.placeholder}
                  className="grow focus:text-white placeholder:text-white placeholder:text-opacity-70"
                />
              </label>
              <label className="input input-bordered input-ghost glass flex items-center gap-2 mb-4">
                <IconEmail fill="white" />
                <input
                  type="text"
                  id="email"
                  name="email"
                  placeholder={EN.signupForm.inputEmail.placeholder}
                  className="grow focus:text-white placeholder:text-white placeholder:text-opacity-70"
                />
              </label>
              <div className="form-control mb-4">
                <label className="input input-bordered input-ghost glass flex items-center gap-2">
                  <IconPassword fill="white" />
                  <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder={EN.signupForm.inputPassword.placeholder}
                    className="grow focus:text-white placeholder:text-white placeholder:text-opacity-70"
                  />
                  <button
                    className="swap swap-flip swap-active btn btn-xs p-2 btn-ghost btn-circle text-white"
                    type="button"
                    data-showpassword="true"
                    onClick={() => showPassword("showpassword", "password")}
                  >
                    <IconHidePassword className="swap-on w-6 h-6" />
                    <IconShowPassword className="swap-off w-6 h-6" />
                  </button>
                </label>
                <div className="label">
                  <span className="label-text-alt text-white">
                    {EN.signupForm.inputPassword.helpText}
                  </span>
                </div>
              </div>
              <label className="input input-bordered input-ghost glass flex items-center gap-2">
                <IconPassword fill="white" />
                <input
                  type="password"
                  id="repeatPassword"
                  name="repeatPassword"
                  placeholder={EN.signupForm.inputRepeatPassword.placeholder}
                  className="grow focus:text-white placeholder:text-white placeholder:text-opacity-70"
                />
                <button
                  className="swap swap-flip swap-active btn btn-xs p-2 btn-ghost btn-circle text-white"
                  type="button"
                  data-showrepeatpassword="true"
                  onClick={() =>
                    showPassword("showrepeatpassword", "repeatPassword")
                  }
                >
                  <IconHidePassword className="swap-on w-6 h-6" />
                  <IconShowPassword className="swap-of w-6 h-6" />
                </button>
              </label>
            </fieldset>
            <FormErrorsSection errors={errors} className="mb-5" />
            <div className="mb-5 grid">
              <button
                type="submit"
                className="place-self-center btn btn-primary btn-block text-base"
              >
                {EN.signupForm.submitButton}
              </button>
            </div>
            <div className="text-xs flex justify-end">
              <Link to="/login" target="_self" className="link link-secondary">
                {EN.signupForm.linkToLoginPage}
              </Link>
            </div>
          </form>
        </div>
      </>
    )
}
  
export default SignUpForm