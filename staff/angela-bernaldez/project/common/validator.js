class Validator {
    static email(value) {

        if (typeof value !== 'string') throw new TypeError('Email is not a string')
        if (value.trim().length <= 0) throw new Errors.ContentError('Email is empty')

        const regExp = new RegExp(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )

        if (!regExp.test(value)) throw new Errors.EmailNotValidError('Email format is not valid')

        return true
    }

    static password(value) {
        if (typeof value !== 'string') throw new TypeError('Password is not a string')
        if (value.trim().length <= 0) throw new Errors.ContentError('Password is empty')
    
        /*const regExp = new RegExp(
          /^(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}[\]:;"'<>?,./~`-])(?=.{8,})/
        );
        return regExp.test(value);*/
    
        return true
    }

    static username(value) {
        if (typeof value !== 'string') throw new TypeError('Username is not a string')
        if (value.trim().length <= 0) throw new Errors.ContentError('Username is empty')
        const regExp = new RegExp(/^[a-zA-Z0-9]{1,12}$/)
        if (!regExp.test(value)) throw new Errors.UsernameNotValidError('Username format is not valid')
    
        return true
    }

    static confirmationPassword(value1, value2) {
        if (value1 !== value2) throw Errors.ConfirmationError('Passwords do not match')
    
        return true
    }
    
    static id(value) {
        if (typeof value !== 'string') throw new TypeError('Id is not a string')
        if (value.trim().length <= 0) throw new Errors.ContentError('Id is empty')
    
        return true
    }
}

export default Validator