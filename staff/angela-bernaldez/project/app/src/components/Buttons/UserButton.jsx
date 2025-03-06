import logic from '../../logic'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'

function UserButton() {

    const navigate = useNavigate()

    const [username, setUsername] = useState(null)

    useEffect(() => {
        logic.getUser()
        .then((user) => {
            setUsername(user.username)
        })
    }, [])

    const handleClick = () => {
        navigate('/myprofile')
    }

    return (
        <div className='w-full h-full'>
            <button 
                className="btn btn-ghost px-6 py-2 bg-secondary text-white rounded-lg hover:scale-105 hover:border-2 hover:border-primary hover:bg-secondary transition-all"
                onClick={handleClick}
            >
                <div className="text-center">
                    <p>Welcome</p>
                    {username && <p>{username}</p>}
                </div>
            </button>
        </div>
    )
}

export default UserButton