import { Outlet, Route, Routes } from 'react-router'
import { Register, Login } from './signInPages'
import { NotFound } from './index'

function SignIn({ onUserLoggedIn }) {
    return <>
        <div className='container'>
            <Routes>
                <Route path='/' element={<Login onUserLoggedIn={onUserLoggedIn} />} />
                <Route path='/login' element={<Login onUserLoggedIn={onUserLoggedIn} />} />
                <Route path='/register' element={<Register />} />
                <Route path='/*' element={<NotFound />} />
            </Routes>
        </div>

        <Outlet />
    </>
}

export default SignIn