import { useMemo } from 'react'
import { SignUpForm } from '../components'
import ModalContext from '../context/ModalContext'
// import registerUser from '../logic/registerUser'
import { useNavigate } from 'react-router-dom'

function SignUp() {

    const { useModalError } = ModalContext
    const navigate = useNavigate()
    const openModalError = useModalError()

    const onSubmit = (data) => {
        try {
            /*
        return registerUser(data)
            .then(() => {
            navigate("/login")
            })
            .catch((err) => {
            openModalError(err)
            })
            */
        } catch (error) {
        throw error
        }
    }

    return (
        <section className="w-screen h-full min-h-[calc(100vh-var(--header-heigth))] sm:py-20">
        <SignUpForm
            className="mx-auto max-sm:min-h-[calc(100vh-var(--header-heigth))]"
            onSubmit={onSubmit}
        />
        </section>
    )
}

export default SignUp