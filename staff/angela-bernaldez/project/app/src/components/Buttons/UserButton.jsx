import logic from '../../logic'
import { useNavigate, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'

function UserButton() {

    const navigate = useNavigate()
    const location = useLocation()

    const [username, setUsername] = useState(null)

    useEffect(() => {
        logic.getUser()
        .then((user) => {
            setUsername(user.username)
        })
    }, [])

    const handleClick = () => {
        if (location.pathname === '/dashboard') navigate('/myprofile')
        else if (location.pathname === '/myprofile') navigate('/dashboard')
    }

    return (
        <div className='w-full h-full'>
            <button 
                className="btn btn-ghost px-6 py-2 bg-secondary text-white rounded-lg hover:scale-105 hover:border-2 hover:border-primary hover:bg-secondary transition-all"
                onClick={handleClick}
            >
                <div className="text-center">
                    <p>{location.pathname === '/myprofile' ? 'My Dashboard' : 'Welcome'}</p>
                    {username && location.pathname !== '/myprofile' && <p>{username}</p>}
                </div>
            </button>
        </div>
    )
}

export default UserButton