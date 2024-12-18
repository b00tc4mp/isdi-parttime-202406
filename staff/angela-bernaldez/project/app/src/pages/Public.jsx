import { Outlet, Route, Routes } from 'react-router'
import { SignUp, LogIn } from './publicPages'

function Public({ onUserLoggedIn }) {
    return <>
        <div className='container'>
            <Routes>
                <Route path='/' element={<LogIn onUserLoggedIn={onUserLoggedIn} />} />
                <Route path='/login' element={<LogIn onUserLoggedIn={onUserLoggedIn} />} />
                <Route path='/signup' element={<SignUp />} />
            </Routes>
        </div>
        <Outlet />
    </>
}

export default Public