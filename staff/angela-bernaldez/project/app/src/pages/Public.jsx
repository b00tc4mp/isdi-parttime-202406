import { Route, Routes } from 'react-router'
import { SignUp, Landing, LogIn } from './publicPages'

function Public({ onUserLoggedIn }) {
    return <>
        <div className='container'>
            <Routes>
                <Route path='/' element={<Landing onUserLoggedIn={onUserLoggedIn} />} />
                <Route path='/login' element={<LogIn onUserLoggedIn={onUserLoggedIn} />} />
                <Route path='/signup' element={<SignUp />} />
            </Routes>
        </div>
    </>
}

export default Public