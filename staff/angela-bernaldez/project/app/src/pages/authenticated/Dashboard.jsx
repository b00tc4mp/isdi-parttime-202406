import { Link } from "react-router"
import LogInForm from "../../components/Forms/LogInForm"

function Dashboard({ onUserLoggedIn }) {
    return <div className="flex flex-col gap-3 items-center">
        <h1 className="pb-1 text-5xl">hello user</h1>
    </div>
}

export default Dashboard


// fetch get all usr cities -> traerme todas las ciudades
// mapearlas


// componente -> cada ciudad tarjetita
// y eso lo meto dentro del map con un return 