import { LogInForm } from '../components'

function LogIn() {
    return (
        <section className="w-screen h-full min-h-[calc(100vh-var(--header-heigth))] sm:py-20">
            <LogInForm
            className="mx-auto max-sm:min-h-[calc(100vh-var(--header-heigth))]"
            onSubmit={(event) => {
                // llamar a la api en busca del usuario con contraseña y correo
                // si el auth no sale bien avisa al compo LoginForm para que lance errores
                // si el auth sale bien redirige al usuario a la home
                console.log(event)
            }}
            />
      </section>
    )
}

export default LogIn