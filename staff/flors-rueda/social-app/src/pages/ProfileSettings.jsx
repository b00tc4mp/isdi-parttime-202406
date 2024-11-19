
import { useNavigate } from "react-router-dom";
import { withPermissions } from "../hocs"
import logic from "../logic";
import { useModalError } from "../context/ModalContext";

function ProfileSettings() {
    const navigate = useNavigate();
    const openModalError = useModalError()

    const onSubmitUsername = (event) => {
        event.preventDefault();
        const username = event.target.username.value;

        logic.updateUsername(username)
            .then(() => navigate('/home'))
            .catch((error) => openModalError(error))
    }

    const onSubmitEmail = (event) => {
        event.preventDefault();
        const email = event.target.email.value;

        logic.updateEmail(email)
            .then(() => navigate('/home'))
            .catch((error) => openModalError(error))
    }

    const onSubmitPassword = (event) => {
        event.preventDefault();
        const oldPassword = event.target.old.value;
        const newPassword = event.target.new.value;
        const confirmPassword = event.target.confirm.value;

        logic.updatePassword(oldPassword, newPassword, confirmPassword)
            .then(() => navigate('/home'))
            .catch((error) => openModalError(error))
    }

    const onSubmitDelete = (event) => {
        event.preventDefault();
        const password = event.target.password.value;
        logic.deleteUser(password)
            .then(() => {
                logic.logout();
                navigate('/');
            })
            .catch(error => {
                openModalError(error)
            })
    }

    return (<main className="h-full px-4 pt-6 pb-10 flex flex-col gap-5">
        <section>
            <h1 className="text-2xl font-semibold">Editar Nombre de Usuario</h1>
            <form className="flex flex-col gap-2" onSubmit={onSubmitUsername}>
                <label htmlFor="username">Elige tu nuevo nombre:</label>
                <input className="w-80 bg-gray-500" id="username" type="text" placeholder="nuevoNombre"></input>
                <button type="submit" className="self-start border px-1 bg-green-500 hover:bg-pink-300">Guardar Nombre</button>
            </form>
        </section>
        <section>
            <h1 className="text-2xl font-semibold">Editar Email</h1>
            <form className="flex flex-col gap-2" onSubmit={onSubmitEmail}>
                <label htmlFor="email">Elige tu nuevo email:</label>
                <input className="w-80 bg-gray-500" id="email" type="email" placeholder="nuevo@email.com"></input>
                <button type="submit" className="self-start border px-1 bg-green-500 hover:bg-pink-300">Guardar Email</button>
            </form>
        </section>
        <section>
            <h1 className="text-2xl font-semibold">Editar Contraseña</h1>
            <form className="flex flex-col gap-2" onSubmit={onSubmitPassword}>
                <label htmlFor="new">Elige tu nueva contraseña:</label>
                <input className="w-80 bg-gray-500" id="new" type="password"></input>
                <label htmlFor="confirm">Repite tu nueva contraseña:</label>
                <input className="w-80 bg-gray-500" id="confirm" type="password"></input>
                <label htmlFor="old">Confirma el cambio con tu antigua contraseña:</label>
                <input className="w-80 bg-gray-500" id="old" type="password"></input>
                <button type="submit" className="self-start border px-1 bg-green-500 hover:bg-pink-300">Guardar Contraseña</button>
            </form>
        </section>
        <section>
            <h1 className="text-2xl font-semibold">Eliminar Cuenta</h1>
            <form className="flex flex-col gap-2" onSubmit={onSubmitDelete}>
                <label htmlFor="password">Confirma que quieres eliminar tu cuenta con tu contraseña laralalalala :D </label>
                <input className="w-80 bg-gray-500" id="password" type="password"></input>
                <button type="submit" className="self-start border px-1 bg-red-500 hover:bg-blue-300">Eliminar Cuenta</button>
            </form>
        </section>

    </main>)
}

export default withPermissions(ProfileSettings);