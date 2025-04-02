import { useNavigate } from 'react-router-dom'
import { useModal } from '../../context'
import modals from '../../modals/modals.json'

function LogOutButton({ onUserLoggedOut }) {

    const navigate = useNavigate()

    const { openModal, openModalError } = useModal()

    const handleLogOut = () => {
        openModal({
            ...modals.logout,
            onConfirm: () => {
                onUserLoggedOut()
                sessionStorage.clear()
                navigate('/')
            }
        })
    }
    

    return (
        <div className='w-full h-full'>
            <button 
                className="btn btn-ghost px-6 py-2 bg-secondary text-white rounded-lg hover:scale-105 hover:border-2 hover:border-primary hover:bg-secondary transition-all"
                onClick={handleLogOut}
            >
                Log out
            </button>
        </div>
    )
}

export default LogOutButton