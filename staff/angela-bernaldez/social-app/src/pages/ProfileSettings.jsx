import { useNavigate } from "react-router-dom"
import { withPermissions } from "../hocs"
import logic from "../logic"

function ProfileSettings() {
    const navigate = useNavigate()

    const onSubmitUsername = (event) => {
        event.preventDefault()
        const username = event.target.username.value

        logic.updateUsername(username)
            .then(() => navigate('/home'))
            .catch((error) => console.log(error))
    }

    return (<main className="px-4 pt-6 pb-10">
        <h1 className="text-2xl font-semibold">Editar Nombre de Usuario</h1>
        <form className="flex flex-col gap-2" onSubmit={onSubmitUsername}>
            <label htmlFor="username">Elige tu nuevo nombre:</label>
            <input className="w-80 bg-gray-500" id="username" type="text" placeholder="nuevoNombre"></input>
            <button type="submit" className="self-start border px-1 bg-green-500 hover:bg-pink-300">Guardar Cambios</button>
        </form>
    </main>)
}

export default withPermissions(ProfileSettings)