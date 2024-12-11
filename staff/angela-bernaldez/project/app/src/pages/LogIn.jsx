import { LogInForm } from '../components'
import ModalContext from '../context/ModalContext'
import { useNavigate } from 'react-router-dom'

function LogIn() {

    const { useModalError } = ModalContext
    const navigate = useNavigate()
    const openModalError = useModalError()
  
    const onSubmit = ({ email, password }) => {
          try {
            console.log(email, password)
            /*
            return userAuth(email, password)
              .then(() => {
                updateFather()
                navigate("/home")
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
            <LogInForm
            className="mx-auto max-sm:min-h-[calc(100vh-var(--header-heigth))]"
            onSubmit={onSubmit}
            />
      </section>
    )
}

export default LogIn